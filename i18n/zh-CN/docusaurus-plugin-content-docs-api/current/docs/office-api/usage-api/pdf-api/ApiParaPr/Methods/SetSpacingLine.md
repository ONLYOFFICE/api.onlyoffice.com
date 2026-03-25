# SetSpacingLine

设置段落行距。如果 sLineRule 参数的值为
"atLeast" 或 "exact"，则 nLine 的值将被解释为磅的二十分之一。如果
sLineRule 参数的值为 "auto"，则
nLine 参数的值将被解释为行的 240 分之一。

## 语法

```javascript
expression.SetSpacingLine(nLine, sLineRule);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | 必需 | [twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) |  | 行距值，以磅的二十分之一（1/1440 英寸）或行的 240 分之一为单位。 |
| sLineRule | 必需 | "auto" \| "atLeast" \| "exact" |  | 确定行距度量单位的规则。 |

## 返回值

boolean

## 示例

此示例设置段落行距。

```javascript editor-pdf
// How to set the size of a spacing line from a paragraph properties.

// Change a spacing line size property of a paragraph properties.

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
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
page.AddObject(shape);

```
