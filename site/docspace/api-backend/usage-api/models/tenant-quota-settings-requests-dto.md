# TenantQuotaSettingsRequestsDto
The storage limit set on one tenant of a self-hosted installation.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tenantId** | **Integer** (int32) | The tenant the limit applies to, by tenant ID. Only a self-hosted installation has more than one, which is why the operation is refused on SaaS. | [required] [example: `1`] |
| **quota** | **Long** (int64) | The limit in bytes. A negative value is not a smaller limit but the absence of one: it removes whatever limit the tenant had. The value is a ceiling on stored data and says nothing about how much of it is already used. | [optional] [example: `1048576`] |
