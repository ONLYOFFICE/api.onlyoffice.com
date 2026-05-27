# SetValue

设置组合框表单的值。如果值与列表项匹配则选择该项，
否则将其设置为自由文本（仅适用于可编辑的组合框）。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 要设置的值。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// SetValue selects a list item when the value matches; for editable combo boxes it also accepts free text.

// Create a combo box form with a list, then set its value to one of the list items.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Department", "tip": "Select your department", "required": true, "placeholder": "Department", "editable": false, "list": ["HR", "Engineering", "Marketing"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["HR", "Engineering", "Marketing"]);
comboBoxForm.SetValue("Engineering");
```
