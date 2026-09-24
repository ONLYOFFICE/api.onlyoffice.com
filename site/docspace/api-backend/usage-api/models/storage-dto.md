# StorageDto
One third-party storage provider the portal data can be kept in, with the keys it expects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The provider's key, which is what `PUT api/2.0/settings/storage` and its CDN and backup counterparts take as the storage to switch to. The built-in local storage has no entry of its own: a listing in which nothing is `current` means the data sits locally. | [required] [example: `s3`] [nullable] |
| **title** | **String** | The provider name in the portal language, falling back to `id` when this build ships no wording for it. | [required] [example: `Amazon AWS S3`] [nullable] |
| **properties** | [**List**](auth-key.md) | The settings the provider expects, each with its key, its localised label and the value the server currently holds. For the entry marked `current` the values come from the portal's saved storage settings and for the others from the installation configuration, so a setting nobody has configured comes back with an empty value rather than being left out. | [optional] [example: `[{name=acesskey, value=AKIAIOSFODNN7EXAMPLE, title=Access key}]`] [nullable] |
| **current** | **Boolean** | Whether the portal is using this provider right now. At most one entry of a listing has it set. | [required] [example: `true`] |
| **isSet** | **Boolean** | Whether the provider's keys are already filled in on the server, so it could be switched to without sending credentials. It says nothing about whether the credentials still work. | [required] [example: `true`] |
