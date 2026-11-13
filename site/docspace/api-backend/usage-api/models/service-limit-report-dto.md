# ServiceLimitReportDto
A page of the spending limits in force for the portal users.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **collection** | [**List**](service-limit-dto.md) | The limits of this page, one per user; empty when no limit applies to any user or the page is past the end. | [optional] [example: `[{id=42, serviceGroupName=ai-services, customerAccountNumber=12345, scope=Custom, userId=3f2504e0-4f89-11d3-9a0c-0305e82c3301, amountValue=40, currency=USD, quantityValue=null, serviceUnit=null, period=Day, periodEnd=2026-10-18T23:59:59Z, usageFrom=null, enabled=true, created=2026-09-01T10:30:00Z, modified=2026-09-15T08:00:00Z, usage={periodStart=2026-10-18T00:00:00Z, periodEnd=2026-10-18T23:59:59Z, amountConsumed=12.5, amountAvailable=27.5, quantityConsumed=0, quantityAvailable=null}}]`] [nullable] |
| **offset** | **Integer** (int32) | The number of limits skipped before this page. | [optional] [example: `0`] |
| **limit** | **Integer** (int32) | The page size the page was read with. | [optional] [example: `25`] |
| **totalPage** | **Integer** (int32) | The number of pages the whole list takes at this page size. | [optional] [example: `3`] |
| **currentPage** | **Integer** (int32) | The number of this page, starting from 1. | [optional] [example: `1`] |
| **totalQuantity** | **Integer** (int32) | The number of users with a limit in force across all pages. | [optional] [example: `60`] |
