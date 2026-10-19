# AuthKeyRequest
One key of a provider and the value to store for it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The key name, as `GET api/2.0/settings/authservice` lists it in `props`. | [required] [example: `googleClientId`] [nullable] |
| **value** | **String** | The value to store. An empty string clears the key. | [required] [example: `1234567890-abc.apps.googleusercontent.com`] [minLength: 0] [maxLength: 4000] [nullable] |
| **title** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `Client ID`] [nullable] |
| **type** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `text`] [nullable] |
| **options** | **List** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `[s3, gcs]`] [nullable] |
| **dependsOn** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `storageType`] [nullable] |
| **dependsOnValue** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `s3`] [nullable] |
