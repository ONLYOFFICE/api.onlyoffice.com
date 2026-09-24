# TenantQuotaSettings
The tenant quota settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enableQuota** | **Boolean** | Specifies if the tenant quota is enabled or not. | [optional] [example: `true`] |
| **quota** | **Long** (int64) | The tenant quota. | [optional] [example: `10737418240`] |
| **lastRecalculateDate** | **Date** (date-time) | The date of the last tenant quota recalculation. | [optional] [example: `1990-01-01T00:00:00Z`] [nullable] |
| **lastModified** | **Date** (date-time) | The timestamp indicating when the settings were last modified. | [optional] [example: `1990-01-01T00:00:00Z`] |
