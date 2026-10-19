# GetAllParagraphs

返回此范围内的所有 Paragraph 对象。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

在工作表的形状中获取文本范围所包含的全部段落。

```javascript editor-xlsx
// Lets a single range be processed paragraph by paragraph.

// Make the first of the covered paragraphs bold.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
let secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
let thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

let range = shape.GetTextRange();

let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold(true);

worksheet.GetRange("A1").SetValue("GetAllParagraphs: " + paragraphs.length);
```
