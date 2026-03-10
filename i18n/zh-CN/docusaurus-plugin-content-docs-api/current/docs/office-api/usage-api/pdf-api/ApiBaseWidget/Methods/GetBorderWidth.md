# GetBorderWidth

获取控件边框宽度。

## 语法

```javascript
expression.GetBorderWidth();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[WidgetBorderWidth](../../Enumeration/WidgetBorderWidth.md)

## 示例

This example gets field widgets border width and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderWidth('thick');
});

textField.SetValue('Widgets border width is: ' + widgets[0].GetBorderWidth());
```
