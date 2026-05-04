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

Select a list item from a ComboBox content control in a document.

```javascript editor-docx
// How to select list item for an inline content control in a document?

// Select list item and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
