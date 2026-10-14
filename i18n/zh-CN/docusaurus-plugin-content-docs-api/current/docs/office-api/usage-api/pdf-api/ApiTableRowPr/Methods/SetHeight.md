# SetHeight

设置当前表格中当前表格行的高度。

## 语法

```javascript
expression.SetHeight(sHRule, nValue);
```

`expression` - 表示 [ApiTableRowPr](../ApiTableRowPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | 必需 | "auto" \| "atLeast" |  | 对当前表格行应用或忽略高度值的规则。 |
| nValue | 可选 | [twips](../../Enumeration/twips.md) |  | 当前表格行的高度，以二十分之一磅（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

在 PDF 中使用行属性设置表格的最小行高。

```javascript editor-pdf
// Apply the same minimum row height to every row of a table in a PDF.

// Create a table, build row properties with a fixed minimum height, and apply them to each row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
for (let i = 0; i < 3; i++) {
	const rowPr = Api.CreateTableRowPr();
	rowPr.SetHeight('atLeast', 1500);
	table.GetRow(i).SetRowPr(rowPr);
}

page.AddObject(table);
```
