# SetChecked

设置复选框控件为选中状态。

## 语法

```javascript
expression.SetChecked(checked);
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checked | 必需 | boolean |  | 指定复选框是否被选中。 |

## 返回值

boolean

## 示例

在 PDF 中将复选框标记为选中或取消选中。

```javascript editor-pdf
// How do I toggle a checkbox widget between checked and unchecked in a PDF?

// Set the checked state of a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetChecked(true);
```
