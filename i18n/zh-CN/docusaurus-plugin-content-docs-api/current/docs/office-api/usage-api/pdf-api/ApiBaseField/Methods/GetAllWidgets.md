# GetAllWidgets

获取当前字段的控件数组。

## 语法

```javascript
expression.GetAllWidgets();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWidget](../../Enumeration/ApiWidget.md)[]

## 示例

获取 PDF 文档中的所有字段控件并为其设置边框颜色。

```javascript editor-pdf
// How to get all widgets for a base field in a PDF document?

// Get all widgets and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
```
