# numberedRefTo

「numbered」引用类型的可用值：
-**「pageNum」** - 编号项的页码；
-**「paraNum」** - 编号项的段落号；
-**「noCtxParaNum」** - 缩写的段落号（仅特定项，例如不是「4.1.1」而只是「1」）；
-**「fullCtxParaNum」** - 完整的段落号，例如「4.1.1」；
-**「text」** - 段落文本值，例如如果有「4.1.1. 条款和条件」，则只引用「条款和条件」；
-**「aboveBelow」** - 根据项目位置显示「上方」或「下方」。

## 类型

枚举

## 值

- "pageNum"
- "paraNum"
- "noCtxParaNum"
- "fullCtxParaNum"
- "text"
- "aboveBelow"


## 示例

This example adds a cross-reference to the page containing a numbered paragraph.

```javascript editor-docx
// How to create a reference to the paragraph with a numbered paragraph.

// Use numbered paragraph to create a cross-reference.

paragraph.AddNumberedCrossRef("pageNum", numberedParagraph, true, true);
```
