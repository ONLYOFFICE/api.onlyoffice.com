# CreateParagraph

创建新段落。

## 语法

```javascript
expression.CreateParagraph();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

在电子表格工作表上放置的形状中插入新的文本段落。

```javascript editor-xlsx
// How do I add a separate block of text as its own paragraph inside a shape in a spreadsheet?

// Build and place a standalone text block within a shape's content area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
docContent.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.Push(paragraph);
```
