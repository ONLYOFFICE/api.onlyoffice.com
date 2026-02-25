# SelectListItem

Sets the selected item for a combo box list or drop-down list.

## Syntax

```javascript
expression.SelectListItem(name);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the item to be selected in the list. |

## Returns

boolean

## Example

This example shows how to select a list item from a ComboBox content control.

```javascript editor-docx playground
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
