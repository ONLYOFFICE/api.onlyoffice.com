# GetBehavior

获取按钮控件行为。

## 语法

```javascript
expression.GetBehavior();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ButtonBehavior](../../Enumeration/ButtonBehavior.md)

## 示例

This example gets button widget behavior type and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behavior is: ' + widgets[0].GetBehavior());
```
