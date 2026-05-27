# SetBorderStyle

设置控件边框样式。

## 语法

```javascript
expression.SetBorderStyle(borderStyle);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderStyle | 必需 | [WidgetBorderStyle](../../Enumeration/WidgetBorderStyle.md) |  | 边框样式。 |

## 返回值

boolean

## 示例

在 PDF 中为字段控件应用边框样式。

```javascript editor-pdf
// How do I set the border style for widgets in a PDF?

// Change the appearance of widget borders with preset styles in a PDF.

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
```
