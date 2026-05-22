# ReviewReportRecord

Represents a single review change record.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Date | number | The timestamp of the change. |
| ReviewedElement | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiTable](../ApiTable/ApiTable.md) | The element that was reviewed. |
| Type | [ReviewReportRecordType](../Enumeration/ReviewReportRecordType.md) | The review record type. |
| Value | string | The review change value (only for "TextAdd" and "TextRem" types). |
