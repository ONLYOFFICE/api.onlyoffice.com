# SetAutoFit

设置文本自动适应。

## 语法

```javascript
expression.SetAutoFit(auto);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| auto | 必需 | boolean |  | 指定是否启用文本自动调整。 |

## 返回值

boolean

## 示例

为 PDF 中所有字段控件启用自动文本适配。

```javascript editor-pdf
// How do I set autofit for field widgets in a PDF?

// Apply autofit to scale text to fit widget boundaries in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetAutoFit(true);
});
```
