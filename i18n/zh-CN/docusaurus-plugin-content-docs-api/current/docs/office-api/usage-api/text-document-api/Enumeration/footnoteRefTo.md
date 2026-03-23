# footnoteRefTo

「footnote」引用类型的可用值：
-**「footnoteNum」** - 脚注编号；
-**「pageNum」** - 脚注的页码；
-**「aboveBelow」** - 根据项目位置显示「上方」或「下方」；
-**「formFootnoteNum」** - 格式化为脚注的表单编号。实际脚注的编号不受影响。

## 类型

枚举

## 值

- "footnoteNum"
- "pageNum"
- "aboveBelow"
- "formFootnoteNum"


## 示例

This example adds a cross-reference to the page containing a footnote.

```javascript editor-docx
// How to create a reference to the paragraph with an footnote.

// Use footnote to create a cross-reference.

paragraph.AddFootnoteCrossRef("pageNum", footnoteParagraph);
```
