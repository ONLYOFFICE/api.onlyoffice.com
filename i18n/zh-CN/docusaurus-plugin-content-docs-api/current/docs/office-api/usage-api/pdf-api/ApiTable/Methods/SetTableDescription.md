# SetTableDescription

设置表格说明。

## 语法

```javascript
expression.SetTableDescription(descr);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| descr | 必需 | string |  | 要设置的表格说明。 |

## 返回值

boolean

## 示例

设置 PDF 中表格的描述。

```javascript editor-pdf
// Give a table an accessible description in a PDF.

// Create a table, set its description, and display it in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableDescription('Sales data for Q1 2025');
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table description: ' + table.GetTableDescription());
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
