# GetParent

返回直接包含当前内联内容控件的父元素（段落或内联内容控件）。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## 示例

访问直接包含内联内容控件的元素。

```javascript editor-docx
// The parent is the paragraph that directly contains the inline content control.

// Navigate from an inline content control up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineSdt = Api.CreateInlineLvlSdt();
inlineSdt.AddText("Inline control");
paragraph.AddInlineLvlSdt(inlineSdt);
let parent = inlineSdt.GetParent();
parent.SetBold(true);
```
