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

从文档中组合框的下拉列表中选择特定值。

```javascript editor-docx
// How do I programmatically pick an option from a combo box list in a document?

// Pre-fill a combo box with a known answer to set the default selection in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SelectListValue("USA");
```
