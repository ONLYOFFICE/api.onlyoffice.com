# SetLanguage

指定在处理此文本运行内容时将用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(sLangId);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | 必需 | string |  | 此参数的可能值是 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定在处理此文本运行内容时将用于检查拼写和语法（如果请求）的语言。

```javascript editor-pptx
// How to change language of the text for grammar check.

// Create a new text run and change its language.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);
run.SetLanguage("en-CA");
slide.AddObject(shape);

```
