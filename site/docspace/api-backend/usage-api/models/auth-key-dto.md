# AuthKeyDto
One key of an authorization provider or a storage, with how the settings form shows it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The authorization key name. | [required] [example: `Auth-Key`] [nullable] |
| **value** | **String** | The authorization key value. | [required] [example: `abc123xyz456`] [minLength: 0] [maxLength: 4000] [nullable] |
| **title** | **String** | The authorization key title. | [optional] [example: `API key`] [nullable] |
| **type** | **String** | The field type: text, password, select, toggle. | [optional] [example: `password`] [nullable] |
| **options** | **List** | The list of options for select type fields. | [optional] [example: `[s3, gcs]`] [nullable] |
| **dependsOn** | **String** | The name of another key this field depends on for visibility. | [optional] [example: `storageType`] [nullable] |
| **dependsOnValue** | **String** | The value of the `dependsOn` key that makes this field visible. | [optional] [example: `s3`] [nullable] |
