# Copy

创建指定表格的副本。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

复制表格并将副本放在 PDF 的另一页上。

```javascript editor-pdf
// How do I make a copy of a table in a PDF?

// Create an exact duplicate of a table and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetPosition(608400, 1267200);
page.AddObject(table);

const copyTable = table.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyTable);
```
