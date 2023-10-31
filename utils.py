def int_min_max(length):
    if length <= 0:
        return None

    max_value = int("9" * length)
    min_value = -max_value

    return min_value, max_value


# convert abs_src_dfsd or AbsSrcDfsd or  to absSrcDfsd
def to_camel_case(name: str):
    return name[0].lower() + name[1:]


# convert abs_src_dfsd to AbsSrcDfsd
def to_pascal_case(name: str):
    return "".join(n[0].upper() + n[1:] for n in name.split("_"))

def to_singular(name:str):
    return name[:-1] if name.endswith('s') else name
def to_lower_pascal_case(name: str):
    value = to_pascal_case(name)
    return value[0].lower() + value[1:]


# convert AbsSrcDfs.entity.ts to abs-src-dfs.entity.ts
def to_file_name(filename: str) -> str:
    return (
        "result/"
        + "".join(f"-{char.lower()}" if char.isupper() else char for char in filename)[
            1:
        ]
    )
