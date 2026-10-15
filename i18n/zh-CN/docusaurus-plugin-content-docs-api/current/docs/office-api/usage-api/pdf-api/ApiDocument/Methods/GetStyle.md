# GetStyle

按名称返回文档样式。

## 语法

```javascript
expression.GetStyle(sStyleName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | 必需 | string |  | 要查找的表格样式名称。 |

## 返回值

ApiStyle \| null

## 示例

在 PDF 中获取命名表格样式并将其应用于表格。

```javascript editor-pdf
// Look up a built-in table style by name in a PDF document.

// Fetch "Dark Style 1 - Accent 2", rename it, and apply it to a 3x3 table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const style = doc.GetStyle('Dark Style 1 - Accent 2');
style.SetName('My Custom Table Style');
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText('New style name: ' + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
