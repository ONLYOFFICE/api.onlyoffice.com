# MigrationApiInfo
The migration API information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **migratorName** | **String** | The migrator name. | [optional] [example: `Nextcloud`] [nullable] |
| **operation** | **String** | The migration operation. | [optional] [example: `parse`] [nullable] |
| **failedArchives** | **List** | The list of failed archives. | [optional] [example: `[archive1.zip, archive2.zip]`] [nullable] |
| **users** | [**List**](migrating-api-user.md) | The list of migrating users. | [optional] [example: `[{id=9924256B-447C-4F19-9dbd-8ad8c39e8ff5, email=user@example.com, shouldImport=true}]`] [nullable] |
| **withoutEmailUsers** | [**List**](migrating-api-user.md) | The list of migrating users without email. | [optional] [example: `[{id=9924256B-447C-4F19-9dbd-8ad8c39e8ff5, shouldImport=false}]`] [nullable] |
| **existUsers** | [**List**](migrating-api-user.md) | The list of existing migrating users. | [optional] [example: `[{id=9924256B-447C-4F19-9dbd-8ad8c39e8ff5, email=existing@example.com, shouldImport=true}]`] [nullable] |
| **groups** | [**List**](migrating-api-group.md) | The list of migrating groups. | [optional] [example: `[{id=1, name=Group1, shouldImport=true}]`] [nullable] |
| **importPersonalFiles** | **Boolean** | Specifies whether to import personal files or not. | [optional] [example: `true`] |
| **importSharedFiles** | **Boolean** | Specifies whether to import shared files or not. | [optional] [example: `true`] |
| **importSharedFolders** | **Boolean** | Specifies whether to import shared folders or not. | [optional] [example: `true`] |
| **importCommonFiles** | **Boolean** | Specifies whether to import common files or not. | [optional] [example: `true`] |
| **importProjectFiles** | **Boolean** | Specifies whether to import project files or not. | [optional] [example: `false`] |
| **importGroups** | **Boolean** | Specifies whether to import groups or not. | [optional] [example: `true`] |
| **successedUsers** | **Integer** (int32) | The number of successfully migrated users. | [optional] [example: `50`] |
| **failedUsers** | **Integer** (int32) | The number of unsuccessfully migrated users. | [optional] [example: `2`] |
| **files** | **List** | The list of migrated files. | [optional] [example: `[document.docx, spreadsheet.xlsx]`] [nullable] |
| **errors** | **List** | The list of migration errors. | [optional] [example: `[User not found, File access denied]`] [nullable] |
