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

读取 PDF 中复选框的外观样式。

```javascript editor-pdf
// How do I find out what symbol displays when a checkbox is selected in a PDF?

// Retrieve the check mark style used to indicate a selected checkbox in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Check style is: ' + widgets[0].GetCheckStyle());
```
