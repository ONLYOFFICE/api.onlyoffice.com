# BackupDto
The request parameters for starting a backup.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **storageType** | [**BackupStorageType**](backup-storage-type.md) | The storage the archive is written to. It defaults to `Documents`, and it decides which keys `storageParams` has to carry. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`] |
| **storageParams** | [**List**](item-key-value-pair-object-object.md) | The settings of the chosen storage, as an array of key and value pairs. `Documents` needs an integer `folderId`, `ThridpartyDocuments` a provider-specific non-integer `folderId`, `Local` a `filePath`, `ThirdPartyConsumer` a `module` plus the settings of that consumer, and `DataStore` none. The `subdir` key is added by the operation itself and must not be sent. | [optional] [example: `[{key=folderId, value=1234}]`] [nullable] |
| **dump** | **Boolean** | Backs up the whole server rather than this one portal. It requires the space access permission and works on a standalone installation only. | [optional] [example: `false`] |
