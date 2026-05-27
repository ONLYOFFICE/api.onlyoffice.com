# SetTextSize

设置控件文本大小。
💡 文本大小 === 0 表示自动适应

## 语法

```javascript
expression.SetTextSize(size);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| size | 必需 | [pt](../../Enumeration/pt.md) |  | 以磅为单位的字体大小。 |

## 返回值

boolean

## 示例

设置 PDF 中输入字段控件的文本大小。

```javascript editor-pdf
// How do I change the font size of text in form fields in a PDF?

// Adjust the text display size for all widgets in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetTextColor(rgbColor);
    widget.SetTextSize(15);
});
```
