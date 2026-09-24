# TenantEntityQuotaSettings
The tenant entity quota settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enableQuota** | **Boolean** | Specifies if the quota is enabled for the tenant entity or not. | [optional] [example: `true`] |
| **defaultQuota** | **Long** (int64) | The default quota of the tenant entity. | [optional] [example: `1000`] |
| **lastRecalculateDate** | **Date** (date-time) | The date of the last quota recalculation. | [optional] [example: `2024-01-01T00:00:00Z`] [nullable] |
