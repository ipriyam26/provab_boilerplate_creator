from dataclasses import dataclass, field
from typing import List


@dataclass
class TypeDetail:
    datatype: str
    length: str = field(default=None)
    values: list = field(default_factory=list)  # for enum and set
    decimals: str = field(default=None)  # for decimal, float, double
    charset: str = field(default=None)  # for char, varchar
    collation: str = field(default=None)  # for char, varchar
    fractional_seconds: str = field(default=None)  # for datetime, timestamp
    bits: str = field(default=None)  # for bit

@dataclass
class Column:
    name:str
    type:TypeDetail
    auto_increment:bool = False
    default:str = field(default=None, repr=False)
    not_null:bool = False
    unique:bool = False

class Table:
    def __init__(self, name: str, columns: List[Column], primary_key: Column):
        self.name = name
        self.columns = columns
        self.primary_key = primary_key

    def __str__(self):
        columns = "\n".join([str(x) for x in self.columns])
        return f"Table Name: {self.name}\n({columns})"

    def get_all_types(self) -> List[str]:
        collect = {column.type.datatype for column in self.columns}
        return list(collect)