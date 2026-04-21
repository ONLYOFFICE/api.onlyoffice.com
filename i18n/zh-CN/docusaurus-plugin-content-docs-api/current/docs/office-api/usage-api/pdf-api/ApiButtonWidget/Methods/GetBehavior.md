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

获取并显示 PDF 文档中按钮控件的行为类型。

```javascript editor-pdf
// How to get the behavior for a button widget in a PDF document?

// Get the behavior and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behavior is: ' + widgets[0].GetBehavior());
```
