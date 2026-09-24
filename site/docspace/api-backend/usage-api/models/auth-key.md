# AuthKey
The authorization key parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The authorization key name. | [required] [example: `Auth-Key`] [nullable] |
| **value** | **String** | The authorization key value. | [required] [example: `abc123xyz456`] [minLength: 0] [maxLength: 4000] [nullable] |
| **title** | **String** | The authorization key title. | [optional] [example: `API key`] [nullable] |
| **type** | **String** | The field type: text, password, select, toggle. | [optional] [nullable] |
| **options** | **List** | The list of options for select type fields. | [optional] [nullable] |
| **dependsOn** | **String** | The name of another key this field depends on for visibility. | [optional] [nullable] |
| **dependsOnValue** | **String** | The value of ASC.Web.Studio.UserControls.Management.AuthKey.DependsOn key that makes this field visible. | [optional] [nullable] |
