# SetComb

Sets text field comb prop.
💡  Should have char limit more then 0 

## Syntax

```javascript
expression.SetComb(bComb);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bComb | Required | boolean |  | will the field be comb |

## Returns

boolean

## Example

Display text input in individual cells in a text field in a PDF.

```javascript editor-pdf
// How do I spread out characters into separate boxes in a PDF?

// Enable spaced character input for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is: ' + textField.IsComb());
```
