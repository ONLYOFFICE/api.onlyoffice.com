# SetLabel

为按钮控件字段设置标签。

## 语法

```javascript
expression.SetLabel(sLabel, sApType);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLabel | 必需 | string |  | 按钮标签 |
| sApType | 可选 | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | 'normal' | 为哪种状态设置标签 |

## 返回值

boolean

## 示例

在 PDF 文档中设置按钮控件的标签。

```javascript editor-pdf
// How to set label for a button widget in a PDF document?

// Set label and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('push');

widgets[0].SetLabel('Normal label', 'normal');
widgets[0].SetLabel('Down label', 'down');
widgets[0].SetLabel('Hover label', 'hover');
```
