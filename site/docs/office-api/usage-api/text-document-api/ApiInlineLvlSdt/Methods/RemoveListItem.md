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

Remove an item from a combobox or dropdown list content control in a document.

```javascript editor-docx
// How can I remove the list item using an inline content control in a document?

// Remove the list item for an inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
contentControl.RemoveListItem('1');
```
