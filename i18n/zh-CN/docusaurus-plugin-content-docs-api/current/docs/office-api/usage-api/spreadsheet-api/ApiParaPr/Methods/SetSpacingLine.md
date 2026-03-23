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

```javascript editor-xlsx
// How to add a spacing line between paragraphs.

// Get a paragraph from the shape's content then add a text specifying spacing between text lines.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
```
