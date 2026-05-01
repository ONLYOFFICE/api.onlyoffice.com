# GetClassType

返回 ApiTextField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textField"

## 示例

获取 PDF 文档中文本字段对象的类类型。

```javascript editor-pdf
// How can I get the class type of a text field in a PDF document?

// Get the class type of a text field and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());
```
