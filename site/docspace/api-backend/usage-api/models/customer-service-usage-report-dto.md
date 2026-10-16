# CustomerServiceUsageReportDto
One page of the per-service consumption totals, with the paging figures needed to walk the rest.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **collection** | [**List**](customer-service-usage-dto.md) | The services on this page, one entry per service rather than per charge. It is empty for a period in which nothing was consumed as well as for a page past the end of the report. | [optional] [example: `[{service=backup, totalAmount=49.99}]`] [nullable] |
| **offset** | **Integer** (int32) | How many entries were skipped before this page, echoed from the request. | [optional] [example: `0`] |
| **limit** | **Integer** (int32) | How many entries one page may hold, echoed from the request; it is 25 unless another value was asked for. | [optional] [example: `25`] |
| **totalQuantity** | **Long** (int64) | How many services match the filters in total, across every page - services, not charges. | [optional] [example: `1`] |
| **totalPage** | **Integer** (int32) | How many pages those entries come to at the current `limit`. | [optional] [example: `1`] |
| **currentPage** | **Integer** (int32) | Which of those pages this one is, as the billing service numbers them. Page through by advancing `offset` rather than this value, which nothing accepts as an argument. | [optional] [example: `1`] |
