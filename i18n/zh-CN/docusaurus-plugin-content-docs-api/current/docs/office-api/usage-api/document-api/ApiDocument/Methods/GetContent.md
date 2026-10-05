# GetContent

从当前 ApiDocumentContent 对象返回文档元素数组。

继承自 [ApiDocumentContent.GetContent](../../ApiDocumentContent/Methods/GetContent.md)。

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

在文档中以数组形式获取文档的所有顶级元素。

```javascript editor-docx
// How do I access every element in a document by its position in a document?

// Style individual paragraphs, tables, and content controls by iterating the element array in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This paragraph is the first document element.");
doc.AddElement(0, paragraph);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.AddElement(1, table);
paragraph = Api.CreateParagraph();
paragraph.AddText("This table is the second document element.");
let cell = table.GetCell(0,0);
table.AddElement(cell, 0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This block text content control is the third document element.");
doc.AddElement(2, blockLvlSdt);
let docElements = doc.GetContent(false);
docElements[0].SetBold(true);
docElements[1].SetBackgroundColor(Api.HexColor('#FF6F3D'));
docElements[2].Search("block text content control")[0].SetBold(true);
```
