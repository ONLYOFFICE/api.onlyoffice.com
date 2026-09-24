# SsoCertificate
The SSO certificate parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **selfSigned** | **Boolean** | Specifies if a certificate is self-signed or not. | [optional] [example: `false`] |
| **crt** | **String** | The CRT certificate file. | [optional] [example: `crt file`] [nullable] |
| **key** | **String** | The certificate key. | [optional] [example: `key`] [nullable] |
| **action** | **String** | The certificate action. | [optional] [example: `validate`] [nullable] |
| **domainName** | **String** | The certificate domain name. | [optional] [example: `example.com`] [nullable] |
| **startDate** | **Date** (date-time) | The certificate start date. | [optional] [example: `2024-01-01T00:00:00Z`] |
| **expiredDate** | **Date** (date-time) | The certificate expiration date. | [optional] [example: `2024-01-01T00:00:00Z`] |
