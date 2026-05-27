# GetIconYPos

获取按钮控件图标的 y 位置。

## 语法

```javascript
expression.GetIconYPos();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[percentage](../../Enumeration/percentage.md)

## 示例

查找 PDF 中按钮控件内图标的垂直位置。

```javascript editor-pdf
// How do I get the Y coordinate of an icon in a PDF button?

// Retrieve the icon's top position in a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetLabel('Icon Y position is: ' + widgets[0].GetIconXPos());
```
