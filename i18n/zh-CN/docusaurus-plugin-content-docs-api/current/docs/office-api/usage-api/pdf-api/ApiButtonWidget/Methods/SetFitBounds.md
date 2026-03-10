# SetFitBounds

设置按钮控件适应边界。

## 语法

```javascript
expression.SetFitBounds(bFit);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFit | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example sets button widget fit bounds property.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetFitBounds(true);
widgets[0].SetLabel('Fit bounds is: ' + widgets[0].IsFitBounds());
```
