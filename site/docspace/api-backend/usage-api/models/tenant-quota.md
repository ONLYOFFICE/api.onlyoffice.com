# TenantQuota
The current tenant quota.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tenantId** | **Integer** (int32) | The tenant ID. | [optional] [example: `1`] |
| **name** | **String** | The tenant name. | [optional] [example: `Default`] [nullable] |
| **price** | **Double** (double) | The tenant price. | [optional] [example: `10.0`] |
| **priceCurrencySymbol** | **String** | The tenant price currency symbol. | [optional] [example: `$`] [nullable] |
| **priceISOCurrencySymbol** | **String** | The tenant price three-character ISO 4217 currency symbol. | [optional] [example: `USD`] [nullable] |
| **productId** | **String** | The tenant product ID. | [optional] [example: `64`] [nullable] |
| **serviceName** | **String** | The service name. | [optional] [example: `backup`] [nullable] |
| **serviceGroup** | **String** | The service group. | [optional] [example: `services`] [nullable] |
| **visible** | **Boolean** | Specifies if the tenant quota is visible or not. | [optional] [example: `true`] |
| **wallet** | **Boolean** | Specifies if the tenant quota applies to the wallet or not | [optional] [example: `true`] |
| **additional** | **Boolean** | Specifies if the tenant quota is primary or additional. | [optional] [example: `false`] |
| **dueDate** | **Date** (date-time) | The quota due date. | [optional] [example: `2021-01-01T00:00:00`] [nullable] |
| **features** | **String** | The tenant quota features. | [optional] [example: `audit,ldap,sso`] [nullable] |
| **maxFileSize** | **Long** (int64) | The tenant maximum file size. | [optional] [example: `25000000`] |
| **maxTotalSize** | **Long** (int64) | The tenant maximum total size. | [optional] [example: `25000000000`] |
| **countUser** | **Integer** (int32) | The number of portal users. | [optional] [example: `100`] |
| **countRoomAdmin** | **Integer** (int32) | The number of portal room administrators. | [optional] [example: `10`] |
| **usersInRoom** | **Integer** (int32) | The number of room users. | [optional] [example: `50`] |
| **countRoom** | **Integer** (int32) | The number of rooms. | [optional] [example: `500`] |
| **nonProfit** | **Boolean** | Specifies if the tenant quota is nonprofit or not. | [optional] [example: `false`] |
| **trial** | **Boolean** | Specifies if the tenant quota is trial or not. | [optional] [example: `false`] |
| **free** | **Boolean** | Specifies if the tenant quota is free or not. | [optional] [example: `false`] |
| **update** | **Boolean** | Specifies if the tenant quota is updated or not. | [optional] [example: `false`] |
| **audit** | **Boolean** | Specifies if the audit trail is available or not. | [optional] [example: `true`] |
| **docsEdition** | **Boolean** | Specifies if ONLYOFFICE Docs is included in the tenant quota or not. | [optional] [example: `true`] |
| **ldap** | **Boolean** | Specifies if the LDAP settings are available or not. | [optional] [example: `true`] |
| **sso** | **Boolean** | Specifies if the SSO settings are available or not. | [optional] [example: `true`] |
| **statistic** | **Boolean** | Specifies if the statistics settings are available or not. | [optional] [example: `true`] |
| **branding** | **Boolean** | Specifies if the branding settings are available or not. | [optional] [example: `true`] |
| **customization** | **Boolean** | Specifies if the customization settings are available or not. | [optional] [example: `true`] |
| **lifetime** | **Boolean** | Specifies if the license has the lifetime settings or not. | [optional] [example: `false`] |
| **automationApi** | **Boolean** | Specifies if the Automation API is available or not. | [optional] [example: `true`] |
| **custom** | **Boolean** | Specifies if the custom domain URL is available or not. | [optional] [example: `false`] |
| **restore** | **Boolean** | Specifies if the restore is enabled or not. | [optional] [example: `true`] |
| **oauth** | **Boolean** | Specifies if Oauth is available or not. | [optional] [example: `true`] |
| **contentSearch** | **Boolean** | Specifies if the content search is available or not. | [optional] [example: `true`] |
| **thirdParty** | **Boolean** | Specifies if the third-party accounts linking is available or not. | [optional] [example: `true`] |
| **year** | **Boolean** | Specifies if the tenant quota is yearly subscription or not. | [optional] [example: `true`] |
| **countFreeBackup** | **Integer** (int32) | The number of free backups within a month. | [optional] [example: `1`] |
| **backup** | **Boolean** | Specifies if the backup enabled as a wallet service or not. | [optional] [example: `true`] |
| **countAIAgent** | **Integer** (int32) | The number of AI agents. | [optional] [example: `5`] |
| **aiTools** | **Boolean** | Specifies if the AI tools enabled as a wallet service or not. | [optional] [example: `true`] |
| **aiSearch** | **Boolean** | Specifies if the AI search enabled as a wallet service or not. | [optional] [example: `true`] |
| **docsCloud** | **Integer** (int32) | The number of Docs Connect users. | [optional] [example: `true`] |
| **docsCloudDevPack** | **Boolean** | Specifies if the Docs Connect Dev Pack enabled or not. | [optional] [example: `true`] |
| **docsCloudTrial** | **Boolean** | Specifies if the Docs Connect trial enabled or not. | [optional] [example: `true`] |
