# SetSpacingLine

设置段落行距。

如果 sLineRule 参数的值为 "atLeast" 或 "exact"，则 nLine 的值将被解释为磅的二十分之一。如果 sLineRule 参数的值为 "auto"，则 nLine 参数的值将被解释为行的 240 分之一。

继承自 [ApiParaPr.SetSpacingLine](../../ApiParaPr/Methods/SetSpacingLine.md)。

## 语法

```javascript
expression.SetSpacingLine(nLine, sLineRule);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | 必需 | [twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) |  | 行距值，以磅的二十分之一（1/1440 英寸）或行的 240 分之一为单位。 |
| sLineRule | 必需 | "auto" \| "atLeast" \| "exact" |  | 确定行距度量单位的规则。 |

## 返回值

boolean

## 示例

在文档中设置段落内的行距。

```javascript editor-docx
// How do I adjust the vertical distance between lines of text in a paragraph in a document?

// Control how tightly or loosely the lines of a paragraph are stacked in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph = Api.CreateParagraph();
paragraph.SetSpacingLine(200, "exact");
paragraph.AddText("Paragraph 2. Spacing: exact 10 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetSpacingLine(400, "atLeast");
paragraph.AddText("Paragraph 3. Spacing: atLeast 20 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
