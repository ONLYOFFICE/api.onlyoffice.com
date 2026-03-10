# GetTextColor

获取控件文本颜色。

## 语法

```javascript
expression.GetTextColor();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

This example gets field widget and displays it's text color.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetTextColor(rgbColor);
});
let bgColor = widgets[0].GetTextColor();
textField.SetValue('Widgets text color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);


```
