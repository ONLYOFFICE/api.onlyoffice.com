# EntityQuotaSettingsDto
The default storage quota of users, rooms or AI agents, as it is stored.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enableQuota** | **Boolean** | Specifies if the quota is enabled for the tenant entity or not. | [optional] |
| **defaultQuota** | **Long** (int64) | The default quota of the tenant entity. | [optional] |
| **lastRecalculateDate** | **Date** (date-time) | The date of the last quota recalculation. | [optional] |
| **lastModified** | **Date** (date-time) | The timestamp indicating when the settings were last modified. | [optional] |
