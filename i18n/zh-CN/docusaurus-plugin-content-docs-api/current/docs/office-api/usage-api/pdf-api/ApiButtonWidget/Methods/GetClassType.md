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

识别 PDF 中按钮控件的类类型。

```javascript editor-pdf
// How do I determine what type a button widget object is in a PDF?

// Get the object type information for a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
