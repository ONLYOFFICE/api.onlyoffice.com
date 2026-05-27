# SetScaleHow

设置按钮控件缩放方式类型

## 语法

```javascript
expression.SetScaleHow(scaleHow);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| scaleHow | 必需 | [ButtonScaleHow](../../Enumeration/ButtonScaleHow.md) |  | 图标缩放模式。 |

## 返回值

boolean

## 示例

在 PDF 文档中设置按钮控件的缩放方式类型。

```javascript editor-pdf
// Apply scale how type such as 'proportional' to a button widget.

// Display the set scale how value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleHow('proportional');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());
```
