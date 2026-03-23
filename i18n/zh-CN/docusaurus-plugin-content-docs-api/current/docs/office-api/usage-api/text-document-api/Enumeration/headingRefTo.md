# headingRefTo

「heading」引用类型的可用值：
-**「text」** - 完整的标题文本；
-**「pageNum」** - 标题的页码；
-**「headingNum」** - 标题的序号；
-**「noCtxHeadingNum」** - 缩写的标题号。确保光标位于您要引用的节中，例如您在第 4 节中想引用标题 4.B，则只会得到「B」而不是「4.B」；
-**「fullCtxHeadingNum」** - 即使光标在同一节中也显示完整的标题号；
-**「aboveBelow」** - 根据项目位置显示「上方」或「下方」。

## 类型

枚举

## 值

- "text"
- "pageNum"
- "headingNum"
- "noCtxHeadingNum"
- "fullCtxHeadingNum"
- "aboveBelow"


## 示例

This example adds a cross-reference to the page containing a heading.

```javascript editor-docx
// How to create a reference to the paragraph with a heading.

// Use heading to create a cross-reference.

paragraph.AddHeadingCrossRef("pageNum", headingParagraph);
```
