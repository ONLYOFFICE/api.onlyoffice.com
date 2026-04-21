# IsFitBounds

检查按钮控件是否适应边界。

## 语法

```javascript
expression.IsFitBounds();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

获取并显示 PDF 文档中按钮控件的适合边界属性。

```javascript editor-pdf
// How to is fit bounds for a button widget in a PDF document?

// Is fit bounds and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetFitBounds(true);
widgets[0].SetLabel('Fit bounds is: ' + widgets[0].IsFitBounds());
```
