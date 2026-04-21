# GetBorderStyle

获取控件边框样式。

## 语法

```javascript
expression.GetBorderStyle();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[WidgetBorderStyle](../../Enumeration/WidgetBorderStyle.md)

## 示例

获取并显示 PDF 文档中字段控件的边框样式。

```javascript editor-pdf
// How can I get the border style using a widget in a PDF document?

// Get the border style for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderStyle('inset');
});

textField.SetValue('Widgets border style is: ' + widgets[0].GetBorderStyle());
```
