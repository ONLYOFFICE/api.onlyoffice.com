# DomainNameRulesDto
The rules a portal name is checked against.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **regex** | **String** | The pattern the portal name has to match. | [optional] [example: `^[a-z0-9]([a-z0-9-]){1,61}[a-z0-9]$`] [nullable] |
| **minLength** | **Integer** (int32) | The shortest portal name accepted. | [optional] [example: `6`] |
| **maxLength** | **Integer** (int32) | The longest portal name accepted. | [optional] [example: `63`] |
