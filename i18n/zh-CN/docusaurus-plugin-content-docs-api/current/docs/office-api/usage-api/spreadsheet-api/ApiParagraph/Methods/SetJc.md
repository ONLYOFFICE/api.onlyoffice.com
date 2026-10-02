# SetJc

设置段落内容对齐方式。

继承自 [ApiParaPr.SetJc](../../ApiParaPr/Methods/SetJc.md)。

## 语法

```javascript
expression.SetJc(sJc);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | 必需 | "left" \| "right" \| "both" \| "center" |  | 将应用于段落内容的对齐类型。 |

## 返回值

boolean

## 示例

在电子表格中将形状内的段落文本设置为左对齐、居中或右对齐。

```javascript editor-xlsx
// How do I change the horizontal alignment of a paragraph in a spreadsheet?

// Position text within a paragraph at different alignment points to improve layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the right side. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
content.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the left side. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("left");
content.Push(paragraph);
```
