# GetCheckStyle

获取控件复选框样式。

## 语法

```javascript
expression.GetCheckStyle();
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[CheckStyle](../../Enumeration/CheckStyle.md)

## 示例

获取 PDF 文档中复选框控件的选中样式。

```javascript editor-pdf
// How can I get the check style using a checkbox widget in a PDF document?

// Get the check style for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Check style is: ' + widgets[0].GetCheckStyle());
```
