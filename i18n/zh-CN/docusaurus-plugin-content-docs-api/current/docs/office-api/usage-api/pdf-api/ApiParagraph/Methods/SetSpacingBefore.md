# SetSpacingBefore

设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则
nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则
将其解释为 false。

## 语法

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | 必需 | [twips](../../Enumeration/twips.md) |  | 当前段落段前间距的值，以磅的二十分之一（1/1440 英寸）为单位。 |
| isBeforeAuto | 可选 | boolean | false | true 值禁用当前段落的段前间距。 |

## 返回值

boolean

## 示例

此示例设置当前段落的段前间距。

```javascript editor-pdf
// How to set the size of a spacing before a text from a paragraph properties.

// Change the size property of a spacing before a paragraph.

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
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");

const secondParagraph = Api.CreateParagraph();
const secondParaPr = secondParagraph.GetParaPr();
secondParaPr.SetSpacingBefore(1440);
secondParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
docContent.Push(secondParagraph);
page.AddObject(shape);

```
