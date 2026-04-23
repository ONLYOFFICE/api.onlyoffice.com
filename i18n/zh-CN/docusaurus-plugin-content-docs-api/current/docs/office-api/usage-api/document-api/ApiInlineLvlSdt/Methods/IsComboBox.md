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

此示例展示如何检查内容控件是否为组合框列表。

```javascript editor-docx
let doc = Api.GetDocument();
let comboboxControl = doc.AddComboBoxContentControl();
let isComboBox = comboboxControl.IsComboBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a combobox list? " + isComboBox);
doc.Push(paragraph);
```
