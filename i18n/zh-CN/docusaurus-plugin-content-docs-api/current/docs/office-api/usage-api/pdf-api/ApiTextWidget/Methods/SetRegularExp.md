# SetRegularExp

设置文本小部件的正则验证表达式。

## 语法

```javascript
expression.SetRegularExp(regularExpression);
```

`expression` - 表示 [ApiTextWidget](../ApiTextWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| regularExpression | 必需 | string |  | 验证正则表达式。 |

## 返回值

boolean

## 示例

定义 PDF 文本字段中允许的文本模式。

```javascript editor-pdf
// How do I set a pattern that text must match in a text field in a PDF?

// Restrict text input to a specific format in a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');
```
