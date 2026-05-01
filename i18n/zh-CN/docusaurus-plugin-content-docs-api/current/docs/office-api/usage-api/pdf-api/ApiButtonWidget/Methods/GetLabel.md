# GetLabel

从按钮控件字段获取标签。

## 语法

```javascript
expression.GetLabel(sApType);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sApType | 可选 | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | 'normal' | 从哪种状态设置标签 |

## 返回值

string

## 示例

获取并显示 PDF 文档中按钮控件的标签。

```javascript editor-pdf
// How do I get the label in a PDF document?

// Get the label using a button widget object in a PDF document.

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
