# SetSpacingAfter

设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则
nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则
将其解释为 false。

## 语法

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | 必需 | [twips](../../Enumeration/twips.md) |  | 当前段落段后间距的值，以磅的二十分之一（1/1440 英寸）为单位。 |
| isAfterAuto | 可选 | boolean | false | true 值禁用当前段落的段后间距。 |

## 返回值

boolean

## 示例

此示例设置当前段落的段后间距。

```javascript editor-pdf
// How to set the size of a spacing after a text from a paragraph properties.

// Change the size property of a spacing after a paragraph.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");

const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
docContent.Push(secondParagraph);
page.AddObject(shape);

```
