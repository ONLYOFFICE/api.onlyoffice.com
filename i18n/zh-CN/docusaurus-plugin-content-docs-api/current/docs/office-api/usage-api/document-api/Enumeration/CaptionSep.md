# CaptionSep

题注分隔符的可能值。
- **“hyphen”** - “-”标点符号。
- **“period”** - “.”标点符号。
- **“colon”** - “:”标点符号。
- **“longDash”** - “—”标点符号。
- **“dash”** - “-”标点符号。

## 类型

枚举

## 值

- "hyphen"
- "period"
- "colon"
- "longDash"
- "dash"

## 示例

向段落添加以连字符作为编号分隔符的题注。

```javascript editor-docx
// How to create a caption indicating the type of a numbering separator.

// Create a caption specifying its bullet type for numbering paragraphs.

paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
