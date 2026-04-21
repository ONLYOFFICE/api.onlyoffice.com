# SetRequired

Sets field required

## Syntax

```javascript
expression.SetRequired();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Set field required in a PDF document.

```javascript editor-pdf
// How to set required for a base field in a PDF document?

// Set required and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());
```
