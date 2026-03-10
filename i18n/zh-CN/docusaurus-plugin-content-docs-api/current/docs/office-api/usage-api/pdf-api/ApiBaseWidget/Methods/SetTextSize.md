# SetTextSize

设置控件文本大小。
💡 文本大小 === 0 表示自动适应

## 语法

```javascript
expression.SetTextSize(nSize);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | 必需 | [pt](../../Enumeration/pt.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example gets all field widgets and sets text color for them.

```javascript editor-pdf
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
