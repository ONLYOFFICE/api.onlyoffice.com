# SetScaleWhen

设置按钮控件缩放时机类型

## 语法

```javascript
expression.SetScaleWhen(sType);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ButtonScaleWhen](../../Enumeration/ButtonScaleWhen.md) |  | 按钮控件缩放时机类型 |

## 返回值

boolean

## 示例

This example sets button widget scale when type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleWhen('always');
widgets[0].SetLabel('Scale when is: ' + widgets[0].GetScaleWhen());
```
