# GetSpacingLineRule

返回段落行距规则。

继承自 [ApiParaPr.GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)。

## 语法

```javascript
expression.GetSpacingLineRule();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"auto" \| "atLeast" \| "exact" \| undefined

## 示例

读取文档中段落所应用的行距规则。

```javascript editor-docx
// How do I find out which line spacing rule a paragraph uses in a document?

// Display the spacing rule name alongside paragraph text to confirm the setting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineRule = paragraph.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingLineRule);
```
