# GetSpacingLineRule

返回段落行距规则。

继承自 [ApiParaPr.GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)。

## 示例

获取文档中的段落行距规则。

```javascript editor-docx
// How to get the spacing line rule of the paragraph and display it in a document.

// Get the paragraph spacing line rule in a document.

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
