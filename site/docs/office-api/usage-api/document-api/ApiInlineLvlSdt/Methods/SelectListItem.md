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

Choose an active list item in a combo box content control in a document.

```javascript editor-docx
// How do I set the selected value of a combo box or dropdown control in a document?

// Pick a specific entry by value to pre-fill a combo box for the user in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
