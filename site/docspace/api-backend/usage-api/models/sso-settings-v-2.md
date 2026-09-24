# SsoSettingsV2
The SSO portal settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **lastModified** | **Date** (date-time) | The timestamp indicating when the settings were last modified. | [optional] [example: `1990-01-01T00:00:00Z`] |
| **enableSso** | **Boolean** | Specifies if the SSO settings are enabled or not. | [optional] [example: `false`] [nullable] |
| **idpSettings** | [**SsoIdpSettings**](sso-idp-settings.md) | The SSO IdP settings. | [optional] |
| **idpCertificates** | [**List**](sso-certificate.md) | The list of the IdP certificates. | [optional] [example: `[{crt=base64-cert-data, key=base64-key-data}]`] [nullable] |
| **idpCertificateAdvanced** | [**SsoIdpCertificateAdvanced**](sso-idp-certificate-advanced.md) | The IdP advanced certificate. | [optional] |
| **spLoginLabel** | **String** | The SP login label. | [optional] [example: `Single Sign-on`] [nullable] |
| **spCertificates** | [**List**](sso-certificate.md) | The list of the SP certificates. | [optional] [example: `[{crt=base64-cert-data, key=base64-key-data}]`] [nullable] |
| **spCertificateAdvanced** | [**SsoSpCertificateAdvanced**](sso-sp-certificate-advanced.md) | The SP advanced certificate. | [optional] |
| **fieldMapping** | [**SsoFieldMapping**](sso-field-mapping.md) | The SSO field mapping. | [optional] |
| **hideAuthPage** | **Boolean** | Specifies if the authentication page will be hidden or not. | [optional] [example: `false`] |
| **usersType** | **Integer** (int32) | The user type. | [optional] [example: `1`] |
| **disableEmailVerification** | **Boolean** | Specifies if the email verification is disabled or not. | [optional] [example: `false`] |
