# captionRefTo

「equation」/「figure」/「table」引用类型的可用值：
-**「entireCaption」** - 完整的题注文本；
-**「labelNumber」** - 仅标签和对象编号，例如「表 1.1」；
-**「captionText」** - 仅题注文本；
-**「pageNum」** - 包含引用对象的页码；
-**「aboveBelow」** - 根据项目位置显示「上方」或「下方」。

## 类型

枚举

## 值

- "entireCaption"
- "labelNumber"
- "captionText"
- "pageNum"
- "aboveBelow"


## 示例

This example adds a cross-reference to the page containing a table caption.

```javascript editor-docx
// How to create a reference to the paragraph with a caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("table", "pageNum", caption);
```
