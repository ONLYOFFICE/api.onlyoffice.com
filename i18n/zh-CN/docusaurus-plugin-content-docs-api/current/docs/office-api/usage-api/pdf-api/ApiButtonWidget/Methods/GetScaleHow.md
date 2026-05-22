# GetScaleHow

获取按钮控件缩放时机类型

## 语法

```javascript
expression.GetScaleHow();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ButtonScaleHow](../../Enumeration/ButtonScaleHow.md)

## 示例

确定 PDF 中按钮图标的缩放方式。

```javascript editor-pdf
// How do I check the icon scaling method for a button in a PDF?

// Retrieve the icon scaling option for a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleHow('proportional');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());
```
