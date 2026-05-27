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

Add items to a combobox content control and select one in a document.

```javascript editor-docx
// How do I populate a combobox content control with list items in a document?

// Build a dropdown list inside a content control and set its active value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
