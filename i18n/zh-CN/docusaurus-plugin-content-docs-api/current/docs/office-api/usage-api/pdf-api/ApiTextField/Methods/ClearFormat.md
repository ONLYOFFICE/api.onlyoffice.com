# ClearFormat

清除字段的格式。

## 语法

```javascript
expression.ClearFormat();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 中的文本输入字段移除所有格式。

```javascript editor-pdf
// How do I clear formatting that was applied to a text field in a PDF?

// Reset a text field to its default appearance without any special formatting in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000');
textField.ClearFormat();
```
