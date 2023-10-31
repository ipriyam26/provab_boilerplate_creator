import re
from typing import List
from regex import COLUMN_PARSER, TABLE_PARSER
from type import Column, Table, TypeDetail
from utils import int_min_max


sql_to_ts_mapper = {
    "int": {"ts_type": "number", "decorators": "@IsInt()"},
    "varchar": {
        "ts_type": "string",
        "decorators": "@IsString()",
    },
    "text": {"ts_type": "string", "decorators": "@IsString"},
    "longtext": {
        "ts_type": "string",
        "decorators": "@IsString()",
    },
    "datetime": {"ts_type": "Date", "decorators": "@IsDate()"},
    "timestamp": {"ts_type": "Date", "decorators": "@IsDate()"},
    "float": {"ts_type": "number", "decorators": "@IsNumber()"},
    "enum": {"ts_type": "string", "decorators": "@IsEnum()"},
    "tinyint": {"ts_type": "number", "decorators": "@IsInt()"},
    "smallint": {"ts_type": "number", "decorators": "@IsInt()"},
    "mediumint": {"ts_type": "number", "decorators": "@IsInt()"},
    "bigint": {"ts_type": "number", "decorators": "@IsInt()"},
    "double": {"ts_type": "number", "decorators": "@IsNumber()"},
    "decimal": {"ts_type": "number", "decorators": "@IsNumber()"},
    "date": {"ts_type": "Date", "decorators": "@IsDate()"},
    "time": {
        "ts_type": "string",  # or Date depending on your needs
        "decorators": "@IsString()",
    },
    "char": {"ts_type": "string", "decorators": "@IsString()"},
    "binary": {"ts_type": "string", "decorators": "@IsString()"},
    "varbinary": {"ts_type": "string", "decorators": "@IsString()"},
    "tinytext": {"ts_type": "string", "decorators": "@IsString()"},
    "mediumtext": {"ts_type": "string", "decorators": "@IsString()"},
    "tinyblob": {"ts_type": "string", "decorators": "@IsString()"},
    "blob": {"ts_type": "string", "decorators": "@IsString()"},
    "mediumblob": {"ts_type": "string", "decorators": "@IsString()"},
    "longblob": {"ts_type": "string", "decorators": "@IsString()"},
    "set": {"ts_type": "string[]", "decorators": "@IsArray()"},
    "boolean": {"ts_type": "boolean", "decorators": "@IsBoolean()"},
}

text_types = [
    "varchar",
    "char",
    "text",
    "longtext",
    "mediumtext",
    "tinytext",
]
number_types = [
    "int",
    "tinyint",
    "smallint",
    "mediumint",
    "bigint",
]
decimal_types = ["float", "double", "decimal"]


class Parser:
    def __init__(self, column: Column) -> None:
        self.column = column
        self.typeorm_imports = ["Column", "Entity"]
        self.classvalidator_imports = set()

    def get_all_column_data(self):
        return {
            "ts_type": self._get_ts_type(),
            "typeorm_options": self.convert_to_typeorm(),
            "validators": self.convert_to_classvalidator(),
            "name": self.column.name,
        }

    def _get_ts_type(self):
        return sql_to_ts_mapper.get(self.column.type.datatype, {"ts_type": "any"}).get(
            "ts_type"
        )

    def _get_type_options(self):
        options = {
            "length": self.column.type.length,
            "precision": self.column.type.decimals,
            "enum": self.column.type.values or None,
        }
        return {key: value for key, value in options.items() if value is not None}

    def _get_column_options(self):
        options = {
            "generated": "increment" if self.column.auto_increment else None,
            "default": self.column.default or None,
            "nullable": None if self.column.not_null else "true",
            "unique": "true" if self.column.unique else None,
        }
        return {key: value for key, value in options.items() if value is not None}

    def _get_secondary_decorators(self):
        rules = []
        datatype = self.column.type.datatype
        if datatype == "enum":
            rules.append(f"@IsEnum({self.column.type.values})")
            self.classvalidator_imports.add("IsEnum")
        elif datatype in decimal_types and self.column.type.decimals:
            rules.append(
                "@IsNumber({" + f"maxDecimalPlaces:{self.column.type.decimals}" + "})"
            )
            self.classvalidator_imports.add("IsNumber")
        elif datatype in number_types and self.column.type.length:
            min_value, max_value = int_min_max(int(self.column.type.length))
            if min_value:
                rules.append(f"@Min({min_value})")
                self.classvalidator_imports.add("Min")
            if max_value:
                rules.append(f"@Max({max_value})")
                self.classvalidator_imports.add("Max")
        elif datatype == "set":
            rules.append(f"@IsArray({self.column.type.values})")
            self.classvalidator_imports.add("IsArray")
        elif datatype in text_types and self.column.type.length:
            rules.append(f"@Length({self.column.type.length})")
            self.classvalidator_imports.add("Length")
        if not self.column.not_null:
            rules.append("@IsOptional()")
            self.classvalidator_imports.add("IsOptional")
        if self.column.unique:
            rules.append("@IsUnique()")
            self.classvalidator_imports.add("IsUnique")
        return rules

    def convert_to_ts(self) -> str:
        ts_type = self._get_ts_type()
        return f"{self.column.name}: {ts_type};"

    def convert_to_typeorm(self) -> str:
        type_options = self._get_type_options()
        column_options = self._get_column_options()

        all_options = {**type_options, **column_options}
        options_str = ", ".join(
            [f"{key}: {value}" for key, value in all_options.items()]
        )

        return f" type: '{self.column.type.datatype}', {options_str} "

    def convert_to_classvalidator(self) -> List[str]:
        main_decorator = sql_to_ts_mapper[self.column.type.datatype]["decorators"]
        secondary_decorators = self._get_secondary_decorators()
        return secondary_decorators + [main_decorator]
