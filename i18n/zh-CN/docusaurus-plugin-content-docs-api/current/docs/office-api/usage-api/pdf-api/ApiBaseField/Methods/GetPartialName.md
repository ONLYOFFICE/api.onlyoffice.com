# GetPartialName

获取字段部分名称。

## 语法

```javascript
expression.GetPartialName();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取 PDF 中表单字段的本地名称。

```javascript editor-pdf
// How can I find the partial name of a form field in a PDF?

// Access the short name identifier assigned to a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
