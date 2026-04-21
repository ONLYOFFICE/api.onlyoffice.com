# SetScrollLongText

Sets text field can scroll long text prop.

## Syntax

```javascript
expression.SetScrollLongText(bScroll);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bScroll | Required | boolean |  | can the field scroll long text |

## Returns

boolean

## Example

Add text field and set scroll long text property for it in a PDF document.

```javascript editor-pdf
// How to set scroll long text for a text field in a PDF document?

// Set scroll long text and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());
```
