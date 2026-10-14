# SetHeight

设置当前表格的总高度，并将其平均分配给各表格行。该值作为每行的最小高度应用，因此如果行内容需要更多空间，行可以更高。

## 语法

```javascript
expression.SetHeight(nValue);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的表格高度。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

设置 PDF 中表格的总高度。

```javascript editor-pdf
// Make a table a specific overall height in a PDF.

// Distribute the requested height proportionally among the table rows in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);
table.SetHeight(Api.MillimetersToEmus(80));
```
