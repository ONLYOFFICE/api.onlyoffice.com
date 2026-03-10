# SelectListValue

从组合框列表值中选择指定的值。

## 语法

```javascript
expression.SelectListValue(sValue);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | 必需 | string |  | 将被选中的组合框列表值。 |

## 返回值

boolean

## 示例

此示例从组合框列表值中选择指定的值。

```javascript editor-forms
// How to know whether a combobox form is required or not.

// Display a boolean representing whether a combobox is required.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SelectListValue("USA");
```
