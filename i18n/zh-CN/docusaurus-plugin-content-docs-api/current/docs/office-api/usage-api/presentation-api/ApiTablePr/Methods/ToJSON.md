# ToJSON

将 ApiTablePr 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将演示文稿表格样式的表格属性序列化为 JSON。

```javascript editor-pptx
// The resulting string can be converted back with the Api.FromJSON method.

// Write the JSON representation of the table style properties into the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.RGB(255, 0, 0)));
const paragraph = Api.CreateParagraph();
paragraph.AddText(tablePr.ToJSON());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
