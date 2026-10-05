# numberedRefTo

"numbered" 引用类型的可用值：

- **"pageNum"** - 编号项的页码；
- **"paraNum"** - 编号项的段落号；
- **"noCtxParaNum"** - 缩写的段落号（仅特定项，例如不是 "4.1.1" 而只引用 "1"）；
- **"fullCtxParaNum"** - 完整的段落号，例如 "4.1.1"；
- **"text"** - 段落文本值，例如如果有 "4.1.1. Terms and Conditions"，则只引用 "Terms and Conditions"；
- **"aboveBelow"** - 根据项目位置显示 "above" 或 "below" 字样。

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

添加指向包含编号段落的页面的交叉引用。

```javascript editor-docx
// How do I create a reference to a numbered paragraph?

// Use numbered paragraph to create a cross-reference.

paragraph.AddNumberedCrossRef("pageNum", numberedParagraph, true, true);
```
