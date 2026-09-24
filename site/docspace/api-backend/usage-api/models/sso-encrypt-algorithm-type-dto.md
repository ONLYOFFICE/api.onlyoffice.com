# SsoEncryptAlgorithmTypeDto
The encryption algorithms the SSO settings accept.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **aes128** | **String** | The AES-128-CBC encryption algorithm, which the built-in configuration uses. | [optional] [example: `http://www.w3.org/2001/04/xmlenc#aes128-cbc`] [nullable] |
| **aes256** | **String** | The AES-256-CBC encryption algorithm, the strongest of the three. | [optional] [example: `http://www.w3.org/2001/04/xmlenc#aes256-cbc`] [nullable] |
| **triDec** | **String** | The Triple DES CBC encryption algorithm, kept for identity providers that support nothing newer. | [optional] [example: `http://www.w3.org/2001/04/xmlenc#tripledes-cbc`] [nullable] |
