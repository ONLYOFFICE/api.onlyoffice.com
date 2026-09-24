# SsoSettingsV2ConstantsDto
The SSO settings constants: every value the settings accept, by name.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **ssoNameIdFormatType** | [**SsoNameIdFormatTypeDto**](sso-name-id-format-type-dto.md) | The values the `nameIdFormat` of the identity provider settings accepts. The built-in configuration uses the SAML 2.0 transient format. | [optional] |
| **ssoBindingType** | [**SsoBindingTypeDto**](sso-binding-type-dto.md) | The values the `ssoBinding` and `sloBinding` of the identity provider settings accept - how the portal sends its sign-in and sign-out requests. The built-in configuration uses HTTP POST for both. | [optional] |
| **ssoSigningAlgorithmType** | [**SsoSigningAlgorithmTypeDto**](sso-signing-algorithm-type-dto.md) | The values the `signingAlgorithm` of the service provider certificate and the `verifyAlgorithm` of the identity provider certificate accept. The built-in configuration uses RSA-SHA1 for both. | [optional] |
| **ssoEncryptAlgorithmType** | [**SsoEncryptAlgorithmTypeDto**](sso-encrypt-algorithm-type-dto.md) | The values the `encryptAlgorithm` and `decryptAlgorithm` of the certificate settings accept. The built-in configuration uses AES-128 everywhere. | [optional] |
| **ssoSpCertificateActionType** | [**SsoSpCertificateActionTypeDto**](sso-sp-certificate-action-type-dto.md) | The values the `action` of a service provider certificate accepts, which is what the portal's own key pair may be used for. | [optional] |
| **ssoIdpCertificateActionType** | [**SsoIdpCertificateActionTypeDto**](sso-idp-certificate-action-type-dto.md) | The values the `action` of an identity provider certificate accepts, which is what the provider's certificate may be used for - the mirror image of the service provider actions. | [optional] |
