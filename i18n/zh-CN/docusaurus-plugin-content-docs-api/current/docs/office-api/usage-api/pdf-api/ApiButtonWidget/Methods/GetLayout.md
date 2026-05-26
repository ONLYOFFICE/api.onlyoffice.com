# GetLayout

获取按钮控件布局类型

## 语法

```javascript
expression.GetLayout();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ButtonLayout](../../Enumeration/ButtonLayout.md)

## 示例

查找 PDF 中按钮控件的布局样式。

```javascript editor-pdf
// How do I check the button layout arrangement in a PDF?

// Retrieve the icon and text arrangement setting for a button in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetLabel('Layout is: ' + widgets[0].GetLayout());
```
