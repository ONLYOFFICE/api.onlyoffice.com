# ThirdPartyParams
A third-party storage account connected to the portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **auth\_data** | [**AuthData**](auth-data.md) | The stored credentials of the account. They are not filled in here: the portal does not give back credentials once an account is saved. | [optional] |
| **corporate** | **Boolean** | Whether the account is attached to the legacy Common section, which is the case only for accounts inherited from an older portal. | [optional] [example: `false`] |
| **roomsStorage** | **Boolean** | Whether the account is attached to the Rooms section, room templates and the archive counted in. This is where `POST api/2.0/files/thirdparty` puts every account it connects. | [optional] [example: `true`] |
| **customer\_title** | **String** | The name the account is shown under in the portal, as it was saved when the account was connected. | [optional] [example: `Nextcloud storage`] [nullable] |
| **provider\_id** | **Integer** (int32) | The account ID to send to `DELETE api/2.0/files/thirdparty/{providerId}`, or as `providerId` to re-authenticate the account. | [optional] [example: `12`] [nullable] |
| **provider\_key** | **String** | The storage service behind the account. `WebDav` stands for every WebDAV preset, so it does not tell which of them was chosen when the account was connected. | [optional] [example: `WebDav`] [nullable] |
