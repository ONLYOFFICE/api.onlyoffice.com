# DocsCloudUserStats
Represents the usage statistics of a single Docs Connect user category (editor or viewer).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **active** | **Integer** (int32) | The number of active users. | [optional] [example: `10`] |
| **internal** | **Integer** (int32) | The number of internal users. | [optional] [example: `8`] |
| **external** | **Integer** (int32) | The number of external users. | [optional] [example: `2`] |
| **remaining** | **Integer** (int32) | The number of remaining users before the limit is reached. | [optional] [example: `90`] |
| **criticalRemaining** | **Boolean** | Whether the number of remaining users is critically low. | [optional] [example: `false`] |
