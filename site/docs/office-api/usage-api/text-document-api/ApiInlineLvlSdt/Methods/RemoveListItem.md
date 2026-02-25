# RemoveListItem

Removes an item from a combo box list or drop-down list.

## Syntax

```javascript
expression.RemoveListItem(value);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string |  | The value of the item to remove from the list. |

## Returns

boolean

## Example

This example shows how to remove an item from a combobox or dropdown list content control.

```javascript editor-docx playground
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
contentControl.RemoveListItem('1');
```
