# QuotaSettingsRequestsDto
The default storage limit given to newly created users, rooms or AI agents, and whether it is enforced.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enableQuota** | **Boolean** | Whether the limit is enforced at all. While it is false the size is ignored and nothing created afterwards carries a limit; objects that already have one keep it either way. | [optional] [example: `true`] |
| **defaultQuota** | [**QuotaSettingsRequestsDto_defaultQuota**](quota-settings-requests-dto-default-quota.md) |  | [required] |
