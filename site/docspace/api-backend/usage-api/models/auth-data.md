# AuthData
The credentials of a third-party storage account. The portal takes them when an account is connected and does not give them back afterwards.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **login** | **String** | The account name at the storage service. | [optional] [example: `user@example.com`] [nullable] |
| **password** | **String** | The password of the account at the storage service. | [optional] [example: `p@ssw0rd!`] [nullable] |
| **rawToken** | **String** | The token of the account, kept as the raw JSON document the storage service issued it in. | [optional] [example: `{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires_in":3600}`] [nullable] |
| **url** | **URI** (uri) | The address of the storage server the account lives on. | [optional] [example: `https://cloud.example.com/remote.php/dav/files/admin/`] [nullable] |
| **provider** | **String** | The storage service the credentials belong to, as the provider key the account was connected with. | [optional] [example: `WebDav`] [nullable] |
| **token** | [**OAuth20Token**](o-auth-20-token.md) | The same token as in `rawToken`, parsed into its OAuth 2.0 fields. | [optional] |
