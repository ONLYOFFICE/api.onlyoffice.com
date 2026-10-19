# IpRestrictionDto
The IP restiction parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The IP restiction ID. | [optional] [example: `1`] |
| **tenantId** | **Integer** (int32) | The tenant ID. | [optional] [example: `1`] |
| **ip** | **String** | The IP address. | [required] [example: `192.0.2.1`] [nullable] |
| **forAdmin** | **Boolean** | Specifies if the IP address is for administrator users only or not. | [optional] [example: `false`] |
