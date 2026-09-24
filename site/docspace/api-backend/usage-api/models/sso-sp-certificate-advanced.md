# SsoSpCertificateAdvanced
The SP advanced certificate parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **signingAlgorithm** | **String** | The certificate signing algorithm. | [optional] [example: `rsa-sha256`] [nullable] |
| **signAuthRequests** | **Boolean** | Specifies if SP will sign the SAML authentication requests sent to IdP or not. | [optional] [example: `true`] |
| **signLogoutRequests** | **Boolean** | Specifies if SP will sign the SAML logout requests sent to IdP or not. | [optional] [example: `true`] |
| **signLogoutResponses** | **Boolean** | Specifies if SP will sign the SAML logout responses sent to IdP or not. | [optional] [example: `true`] |
| **encryptAlgorithm** | **String** | The certificate encryption algorithm. | [optional] [example: `aes256-cbc`] [nullable] |
| **decryptAlgorithm** | **String** | The certificate decryption algorithm. | [optional] [example: `aes256-cbc`] [nullable] |
| **encryptAssertions** | **Boolean** | Specifies if the assertions will be encrypted or not. | [optional] [example: `true`] |
