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

在文档中用可选选项列表填充组合框表单。

```javascript editor-forms
// How do I define the drop-down choices available in a combo box form in a document?

// Supply a set of predefined values to a combo box so users can pick from a list in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
```
