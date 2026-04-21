# GetClassType

返回 ApiDocument 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"document"

## 示例

获取文档对象的类类型。

```javascript editor-pdf
// How can I get the class type of a document?

// Get the class type of a document and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetClassType());
```
