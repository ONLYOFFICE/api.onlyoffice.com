# ThirdPartyBackupRequestDto
The credentials and the title of the third-party storage account the portal writes its backups to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **url** | **String** | The address of the storage server to connect to. It is needed by the WebDAV presets whose server is not known in advance (`WebDav`, `Nextcloud`, `ownCloud`), where it points at the WebDAV endpoint of that server, and by `SharePoint`; the presets with a fixed address and the OAuth services ignore it. | [optional] [example: `https://cloud.example.com/remote.php/dav/files/admin/`] [nullable] |
| **login** | **String** | The account name at the storage service, used by the services that authenticate by login and password. A login sent without a password is rejected as an invalid request. | [optional] [example: `admin`] [nullable] |
| **password** | **String** | The password, or the application password, for `login` at the storage service. Either this or `token` has to be sent, and the credentials are verified against the service before the account is saved. | [optional] [example: `p@ssw0rd!`] [nullable] |
| **token** | **String** | The OAuth 2.0 authorization code from the consent screen of `Box`, `DropboxV2`, `GoogleDrive` or `OneDrive` - not an access token: the portal exchanges the code for its own token and keeps that. The client ID and redirect URL the consent screen URL is built from come from `GET api/2.0/files/thirdparty/capabilities`. | [optional] [example: `4/0AY0e-g5Tn8vQrM2kZs7xB1pLd9`] [nullable] |
| **customerTitle** | **String** | The name the backup account is shown under in the portal. Characters that a folder title cannot hold are replaced and the value is truncated; on the first connection a title that comes out of that empty is refused. | [optional] [example: `Backup storage`] [nullable] |
| **providerKey** | **String** | The storage service to connect, as the `key` of `GET api/2.0/files/thirdparty/providers`; the value is matched case-insensitively. `Nextcloud` and `ownCloud` are presets over WebDAV and are stored and reported back as `WebDav`. | [optional] [example: `Nextcloud`] [nullable] |
