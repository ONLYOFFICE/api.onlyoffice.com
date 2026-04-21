# GetBorderColor

获取控件边框颜色。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

获取字段控件并显示其在 PDF 文档中的边框颜色。

```javascript editor-pdf
// How to get the border color for a widget in a PDF document?

// Get the border color and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
let borderColor = widgets[0].GetBorderColor();
textField.SetValue('Widgets border color is: ' + borderColor.R + ',' + borderColor.G + ',' + borderColor.B);
```
