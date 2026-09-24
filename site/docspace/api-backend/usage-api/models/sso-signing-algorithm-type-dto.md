# SsoSigningAlgorithmTypeDto
The signing algorithms the SSO settings accept.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **rsaSha1** | **String** | The RSA-SHA1 signing algorithm, which the built-in configuration uses. SHA-1 is the weakest of the three and some identity providers no longer accept it. | [optional] [example: `http://www.w3.org/2000/09/xmldsig#rsa-sha1`] [nullable] |
| **rsaSha256** | **String** | The RSA-SHA256 signing algorithm. | [optional] [example: `http://www.w3.org/2001/04/xmldsig-more#rsa-sha256`] [nullable] |
| **rsaSha512** | **String** | The RSA-SHA512 signing algorithm. | [optional] [example: `http://www.w3.org/2001/04/xmldsig-more#rsa-sha512`] [nullable] |
