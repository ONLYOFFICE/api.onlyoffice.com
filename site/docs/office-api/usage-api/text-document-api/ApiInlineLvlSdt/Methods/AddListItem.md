# AddListItem

Adds an item to a combo box list or drop-down list.

## Syntax

```javascript
expression.AddListItem(name, value, pos);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the item to add to the list. |
| value | Required | string |  | The value of the item to add to the list. |
| pos | Optional | number |  | The optional position at which to insert the new item in the list. |

## Returns

boolean

## Example

This example shows how to add a list item to a combobox.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
