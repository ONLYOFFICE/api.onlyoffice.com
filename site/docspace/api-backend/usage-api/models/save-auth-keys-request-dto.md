# SaveAuthKeysRequestDto
The keys to store for one third-party authorization or storage provider.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The internal key of the provider, such as `google` or `box`. Take it from the `name` of `GET api/2.0/settings/authservice`. | [optional] [example: `google`] [nullable] |
| **title** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `Google`] [nullable] |
| **description** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `Lets users sign in with a Google account.`] [nullable] |
| **instruction** | **String** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `Create a project in the Google Cloud console and copy its OAuth client ID and secret.`] [nullable] |
| **canSet** | **Boolean** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `true`] |
| **paid** | **Boolean** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `false`] |
| **props** | [**List**](auth-key-request.md) | The keys of the provider with their new values, by the key names `GET api/2.0/settings/authservice` lists in `props`. | [optional] [example: `[{name=googleClientId, value=1234567890-abc.apps.googleusercontent.com}]`] [nullable] |
