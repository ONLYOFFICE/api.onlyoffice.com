# ReportDto
One page of the portal wallet's money movements, with the paging figures needed to walk the rest.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **collection** | [**List**](operation-dto.md) | The movements on this page - top-ups, charges, refunds and corrections alike, newest first. It is empty for a page past the end of the report as well as for a period in which nothing happened. | [optional] [example: `[{service=disk-storage, debit=14.0}]`] [nullable] |
| **offset** | **Integer** (int32) | How many movements were skipped before this page, echoed from the request so a client need not remember what it asked for. | [optional] [example: `0`] |
| **limit** | **Integer** (int32) | How many movements one page may hold, echoed from the request; it is 25 unless another value was asked for. A full page is not proof that more exist - compare `currentPage` with `totalPage`. | [optional] [example: `25`] |
| **totalQuantity** | **Long** (int64) | How many movements match the filters in total, across every page. | [optional] [example: `137`] |
| **totalPage** | **Integer** (int32) | How many pages those movements come to at the current `limit`. | [optional] [example: `6`] |
| **currentPage** | **Integer** (int32) | Which of those pages this one is, as the billing service numbers them. Page through by advancing `offset` rather than this value, which nothing accepts as an argument. | [optional] [example: `1`] |
