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

获取文本字段并显示其在 PDF 文档中的多行属性。

```javascript editor-pdf
// How to is multiline for a text field in a PDF document?

// Is multiline and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
