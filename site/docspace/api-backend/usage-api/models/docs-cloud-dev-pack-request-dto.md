# DocsCloudDevPackRequestDto
The request parameters for switching the Docs Connect subscription to Docs Connect Dev Pack, or for calculating the cost of that switch.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **quantity** | **Integer** (int32) | The number of users to subscribe to Docs Connect Dev Pack for. It must be at least the number of users of the currently purchased Docs Connect subscription, and at least the Docs Connect Dev Pack minimum configured for the installation, which is 10 users by default; a smaller value is rejected with 400. | [optional] [example: `10`] [min: 1] [max: 2147483647] |
