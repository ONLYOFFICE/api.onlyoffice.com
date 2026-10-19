# GetJc

返回段落内容对齐方式。

继承自 [ApiParaPr.GetJc](../../ApiParaPr/Methods/GetJc.md)。

## 语法

```javascript
expression.GetJc();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"left" \| "right" \| "both" \| "center" \| undefined

## 示例

在电子表格中读取形状内段落的文本对齐设置。

```javascript editor-xlsx
// How do I find out how text is aligned within a paragraph in a spreadsheet?

// Verify the justification applied to a paragraph after setting it in a spreadsheet.

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
let justification = paragraph.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + justification);
content.Push(paragraph);
```
