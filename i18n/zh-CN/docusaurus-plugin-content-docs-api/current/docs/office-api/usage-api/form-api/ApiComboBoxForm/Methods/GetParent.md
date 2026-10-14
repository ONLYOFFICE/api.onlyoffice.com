# GetParent

返回直接包含当前表单的父元素（段落或内联内容控件）。

继承自 [ApiFormBase.GetParent](../../ApiFormBase/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## 示例

访问直接包含表单的元素。

```javascript editor-forms
// The parent is the paragraph that directly contains the form.

// Navigate from a text form up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let form = Api.CreateTextForm({ "key": "Name", "placeholder": "Enter text" });
paragraph.Push(form);
let parent = form.GetParent();
parent.SetBold(true);
```
