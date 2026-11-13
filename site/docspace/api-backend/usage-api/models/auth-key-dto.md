# AuthKeyDto
One key of an authorization provider or a storage, with how the settings form shows it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The authorization key name. | [required] [example: `Auth-Key`] [nullable] |
| **value** | **String** | The authorization key value. | [required] [example: `abc123xyz456`] [minLength: 0] [maxLength: 4000] [nullable] |
| **title** | **String** | The authorization key title. | [optional] [example: `API key`] [nullable] |
| **type** | **String** | The field type: text, password, select, toggle. | [optional] [example: `password`] [nullable] |
| **options** | **List** | The list of options for select type fields. | [optional] [example: `[s3, gcs]`] [nullable] |
| **dependsOn** | **String** | The name of another key of the same form this field depends on for visibility; null when the field is always shown. | [optional] [example: `databaseType`] [nullable] |
| **dependsOnValue** | **String** | The first of `dependsOnValues`, kept for clients that read a single value; null when the field is always shown. | [optional] [example: `mysql`] [nullable] |
| **dependsOnValues** | **List** | Every value of the `dependsOn` key that makes this field visible; null when the field is always shown. Read this list rather than `dependsOnValue`, which holds only its first value. | [optional] [example: `[mysql, postgresql]`] [nullable] |
