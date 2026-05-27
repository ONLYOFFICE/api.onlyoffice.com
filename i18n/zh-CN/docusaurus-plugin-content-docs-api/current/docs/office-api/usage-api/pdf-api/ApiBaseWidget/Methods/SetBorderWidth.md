# SetBorderWidth

设置控件边框宽度。

## 语法

```javascript
expression.SetBorderWidth(borderWidth);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderWidth | 必需 | [WidgetBorderWidth](../../Enumeration/WidgetBorderWidth.md) |  | 要设置的边框宽度。 |

## 返回值

boolean

## 示例

设置 PDF 中字段控件的边框粗细。

```javascript editor-pdf
// How do I change the border width for widgets in a PDF?

// Apply different border thicknesses to widget outlines in a PDF.

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
```
