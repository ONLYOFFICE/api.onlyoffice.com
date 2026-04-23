# SetOutLine

设置当前文本运行的文本轮廓。

## 语法

```javascript
expression.SetOutLine(oStroke);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建文本轮廓的笔画。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在此示例中，艺术字文本具有文本轮廓。

```javascript editor-docx
// How to set an outline to the text.

// Create a text run object, change its property by outlining it with a color.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51))));
textPr.SetTextFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
textPr.SetFontFamily("Comic Sans MS");
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", null, null, 0, 150 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);
```
