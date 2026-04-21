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

检查 PDF 文档中复选框控件返回的类类型。

```javascript editor-pdf
// How do I check what type a checkbox widget object is in a PDF document?

// Retrieve and output the class type string for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
