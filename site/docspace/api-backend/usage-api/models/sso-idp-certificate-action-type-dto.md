# SsoIdpCertificateActionTypeDto
What the identity provider's certificate may be used for, as the `action` of an identity provider certificate.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **verification** | **String** | The certificate verifies the signatures on what the provider sends, and nothing else - the counterpart of the service provider's signing action. | [optional] [example: `verification`] [nullable] |
| **decrypt** | **String** | The certificate is used to decrypt what the provider sends, but verifies no signature. | [optional] [example: `decrypt`] [nullable] |
| **verificationAndDecrypt** | **String** | The certificate does both, which is what a single provider certificate has to be set to. | [optional] [example: `verification and decrypt`] [nullable] |
