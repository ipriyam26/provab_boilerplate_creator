from pprint import pprint
from factory import TableFactory
from mapper import Parser
from renderer import BaseRenderer, EntityRenderer
from type import Table
from utils import to_camel_case, to_pascal_case
from jinja2 import Environment, FileSystemLoader


if __name__ == "__main__":
    sql = """CREATE TABLE `auth_users` (
  `id` int(11) NOT NULL,
  `auth_role_id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(456) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `uuid` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `business_number` varchar(255) DEFAULT NULL,
  `iata` varchar(225) DEFAULT NULL COMMENT 'For B2B user',
  `business_phone` varchar(20) DEFAULT NULL,
  `agent_balance` double(16,2) DEFAULT 0.00,
  `credit_limit` double(16,2) DEFAULT 0.00,
  `due_amount` double(16,2) DEFAULT 0.00,
  `date_of_birth` date DEFAULT NULL,
  `title` int(10) DEFAULT 1,
  `image` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address2` varchar(225) DEFAULT NULL,
  `country` int(10) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL COMMENT 'Adding this field for b2c user',
  `city` varchar(255) DEFAULT NULL COMMENT 'Adding this field for b2c user',
  `core_city_id` int(11) DEFAULT NULL,
  `phone_code` varchar(10) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `zip_code` int(10) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `logout_date_time` timestamp NULL DEFAULT NULL,
  `socialuserid` varchar(255) DEFAULT NULL,
  `user_type` enum('Guest','User') DEFAULT NULL,
  `privilege_access` int(4) NOT NULL DEFAULT 0,
  `created_by_id` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `flightBookingId` varchar(45) DEFAULT NULL,
  `domain_logo` varchar(456) DEFAULT NULL,
  `api_list` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"""
    sql2 = """CREATE TABLE `activity_booking_details` (
  `origin` int(11) NOT NULL,
  `domain_origin` int(11) NOT NULL DEFAULT 1,
  `booking_source` varchar(20) NOT NULL,
  `booking_reference` varchar(20) NOT NULL,
  `app_reference` varchar(230) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `currency` char(6) NOT NULL,
  `clientReference` varchar(20) NOT NULL,
  `creationDate` timestamp NULL DEFAULT current_timestamp(),
  `creationUser` varchar(20) DEFAULT NULL,
  `paymentTypeCode` varchar(10) NOT NULL,
  `invoicingCompany_code` char(10) NOT NULL,
  `invoicingCompany_name` varchar(20) NOT NULL,
  `invoicingCompany_registrationNumber` varchar(30) NOT NULL,
  `pendingAmount` float DEFAULT NULL,
  `total` float NOT NULL,
  `admin_markup` float NOT NULL DEFAULT 0,
  `agent_markup` float NOT NULL DEFAULT 0,
  `convinence` float DEFAULT 0,
  `totalNet` float NOT NULL,
  `agent_payable` text DEFAULT NULL,
  `AgentServiceTax` text DEFAULT NULL,
  `service_tax` varchar(50) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `created_by_id` int(10) NOT NULL DEFAULT 0,
  `created_datetime` timestamp NOT NULL DEFAULT current_timestamp(),
  `holder_name` varchar(80) DEFAULT NULL,
  `holder_contact` varchar(100) DEFAULT NULL,
  `holder_email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;"""
    key_column = "auth_role_id"
    factory = TableFactory(sql)
    table = factory.parse()
    typeorm_imports = []
    class_validator_imports = []
    column_data = []
    for column in table.columns:
        parser = Parser(column=column)
        data = parser.get_all_column_data()
        typeorm_imports.extend(parser.typeorm_imports)
        class_validator_imports.extend(list(parser.classvalidator_imports))
        column_data.append(data)
    typeorm_imp = set(typeorm_imports)
    class_validator_imp = set(class_validator_imports)
    BaseRenderer.render_all(
        table=table,
        columns=column_data,
        key_column=key_column,
        typeorm_imports=typeorm_imp,
        class_validator_imp=class_validator_imp,
    )
