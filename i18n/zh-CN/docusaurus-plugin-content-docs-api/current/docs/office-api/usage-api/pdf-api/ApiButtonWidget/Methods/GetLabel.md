# GetLabel

从按钮控件字段获取标签。

## 语法

```javascript
expression.GetLabel(appearance);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| appearance | 可选 | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | "normal" | 外观状态。 |

## 返回值

string

## 示例

检索 PDF 中不同状态下的按钮标签。

```javascript editor-pdf
// How do I access the text displayed on a button in a PDF?

// Get the label for each button state (normal, hover, down) in a PDF.

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

let labels = [widgets[0].GetLabel('normal'), widgets[0].GetLabel('down'), widgets[0].GetLabel('hover')];
console.log('Button widget labels are: ' + labels);
```
