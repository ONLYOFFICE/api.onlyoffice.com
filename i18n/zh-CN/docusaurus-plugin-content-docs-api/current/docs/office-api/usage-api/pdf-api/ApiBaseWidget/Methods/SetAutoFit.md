# SetAutoFit

设置文本自动适应。

## 语法

```javascript
expression.SetAutoFit(bAuto);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAuto | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

获取 PDF 文档中的所有字段控件并为其设置文本自动适应。

```javascript editor-pdf
// How do I set auto fit in a PDF document?

// Set auto fit using a widget object in a PDF document.

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
