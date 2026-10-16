# SetRowPr

为当前表格行设置属性。

## 语法

```javascript
expression.SetRowPr(oApiTableRowPr);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiTableRowPr | 必需 | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | 表格行属性。 |

## 返回值

boolean

## 示例

在演示文稿中设置表格行的属性。

```javascript editor-pptx
// Useful for applying row properties to a table row.

// Set the height of the first row using row properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720*3);
row.SetRowPr(rowPr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
