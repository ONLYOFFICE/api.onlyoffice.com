# AddRows

向当前表格添加新行。

## 语法

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | Number |  | 要添加的行数。 |
| isBefore | 可选 | boolean | false | 指定行是添加在当前行之前还是之后。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在 PDF 中从某一行开始向表格添加新行。

```javascript editor-pdf
// Insert rows right after a specific row in a table in a PDF.

// Insert two new rows after the first row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('First row');
row.GetCell(0).GetContent().Push(para);
row.AddRows(2, false);

page.AddObject(table);
```
