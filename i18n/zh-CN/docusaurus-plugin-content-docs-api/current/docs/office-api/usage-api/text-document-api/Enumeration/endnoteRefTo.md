# endnoteRefTo

「endnote」引用类型的可用值：
-**「endnoteNum」** - 尾注编号；
-**「pageNum」** - 尾注的页码；
-**「aboveBelow」** - 根据项目位置显示「上方」或「下方」；
-**「formEndnoteNum」** - 格式化为尾注的表单编号。实际尾注的编号不受影响。

## 类型

枚举

## 值

- "endnoteNum"
- "pageNum"
- "aboveBelow"
- "formEndnoteNum"


## 示例

This example adds a cross-reference to the page containing an endnote.

```javascript editor-docx
// How to create a reference to the paragraph with an endnote.

// Use endnote to create a cross-reference.

paragraph.AddEndnoteCrossRef("pageNum", endnoteParagraph);
```
