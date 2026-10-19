# GetPlaceholder

获取文本字段占位符。

## 语法

```javascript
expression.GetPlaceholder();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从 PDF 中的文本字段检索占位符文本。

```javascript editor-pdf
// Useful for reading the hint text in a text field in a PDF.

// Access the placeholder message displayed in a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPlaceholder("Your text here");
textField.SetValue('Text field placeholder is: "' + textField.GetPlaceholder() + '"');
```
