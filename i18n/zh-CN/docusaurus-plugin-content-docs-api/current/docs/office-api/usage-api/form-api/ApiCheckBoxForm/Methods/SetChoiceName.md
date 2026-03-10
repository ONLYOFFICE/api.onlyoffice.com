# SetChoiceName

设置当前单选按钮的选项名称。

## 语法

```javascript
expression.SetChoiceName(choiceName);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| choiceName | 必需 | string |  | 单选按钮的选项名称。 |

## 返回值

boolean

## 示例

此示例展示如何创建包含三个单选按钮的表单并为每个单选按钮指定选项名称。

```javascript editor-forms
// The radio buttons are grouped together by setting the same radio group key for each radio button.
// The radio group key is displayed at the end of the document.

let doc = Api.GetDocument();

// Create first radio button
let checkBoxForm = Api.CreateCheckBoxForm({
    "tip": "Select your preferred contact method",
    "required": true,
    "placeholder": "Contact preference",
    "radio": true
});
checkBoxForm.SetRadioGroup("ContactPreference");
checkBoxForm.SetChoiceName("Email");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Email");
paragraph.AddLineBreak();

// Create second radio button
checkBoxForm = Api.CreateCheckBoxForm({
    "tip": "Select your preferred contact method",
    "required": true,
    "placeholder": "Contact preference",
    "radio": true
});
checkBoxForm.SetRadioGroup("ContactPreference");
checkBoxForm.SetChoiceName("Phone");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Phone");
paragraph.AddLineBreak();
checkBoxForm.SetChecked(true);

// Create third radio button
checkBoxForm = Api.CreateCheckBoxForm({
    "tip": "Select your preferred contact method",
    "required": true,
    "placeholder": "Contact preference",
    "radio": true
});
checkBoxForm.SetRadioGroup("ContactPreference");
checkBoxForm.SetChoiceName("Mail");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Mail");

// Find the selected radio button and display the choice name
let radioGroup = checkBoxForm.GetRadioGroup();
paragraph = Api.CreateParagraph();
doc.GetAllForms().forEach(form => {
    if ("ContactPreference" === form.GetRadioGroup() && form.IsChecked()) {
        let choiceName = form.GetChoiceName();
        paragraph.AddText("Selected option: " + choiceName);
    }
});
doc.Push(paragraph);
```
