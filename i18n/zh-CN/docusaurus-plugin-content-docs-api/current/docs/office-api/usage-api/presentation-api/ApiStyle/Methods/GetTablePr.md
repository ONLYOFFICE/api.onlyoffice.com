# GetTablePr

返回当前样式的表格属性。

## 语法

```javascript
expression.GetTablePr();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTablePr](../../ApiTablePr/ApiTablePr.md) \| null \| undefined

## 示例

读取演示文稿表格样式的表格属性。

```javascript editor-pptx
// The returned properties keep the whole table borders and the table background.

// Copy the borders of one table style into another one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const sourceStyle = presentation.GetStyle("Medium Style 2 - Accent 1");
const targetStyle = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(targetStyle);
targetStyle.SetTablePr(sourceStyle.GetTablePr());
slide.RemoveAllObjects();
slide.AddObject(table);
```
