# ReviewReportRecordType

修订记录类型。

## 类型

枚举

## 值

- "TextAdd"
- "TextRem"
- "ParaAdd"
- "ParaRem"
- "TextPr"
- "ParaPr"
- "Unknown"

## 示例

报告包含四种不同类型审阅记录的所有审阅更改：“TextRem” - 删除文本，“TextAdd” - 添加文本，“ParaRem” - 删除段落，“TextPr” - 更改文本属性。

```javascript editor-docx
// How to create a review report record indicating its type.

// Create review report records with types.

let reviewReportRecord1 = {Type: "TextRem", Value: "Hello, Mark!", Date: 1679941734161};
let reviewReportRecord2 = {Type: "TextAdd", Value: "Dear Mr. Pottato.", Date: 1679941736189};
let reviewReportRecord3 = {Type: "ParaRem", Date: 1679941755942};
let reviewReportRecord4 = {Type: "TextPr", Date: 1679941757832};
let reviewRecord = {
	"John Smith" : [reviewReportRecord1, reviewReportRecord2],
	"Mark Pottato" : [reviewReportRecord3, reviewReportRecord4]
};
```
