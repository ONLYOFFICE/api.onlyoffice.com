# GetContent

从当前 ApiDocumentContent 对象返回文档元素数组。

## 语法

```javascript
expression.GetContent(bGetCopies);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bGetCopies | 必需 | boolean |  | 指定是否返回文档元素的副本。 |

## 返回值

[DocumentElement](../../Enumeration/DocumentElement.md)[]

## 示例

此示例展示如何从文档内容获取文档元素数组。

```javascript editor-docx
// Retrieve each document element.

// Update properties of document elements knowing their order position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("This paragraph is the first document element.");
docContent.AddElement(0, paragraph);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
docContent.AddElement(1, table);
paragraph = Api.CreateParagraph();
paragraph.AddText("This table is the second document element.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This block text content control is the third document element.");
docContent.AddElement(2, blockLvlSdt);
let docElements = docContent.GetContent(false);
docElements[0].SetBold(true);
docElements[1].SetBackgroundColor(Api.HexColor('#EBEBEB'));
docElements[2].Search("block text content control")[0].SetBold(true);
```
