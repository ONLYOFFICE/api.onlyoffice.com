# GetSubForms

Returns an ordered list of subforms.

## Syntax

```javascript
expression.GetSubForms();
```

`expression` - A variable that represents a [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)[]

## Example

This example demonstrates how to get all subforms of a complex form.

```javascript editor-docx playground
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm({"placeholder" : "username"}));
complexForm.Add("@");
let comboBox = Api.CreateComboBoxForm({"editable" : false, "placeholder" : "mail.com"});
comboBox.SetListValues(["onlyoffice.com", "gmail.com", "hotmail.com"]);
complexForm.Add(comboBox);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
paragraph.AddLineBreak();
let subForms = complexForm.GetSubForms();
paragraph.AddText("Number of subforms: " + subForms.length);

```
