# GetFieldByName

按名称获取字段。

## 语法

```javascript
expression.GetFieldByName();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiField](../../Enumeration/ApiField.md)

## 示例

按名称在 PDF 中查找特定表单字段。

```javascript editor-pdf
// How do I search for a field using its assigned name in a PDF?

// Retrieve a field and set its value by name in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetName('Text field 1');
textField = doc.GetFieldByName('Text field 1');
textField.SetValue('Example value');
```
