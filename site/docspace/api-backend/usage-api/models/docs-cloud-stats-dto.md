# DocsCloudStatsDto
Represents the usage statistics of a Docs Connect tenant for the current period.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **periodDay** | **Integer** (int32) | The length of the statistics period in days. | [optional] [example: `30`] |
| **editor** | [**DocsCloudUserStatsDto**](docs-cloud-user-stats-dto.md) | The statistics for editor users. | [optional] |
| **viewer** | [**DocsCloudUserStatsDto**](docs-cloud-user-stats-dto.md) | The statistics for viewer users. | [optional] |
