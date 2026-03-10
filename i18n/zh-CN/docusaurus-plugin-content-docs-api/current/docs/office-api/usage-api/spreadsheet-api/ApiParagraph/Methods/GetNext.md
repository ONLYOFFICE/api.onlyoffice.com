# GetNext

返回下一个段落。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

此示例展示如何获取下一个段落。

```javascript editor-xlsx
// How to get the next paragraph from the current one.

// Add two paragraphs into the shape content then get the second one using the GetNext method.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph.");
content.Push(paragraph1);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph.");
content.Push(paragraph2);
let nextParagraph = paragraph1.GetNext();
nextParagraph.SetBold(true);
```
