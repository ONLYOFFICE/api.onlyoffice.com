# GetClassType

返回 ApiButtonField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiButtonField](../ApiButtonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"buttonField"

## 示例

检查 PDF 中按钮字段的类类型。

```javascript editor-pdf
// How do I identify what type a button field object is in a PDF?

// Retrieve the object type for a button form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

console.log('Widget type is: ' + buttonField.GetClassType());
```
