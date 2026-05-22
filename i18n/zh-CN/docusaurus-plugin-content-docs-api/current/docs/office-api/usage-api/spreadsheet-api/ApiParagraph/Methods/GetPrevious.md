# GetPrevious

返回上一个段落。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

导航到电子表格中形状内当前段落之前的段落。

```javascript editor-xlsx
// How do I move back to the preceding paragraph in a sequence in a spreadsheet?

// Access the earlier paragraph to apply changes like bold formatting in a spreadsheet.

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
let previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);
```
