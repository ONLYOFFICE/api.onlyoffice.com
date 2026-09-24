# TenantDomainValidator
The domain validator.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **regex** | **String** | The regex string to validate a domain. | [optional] [example: `^[a-z0-9]([a-z0-9-]){1,61}[a-z0-9]$`] [nullable] |
| **minLength** | **Integer** (int32) | The minimum length of the valid domain. | [optional] [example: `6`] |
| **maxLength** | **Integer** (int32) | The maximum length of the valid domain. | [optional] [example: `63`] |
