# SetCheckBoxChecked

Sets the checkbox value for the content control.\
This method updates the checkbox state of the content control to either checked or unchecked.

## Syntax

```javascript
expression.SetCheckBoxChecked(isChecked);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isChecked | Required | boolean |  | The state to set for the checkbox. `true` for checked, `false` for unchecked. |

## Returns

boolean

## Example

This example shows how to set the checkbox value of an inline content control.

```javascript editor-docx
let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);
```
