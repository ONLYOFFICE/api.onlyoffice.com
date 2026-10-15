# SetTablePr

设置当前样式的表格属性。

## 语法

```javascript
expression.SetTablePr(tablePr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tablePr | 必需 | [ApiTablePr](../../ApiTablePr/ApiTablePr.md) |  | 将要设置的表格属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

将表格属性应用于演示文稿表格样式。

```javascript editor-pptx
// The properties are applied to every table which uses this style.

// Set a dark gray grid for the table style and use the style in a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
