# SetLabel

为按钮控件字段设置标签。

## 语法

```javascript
expression.SetLabel(label, appearance);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | 必需 | string |  | 按钮标签。 |
| appearance | 可选 | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | "normal" | 外观状态。 |

## 返回值

boolean

## 示例

在 PDF 文档中设置按钮控件的标签。

```javascript editor-pdf
// Configure labels for different button states: normal, down, and hover.

// Apply multiple labels to a button widget with 'push' behavior.

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
