# GetChoiceName

返回当前单选按钮的选项名称。

## 语法

```javascript
expression.GetChoiceName();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从文档中一组单选按钮中检索所选选项的标签。

```javascript editor-docx
// How do I find out which radio button a user has chosen by reading its name in a document?

// Identify the active selection in a grouped set of choices so it can be displayed or processed in a document.

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
