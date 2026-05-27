# SetEditable

设置是否可以输入自定义文本。

## 语法

```javascript
expression.SetEditable(allowCustomText);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowCustomText | 必需 | boolean |  | 指定是否可以输入自定义文本。 |

## 返回值

boolean

## 示例

启用或禁用 PDF 中字段的用户输入。

```javascript editor-pdf
// Can I control whether users can type in a field in a PDF?

// Make a field accept or reject text entries in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
