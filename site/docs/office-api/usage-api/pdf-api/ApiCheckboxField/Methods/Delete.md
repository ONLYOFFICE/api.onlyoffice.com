# Delete

Removes field from document.

Inherited from [ApiBaseField.Delete](../../ApiBaseField/Methods/Delete.md).

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a form field from a PDF.

```javascript editor-pdf
// How do I delete a form field from a PDF?

// Remove a field and all its associated widgets from a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
textField.Delete();
```
