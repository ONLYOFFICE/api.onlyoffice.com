# TfaSetupCodeDto
The secret to enrol in an authenticator application, in both of the forms an application can take it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **account** | **String** | The label the authenticator application will list the credential under, which is the caller's own email address. It identifies the entry to a person, and no application checks it. | [optional] [example: `john.doe@onlyoffice.com`] [nullable] |
| **manualEntryKey** | **String** | The secret in the base32 form that is typed into an application by hand. It describes the very same credential as `qrCodeSetupImageUrl`, and repeating the call hands back the same value for the account until the credential is reset. | [optional] [example: `JBSWY3DPEHPK3PXP`] [nullable] |
| **qrCodeSetupImageUrl** | **String** | The same secret as a scannable image, given as a `data:image/png;base64,` URL that can be rendered directly - it is not a link to fetch. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGMAAgAABAABiCEmiQAAAABJRU5ErkJggg==`] [nullable] |
