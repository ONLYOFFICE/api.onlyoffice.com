# SetTextAlign

设置控件文本对齐方式。

:::note
仅适用于文本/组合框/列表框字段控件。
:::

## 语法

```javascript
expression.SetTextAlign(textAlign);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textAlign | 必需 | [WidgetTextAlign](../../Enumeration/WidgetTextAlign.md) |  | 文本对齐方式。 |

## 返回值

boolean

## 示例

在 PDF 中设置字段控件的文本对齐方式。

```javascript editor-pdf
// How do I align text in form field widgets in a PDF?

// Center the text displayed in all widgets of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextAlign('center');
});
```
