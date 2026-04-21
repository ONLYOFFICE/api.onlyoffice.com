# GetBackgroundColor

获取控件背景颜色。

## 语法

```javascript
expression.GetBackgroundColor();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

获取字段控件并显示其在 PDF 文档中的背景颜色。

```javascript editor-pdf
// How do I get the background color in a PDF document?

// Get the background color using a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBackgroundColor(rgbColor);
});
let bgColor = widgets[0].GetBackgroundColor();
textField.SetValue('Widgets background color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);
```
