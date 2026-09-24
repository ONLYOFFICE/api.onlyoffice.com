# CustomerMonthlyUsageReportRequestDto
The period covered by the monthly wallet spending report.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **startDate** | **Date** (date-time) | The beginning of the reported period, inclusive. The months are cut in the portal time zone rather than in UTC, so spending at the turn of a month falls where the portal sees it; defaults to the portal creation date. | [optional] [example: `2025-01-01T00:00:00Z`] [nullable] |
| **endDate** | **Date** (date-time) | The end of the reported period, inclusive. Cut in the portal time zone in the same way as `startDate`, and defaults to the moment the call is made. | [optional] [example: `2025-12-31T23:59:59Z`] [nullable] |
