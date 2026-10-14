# GetRegularExp

获取文本控件的正则验证表达式。

## 语法

```javascript
expression.GetRegularExp();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 中的文本字段检索验证模式。

```javascript editor-pdf
// Useful for accessing the validation pattern from a text field in a PDF.

// Display what text pattern is required for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue('Text field reg exp is: "' + textField.GetRegularExp() + '"');
```
