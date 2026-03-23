# HdrFtrType

可应用于文档节的页眉和页脚类型。
-**「default」** - 可应用于任何默认页面的页眉或页脚。
-**「title」** - 应用于标题页的页眉或页脚。
-**「even」** - 可应用于偶数页以区别于奇数页（奇数页将被视为默认）的页眉或页脚。

## 类型

枚举

## 值

- "default"
- "title"
- "even"


## 示例

This example removes the header of the 'title' type from the final document section.

```javascript editor-docx
// How to delete a header from the title type.

// Remove a header from the specified type of the section.

let docContent = finalSection.RemoveHeader("title");
```
