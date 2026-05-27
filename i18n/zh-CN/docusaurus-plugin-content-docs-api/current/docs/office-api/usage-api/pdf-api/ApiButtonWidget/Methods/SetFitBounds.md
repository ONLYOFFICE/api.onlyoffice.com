# SetFitBounds

设置按钮控件适应边界。

## 语法

```javascript
expression.SetFitBounds(fit);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fit | 必需 | boolean |  | 指定图标是否缩放以适应按钮边界。 |

## 返回值

boolean

## 示例

在 PDF 文档中设置按钮控件的适合边界属性。

```javascript editor-pdf
// Enable or disable the fit bounds behavior for a button widget.

// Display the fit bounds status using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetFitBounds(true);
widgets[0].SetLabel('Fit bounds is: ' + widgets[0].IsFitBounds());
```
