# GetIconXPos

获取按钮控件图标的 x 位置。

## 语法

```javascript
expression.GetIconXPos();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[percentage](../../Enumeration/percentage.md)

## 示例

从 PDF 文档中带有图像的字段获取图标 X 位置。

```javascript editor-pdf
// How to get the icon x pos for a button widget in a PDF document?

// Get the icon x pos and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetLabel('Icon X position is: ' + widgets[0].GetIconXPos());
```
