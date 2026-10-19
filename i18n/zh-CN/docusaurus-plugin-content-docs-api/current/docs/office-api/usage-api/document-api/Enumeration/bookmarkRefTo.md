# bookmarkRefTo

"bookmark" 引用类型的可用值：

- **"text"** - 完整的书签文本；
- **"pageNum"** - 书签的页码；
- **"paraNum"** - 书签的段落号；
- **"noCtxParaNum"** - 缩写的段落号（仅特定项，例如不是 "4.1.1" 而只引用 "1"）；
- **"fullCtxParaNum** - 完整的段落号，例如 "4.1.1"；
- **"aboveBelow"** - 根据项目位置显示 "above" 或 "below" 字样。

## 类型

枚举

## 值

- "text"
- "pageNum"
- "paraNum"
- "noCtxParaNum"
- "fullCtxParaNum"
- "aboveBelow"

## 示例

添加指向包含书签的页面的交叉引用。

```javascript editor-docx
// How do I add a reference to the page of a bookmark?

// Use a bookmark reference object to create a cross-reference.

paragraph.AddBookmarkCrossRef("pageNum", bookmark);
```
