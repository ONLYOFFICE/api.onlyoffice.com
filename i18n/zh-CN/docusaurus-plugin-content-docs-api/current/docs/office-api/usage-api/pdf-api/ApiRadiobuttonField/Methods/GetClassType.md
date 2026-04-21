# GetClassType

返回 ApiRadiobuttonField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRadiobuttonField](../ApiRadiobuttonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"radiobuttonField"

## 示例

检查 PDF 文档中单选按钮字段返回的类类型。

```javascript editor-pdf
// How do I check what type a radio button field object is in a PDF document?

// Retrieve and output the class type string for a radio button field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

console.log('Field type is: ' + radiobuttonField.GetClassType());
```
