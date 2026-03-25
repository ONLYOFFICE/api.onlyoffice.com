# GetSpacingLineRule

返回段落行距规则。

## 语法

```javascript
expression.GetSpacingLineRule();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"auto" \| "atLeast" \| "exact" \| undefined

## 示例

此示例展示如何获取段落行距规则。

```javascript editor-docx
// How to get the spacing line rule of the paragraph and display it.

// Get the paragraph spacing line rule.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineRule = paraPr.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingLineRule);
```
