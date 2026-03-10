# SetListValues

设置当前组合框的列表值。

## 语法

```javascript
expression.SetListValues(aListString);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aListString | 必需 | string[] |  | 组合框的列表值。 |

## 返回值

boolean

## 示例

此示例设置当前组合框的列表值。

```javascript editor-docx
// How to set items of the dropdown.

// Create a combobox and add its list values.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
```
