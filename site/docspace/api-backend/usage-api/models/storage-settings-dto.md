# StorageSettingsDto
The storage the portal keeps its data in, or serves its static content from.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **module** | **String** | The storage module, or `null` when the built-in storage is used. | [optional] [example: `S3`] [nullable] |
| **props** | **Map** | The connection properties stored for the module. | [optional] [example: `{region=eu-central-1, bucket=tenant-files}`] |
| **lastModified** | **Date** (date-time) | When the settings were last stored. | [optional] [example: `2025-01-01T12:00:00Z`] |
