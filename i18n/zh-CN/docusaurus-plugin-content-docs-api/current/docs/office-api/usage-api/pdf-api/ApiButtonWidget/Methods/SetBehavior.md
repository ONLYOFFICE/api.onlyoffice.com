# SetBehavior

设置按钮控件行为。

## 语法

```javascript
expression.SetBehavior(sType);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ButtonBehavior](../../Enumeration/ButtonBehavior.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中设置按钮控件的行为类型。

```javascript editor-pdf
// How do I set behavior in a PDF document?

// Set behavior using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behabior is: ' + widgets[0].GetBehavior());
```
