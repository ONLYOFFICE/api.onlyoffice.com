# GetClassType

返回 ApiCheckboxWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"checkboxWidget"

## 示例

获取 PDF 中复选框控件的类类型。

```javascript editor-pdf
// How do I find out what class type a checkbox widget is in a PDF?

// Identify a checkbox widget object by its class type identifier in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
