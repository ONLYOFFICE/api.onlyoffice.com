# DocsCloudTenantInfoDto
Represents the license and server information of a Docs Connect tenant, with usage statistics for the current period.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **license** | [**DocsCloudLicenseInfoDto**](docs-cloud-license-info-dto.md) | The license information. | [optional] |
| **server** | [**DocsCloudServerInfoDto**](docs-cloud-server-info-dto.md) | The Docs Connect server information. | [optional] |
| **usersLimit** | [**DocsCloudUsersLimitDto**](docs-cloud-users-limit-dto.md) | The user limits of the license. | [optional] |
| **stats** | [**DocsCloudStatsDto**](docs-cloud-stats-dto.md) | The usage statistics for the current period. | [optional] |
