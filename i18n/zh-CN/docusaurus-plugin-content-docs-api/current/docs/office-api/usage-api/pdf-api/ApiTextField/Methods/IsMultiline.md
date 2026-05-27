# IsMultiline

检查文本字段是否为多行。

## 语法

```javascript
expression.IsMultiline();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查 PDF 中的文本字段是否允许多行文本。

```javascript editor-pdf
// How do I determine if a text field accepts multiple lines in a PDF?

// Verify if text wrapping is enabled for a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
