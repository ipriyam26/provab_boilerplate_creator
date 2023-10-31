import re
from typing import List
from regex import COLUMN_PARSER, DOUBLETYPE_LENGTH_DECIMAL_PARSER, ENUM_SET_PARSER, GENERICTYPE_LENGTH_PARSER, TABLE_PARSER

from type import Column, Table, TypeDetail


class TableFactory:
    def __init__(self, sql: str):
        self.sql = sql

    def parse_type(self,type_str):
        if "enum" in type_str or "set" in type_str:
            if match := re.match(ENUM_SET_PARSER, type_str):
                datatype, values = match.groups()
                return TypeDetail(datatype, None, [v.strip("'") for v in values.split(",")])

        elif any(x in type_str for x in ["decimal", "float", "double"]):
            if match := re.match(DOUBLETYPE_LENGTH_DECIMAL_PARSER, type_str):
                datatype, length, decimals = match.groups()
                return TypeDetail(datatype, length, decimals=decimals)
        elif match := re.match(GENERICTYPE_LENGTH_PARSER, type_str):
            datatype, length = match.groups()
            return TypeDetail(datatype, length)

        return None


    def parse(self)->Table:
        match = re.search(TABLE_PARSER, self.sql)
        self.name = match[1]
        columns_part = match[2].strip()


        columns: List[Column] = []
        for column_match in re.finditer(COLUMN_PARSER, columns_part):
            name = column_match.group(1)
            rest = column_match.group(2).strip().split(" ")
            column_info = Column(name, self.parse_type(rest[0]))
            primary_key = None

            for attr in rest[1:]:
                if attr == "AUTO_INCREMENT":
                    column_info.auto_increment = True
                elif attr == "DEFAULT":
                    column_info.default = (
                        rest[rest.index("DEFAULT") + 1].removesuffix(",").strip()
                    )
                    if column_info.default.strip().replace(",", "") == "NULL":
                        column_info.default = None
                        column_info.not_null = False
                    elif column_info.default.startswith("'"):
                        column_info.default = column_info.default[1:-1].strip()
                elif attr == "NOT":
                    column_info.not_null = True
                elif attr == "NULL":
                    if column_info.not_null:
                        column_info.not_null = False
                elif attr == "PRIMARY":
                    primay_key = column_info
                elif attr == "UNIQUE":
                    column_info.unique = True
            columns.append(column_info)

        return Table(self.name, columns, primary_key)