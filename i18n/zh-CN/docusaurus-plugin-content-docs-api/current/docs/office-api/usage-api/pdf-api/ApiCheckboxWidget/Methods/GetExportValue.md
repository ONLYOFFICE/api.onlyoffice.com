# GetExportValue

获取控件导出值。

## 语法

```javascript
expression.GetExportValue();
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索 PDF 中复选框控件的导出值。

```javascript editor-pdf
// How do I read what value is exported when a checkbox is selected in a PDF?

// Access the assigned export value for a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());
```
