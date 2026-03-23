# ReviewReportRecord

表示单个修订更改记录。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Date | number | 更改的时间戳。 |
| ReviewedElement | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiTable](../ApiTable/ApiTable.md) | 已审阅的元素。 |
| Type | [ReviewReportRecordType](../Enumeration/ReviewReportRecordType.md) | 修订记录类型。 |
| Value | string | 修订更改值（仅适用于「TextAdd」和「TextRem」类型）。 |
