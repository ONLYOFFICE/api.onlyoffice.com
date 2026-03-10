# CaptionNumberingFormat

题注编号格式的可能值。
-**「ALPHABETIC」** - 大写字母。
-**「alphabetic」** - 小写字母。
-**「Roman」** - 大写罗马数字。
-**「roman」** - 小写罗马数字。
-**「Arabic」** - 阿拉伯数字。

## 类型

枚举

## 值

- "ALPHABETIC"
- "alphabetic"
- "Roman"
- "roman"
- "Arabic"


## 示例

This example add a caption with the Arabic numbering format to the paragraph.

```javascript editor-docx
// How to add a caption to the paragraph specifying numbering format.

// Add a text caption with parameters to the ApiParagraph object and indicate its numbering format.

paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
