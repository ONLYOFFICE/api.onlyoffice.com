# SsoIdpCertificateAdvanced
The IdP advanced certificate parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **verifyAlgorithm** | **String** | The certificate verification algorithm. | [optional] [example: `rsa-sha256`] [nullable] |
| **verifyAuthResponsesSign** | **Boolean** | Specifies if the signatures of the SAML authentication responses sent to SP will be verified or not. | [optional] [example: `true`] |
| **verifyLogoutRequestsSign** | **Boolean** | Specifies if the signatures of the SAML logout requests sent to SP will be verified or not. | [optional] [example: `true`] |
| **verifyLogoutResponsesSign** | **Boolean** | Specifies if the signatures of the SAML logout responses sent to SP will be verified or not. | [optional] [example: `true`] |
| **decryptAlgorithm** | **String** | The certificate decryption algorithm. | [optional] [example: `aes256-cbc`] [nullable] |
| **decryptAssertions** | **Boolean** | Specifies if the assertions will be decrypted or not. | [optional] [example: `true`] |
