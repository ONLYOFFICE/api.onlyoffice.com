# GetTextSize

获取控件文本大小。
💡 文本大小 === 0 表示自动适应

## 语法

```javascript
expression.GetTextSize();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[pt](../../Enumeration/pt.md)

## 示例

This example gets field widget and displays it's text size.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextSize(15);
});
let textSize = widgets[0].GetTextSize();
textField.SetValue('Text size is: ' + textSize);


```
