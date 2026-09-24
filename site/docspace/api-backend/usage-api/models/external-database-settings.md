# ExternalDatabaseSettings
The connection parameters of an external database.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **databaseType** | **String** | The engine of the external database. | [optional] [example: `mysql`] [nullable] |
| **databaseTypeEnum** | [**ExternalDatabaseType**](external-database-type.md) | The engine of an external database. | [optional] [enum: `0`, `1`] |
| **dbHost** | **String** | The host name or the IP address of the database server. | [optional] [example: `localhost`] [nullable] |
| **dbPort** | **Integer** (int32) | The port the database server listens on. | [optional] [example: `3306`] |
| **dbName** | **String** | The name of the database to connect to. | [optional] [example: `docspace`] [nullable] |
| **dbUser** | **String** | The user name to connect with. | [optional] [example: `root`] [nullable] |
| **dbPassword** | **String** | The password to connect with. | [optional] [example: `my-secret-password`] [nullable] |
| **dbSsl** | **Boolean** | Specifies whether the connection to the database is secured with SSL. | [optional] [example: `false`] |
| **sqliteFilePath** | **String** | The path to the database file, used by the SQLite engine only. | [optional] [example: `/var/lib/docspace/external.db`] [nullable] |
