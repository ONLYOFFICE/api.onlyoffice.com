# SetTablePr

设置当前表格样式属性的表格属性。

## 语法

```javascript
expression.SetTablePr(oTablePr);
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTablePr | 必需 | [ApiTablePr](../../ApiTablePr/ApiTablePr.md) |  | 要应用的表格属性。 |

## 返回值

boolean

## 示例

修改命名表格样式的 wholeTable 条件样式并将其应用于表格。

```javascript editor-pptx
// The table properties stored in a conditional style part are updated.

// Get the wholeTable part of a presentation style, set its borders, and apply the style to a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 2");
table.SetStyle(style);
const stylepr = style.GetConditionalTableStyle("wholeTable");
const tablePr = stylepr.GetTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.RGB(255, 0, 0)));
stylepr.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
