# SetRadioGroup

为当前单选按钮设置单选按钮组的键。

## 语法

```javascript
expression.SetRadioGroup(sKey);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | 必需 | string |  | 单选按钮组的键。 |

## 返回值

boolean

## 示例

此示例为单选按钮设置单选按钮组的键。

```javascript editor-forms
// How to add a radio group to the form.

// Set a radio group to the form.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetRadioGroup("Marital status");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetRadioGroup("Marital status");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioGroup = checkBoxForm.GetRadioGroup();
paragraph = Api.CreateParagraph();
paragraph.AddText("Radio group name of the radio buttons in this document: " + radioGroup);
doc.Push(paragraph);
```
