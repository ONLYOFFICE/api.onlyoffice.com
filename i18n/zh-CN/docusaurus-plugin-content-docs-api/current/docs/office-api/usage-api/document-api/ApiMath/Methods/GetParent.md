# GetParent

返回直接包含当前数学元素的父元素（段落或内联内容控件）。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiMath](../ApiMath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## 示例

访问直接包含数学公式的元素。

```javascript editor-docx
// The parent is the paragraph that directly contains the math equation.

// Navigate from a math equation up to its parent paragraph and make it italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2");
paragraph.AddElement(math);
let parent = math.GetParent();
parent.SetItalic(true);
```
