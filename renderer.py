from abc import ABC, abstractmethod
from typing import Any, Dict, List

from jinja2 import Environment, FileSystemLoader, Template

from type import Table
from utils import (
    to_camel_case,
    to_file_name,
    to_lower_pascal_case,
    to_pascal_case,
    to_singular,
)


class BaseRenderer:
    template_name = ""
    file_extension = ""

    def template_loader(self) -> Template:
        env = Environment(loader=FileSystemLoader("template"))
        return env.get_template(self.template_name)

    @abstractmethod
    def data_generator(self, **kwargs) -> Dict[str, Any]:
        pass

    def render(self, **kwargs):
        data = self.data_generator(**kwargs)
        content = self.template_loader().render(data)
        self.write_to_file(data["class_name"], content)

    def write_to_file(self, class_name: str, content: str):
        file_name = to_file_name(f"{class_name}{self.file_extension}")
        with open(file_name, "w") as f:
            f.write(content)

    @classmethod
    def render_all(
        cls,
        table: Table,
        typeorm_imports: List[str],
        class_validator_imp: List[str],
        columns: List[Dict[str, Any]],
        key_column: str,
    ):
        entity = EntityRenderer()
        entity.render(
            table=table,
            typeorm_imports=typeorm_imports,
            class_validator_imp=class_validator_imp,
            columns=columns,
            key_column=key_column,
        )
        partial = PartialRenderer()
        partial.render(table=table, columns=columns)
        filter_obj = FilterRenderer()
        filter_obj.render(table=table, columns=columns)
        sorting = SortingRenderer()
        sorting.render(
            table=table,
            columns=columns,
        )
        loader = LoaderRenderer()
        loader.render(
            table=table,
            columns=columns,
            key_column=key_column,
        )
        service = ServiceRenderer()
        service.render(table=table)
        resolver = ResolverRenderer()
        resolver.render(table=table)


class EntityRenderer(BaseRenderer):
    template_name = "entity_template.jinja2"
    file_extension = ".entity.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        print(kwargs.get("table").name)
        # print((kwargs.get("table").name))
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
            "typeorm_imports": kwargs.get("typeorm_imports"),
            "class_validator_imports": kwargs.get("class_validator_imp"),
            "input_type_name": to_singular(
                to_lower_pascal_case(kwargs.get("table").name)
            ),
            "entity_name": kwargs.get("table").name,
            "columns": kwargs.get("columns"),
        }


class PartialRenderer(BaseRenderer):
    template_name = "partial_template.jinja2"
    file_extension = ".partial.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
            "input_type_name": to_camel_case(kwargs.get("table").name),
            "columns": kwargs.get("columns"),
        }


class FilterRenderer(BaseRenderer):
    template_name = "filter_template.jinja2"
    file_extension = ".filter.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
            "columns": kwargs.get("columns"),
        }


class SortingRenderer(BaseRenderer):
    template_name = "sorting_template.jinja2"
    file_extension = ".sorting.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
            "columns": kwargs.get("columns"),
        }


class LoaderRenderer(BaseRenderer):
    template_name = "loader_template.jinja2"
    file_extension = ".loader.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
            "columns": kwargs.get("columns"),
            "entity_name": kwargs.get("table").name,
            "key_column": kwargs.get("key_column"),
            "input_type_name": to_lower_pascal_case(kwargs.get("table").name),
            "input_type_name_singular": to_singular(
                to_lower_pascal_case(kwargs.get("table").name)
            ),
        }


class ServiceRenderer(BaseRenderer):
    template_name = "service_template.jinja2"
    file_extension = ".service.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
            "input_type_name": to_camel_case(kwargs.get("table").name),
        }


class ResolverRenderer(BaseRenderer):
    template_name = "resolver_template.jinja2"
    file_extension = ".resolver.ts"

    def data_generator(self, **kwargs) -> Dict[str, Any]:
        return {
            "class_name": to_pascal_case(kwargs.get("table").name),
        }
