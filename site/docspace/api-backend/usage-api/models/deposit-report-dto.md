# DepositReportDto
One page of the portal wallet's top-ups, with the paging figures needed to walk the rest.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **collection** | [**List**](deposit-dto.md) | The top-ups on this page. It is empty for a page past the end of the list as well as for a period in which nothing was paid into the wallet. | [optional] [example: `[{id=15342, date=2025-03-14T10:30:00Z, amount=100.0, currency=USD, status=Completed, hasInvoice=true}]`] [nullable] |
| **offset** | **Integer** (int32) | How many top-ups were skipped before this page, echoed from the request so a client need not remember what it asked for. | [optional] [example: `0`] |
| **limit** | **Integer** (int32) | How many top-ups one page may hold, echoed from the request; it is 25 unless another value was asked for. A full page is not proof that more exist - compare `currentPage` with `totalPage`. | [optional] [example: `25`] |
| **totalQuantity** | **Integer** (int32) | How many top-ups match the filters in total, across every page. | [optional] [example: `12`] |
| **totalPage** | **Integer** (int32) | How many pages those top-ups come to at the current `limit`. | [optional] [example: `1`] |
| **currentPage** | **Integer** (int32) | Which of those pages this one is, as the billing service numbers them. Page through by advancing `offset` rather than this value, which nothing accepts as an argument. | [optional] [example: `1`] |
