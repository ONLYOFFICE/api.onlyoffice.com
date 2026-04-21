# SetPlaceholder

Sets text field placeholder.

## Syntax

```javascript
expression.SetPlaceholder(sPlaceholder);
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPlaceholder | Required | string |  | field placeholder |

## Returns

boolean

## Example

Set placeholder for text widget in a PDF document.

```javascript editor-pdf
// How do I set placeholder in a PDF document?

// Set placeholder using a text widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
```
