# SetLanguage

指定将用于检查拼写和语法的语言（如果需要）。

## 语法

```javascript
expression.SetLanguage(sLangId);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | 必需 | string |  | 此参数的可能值是 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。 |

## 返回值

boolean

## 示例

此示例设置将用于检查拼写和语法的语言。

```javascript editor-pptx
// How to specify a language of the current presentation.

// Set the 'en-CA' language to the ApiPresentation object.

const presentation = Api.GetPresentation();
presentation.SetLanguage("en-CA");

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("English (Canada) will be used to check spelling and grammar in this presentation (if requested).");
slide.AddObject(shape);

```
