# ThirdPartyAccountDto
A third-party storage account the caller has connected.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **corporate** | **Boolean** | Whether the account is attached to the legacy Common section, which is the case only for accounts inherited from an older portal. | [optional] [example: `false`] |
| **roomsStorage** | **Boolean** | Whether the account is attached to the Rooms section, room templates and the archive counted in. This is where `POST api/2.0/files/thirdparty` puts every account it connects. | [optional] [example: `true`] |
| **customer\_title** | **String** | The name the account is shown under in the portal, as it was saved when the account was connected. | [optional] [example: `Nextcloud storage`] [nullable] |
| **provider\_id** | **Integer** (int32) | The account ID to send to `DELETE api/2.0/files/thirdparty/{providerId}`, or as `providerId` to re-authenticate the account. | [optional] [example: `12`] [nullable] |
| **provider\_key** | **String** | The storage service behind the account. `WebDav` stands for every WebDAV preset, so it does not tell which of them was chosen when the account was connected. | [optional] [example: `WebDav`] [nullable] |
