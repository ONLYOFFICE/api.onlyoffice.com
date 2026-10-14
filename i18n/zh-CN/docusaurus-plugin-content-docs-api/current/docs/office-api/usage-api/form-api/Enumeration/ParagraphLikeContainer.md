# ParagraphLikeContainer

类似段落的容器，可直接包含内联级内容（Hyperlink、InlineLvlSdt 等）。

## 类型

枚举

## 值

- [ApiFormBase](../ApiFormBase/ApiFormBase.md)

## 示例

获取容纳超链接的类段落容器（段落或内联内容控件）。

```javascript editor-forms
// The parent is a paragraph or an inline content control that directly holds the inline element.

// Retrieve the paragraph-like parent of a hyperlink.

let parent = hyperlink.GetParent();
```
