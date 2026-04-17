# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

Inherited from [ApiTextPr.SetSpacing](../../ApiTextPr/Methods/SetSpacing.md).

## 示例

此示例设置以二十分之一磅为单位测量的文本间距。

```javascript editor-docx
// How to set the text spacing size.

// Create a text run object, update its spacing.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
```

