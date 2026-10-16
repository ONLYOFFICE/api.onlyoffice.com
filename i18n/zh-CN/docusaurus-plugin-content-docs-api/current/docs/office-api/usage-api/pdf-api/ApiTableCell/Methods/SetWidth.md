# SetWidth

指定此单元格的首选宽度。

## 语法

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TableWidth](../../Enumeration/TableWidth.md) |  | 宽度值的类型。 |
| nValue | 可选 | number |  | 以正整数表示的表格宽度值。 |

## 返回值

boolean

## 示例

在 PDF 中为各个表格单元格设置首选宽度。

```javascript editor-pdf
// Give specific cells a fixed width in a PDF table.

// Create a table and set the first column cells width in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
for (let r = 0; r < 3; r++) {
	table.GetRow(r).GetCell(0).SetWidth('twips', 5660);
}

page.AddObject(table);
```
