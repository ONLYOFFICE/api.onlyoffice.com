# GetFormValueByKey

Returns the form value for the specified key. For a group of radio buttons returns Choice, i.e. the name of the selected item.

## Syntax

```javascript
expression.GetFormValueByKey(key);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| key | Required | string |  | The form key. |

## Returns

null \| boolean \| string

## Example

Read the current values of form fields by their keys and print them in a document.

```javascript editor-forms
// How do I retrieve what a user entered in a named form field in a document?

// Verify filled-in form data by looking up field values by key in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let formValue = doc.GetFormValueByKey("CompanyName");
paragraph.AddText("CompanyName: " + formValue);
paragraph.AddLineBreak();
formValue = doc.GetFormValueByKey("BestCompany");
paragraph.AddText("BestCompany: " + formValue);
```
