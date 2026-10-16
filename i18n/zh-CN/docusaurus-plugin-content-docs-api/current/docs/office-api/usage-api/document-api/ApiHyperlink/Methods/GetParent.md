# GetParent

返回直接包含当前超链接的父元素（段落或内联内容控件）。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## 示例

访问直接包含超链接的元素。

```javascript editor-docx
// The parent is the paragraph that directly contains the hyperlink.

// Navigate from a hyperlink up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Visit our website");
let hyperlink = paragraph.AddHyperlink("https://www.example.com", "Example");
let parent = hyperlink.GetParent();
parent.SetBold(true);
```
