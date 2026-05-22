# IsComboBox

检查内容控件是否为组合框列表。

## 语法

```javascript
expression.IsComboBox();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的内联内容控件是否为组合框。

```javascript editor-docx
// How do I verify that a content control is a combo box in a document?

// Distinguish a combo box from other list-type controls before processing its selected value in a document.

let doc = Api.GetDocument();
let comboboxControl = doc.AddComboBoxContentControl();
let isComboBox = comboboxControl.IsComboBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a combobox list? " + isComboBox);
doc.Push(paragraph);
```
