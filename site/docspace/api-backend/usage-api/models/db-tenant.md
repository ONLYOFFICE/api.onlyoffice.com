# DbTenant
The database tenant parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The tenant ID. | [optional] [example: `1`] |
| **name** | **String** | The tenant name. | [optional] [example: `Tenant`] [maxLength: 255] [nullable] |
| **alias** | **String** | The tenant alias. | [optional] [example: `tenant`] [maxLength: 100] [nullable] |
| **mappedDomain** | **String** | Mapped domain | [optional] [example: `tenant.example.com`] [maxLength: 100] [nullable] |
| **version** | **Integer** (int32) | The tenant version. | [optional] [example: `5`] |
| **version\_Changed** | **Date** (date-time) | The Version_changed field. | [optional] [example: `2025-01-01T10:00:00Z`] [nullable] |
| **versionChanged** | **Date** (date-time) | The date and time when the version was changed. | [optional] [example: `2025-01-01T10:00:00Z`] |
| **language** | **String** | The tenant language. | [optional] [example: `en-US`] [maxLength: 10] [nullable] |
| **timeZone** | **String** | The tenant time zone. | [optional] [example: `UTC`] [maxLength: 50] [nullable] |
| **trustedDomainsRaw** | **String** | The tenant trusted domains raw. | [optional] [example: `tenant.exapmle.com, example.com`] [maxLength: 1024] [nullable] |
| **trustedDomainsEnabled** | [**TenantTrustedDomainsType**](tenant-trusted-domains-type.md) | The type of the tenant trusted domains. | [optional] [enum: `0`, `1`, `2`] |
| **status** | [**TenantStatus**](tenant-status.md) | The tenant status. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`] |
| **statusChanged** | **Date** (date-time) | The date and time when the tenant status was changed. | [optional] [example: `2025-01-01T12:00:00Z`] [nullable] |
| **statusChangedHack** | **Date** (date-time) | The hacked date and time when the tenant status was changed. | [optional] [example: `2025-01-01T12:00:00Z`] |
| **creationDateTime** | **Date** (date-time) | The tenant creation date. | [optional] [example: `2025-01-01T12:00:00Z`] |
| **ownerId** | **UUID** (uuid) | The tenant owner ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **paymentId** | **String** | The tenant payment ID. | [optional] [example: `pay_1234567890`] [maxLength: 38] [nullable] |
| **industry** | [**TenantIndustry**](tenant-industry.md) | The tenant industry. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`] |
| **lastModified** | **Date** (date-time) | The date and time when the tenant was last modified. | [optional] [example: `2025-02-01T08:30:00Z`] |
| **calls** | **Boolean** | Specifies if the calls are available for the current tenant or not. | [optional] [example: `true`] |
| **partner** | [**DbTenantPartner**](db-tenant-partner.md) | The database tenant partner parameters. | [optional] |
