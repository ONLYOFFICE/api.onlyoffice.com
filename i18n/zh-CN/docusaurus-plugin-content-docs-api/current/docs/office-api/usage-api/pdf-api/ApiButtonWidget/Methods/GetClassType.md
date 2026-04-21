# GetClassType

返回 ApiButtonWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"buttonWidget"

## 示例

获取 PDF 文档中按钮控件的类类型。

```javascript editor-pdf
// How to identify the class type of a button widget in a PDF document?

// Obtain the class type identifier of a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
