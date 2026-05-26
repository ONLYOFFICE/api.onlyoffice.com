# GetValue

Returns a String that represents the value of a list item for the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the underlying value stored for a dropdown or combo box list entry in a document.

```javascript editor-docx
// How do I get the value assigned to a list item in a document?

// Extract the programmatic value of an entry when the display label alone is not enough in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(1);
let paragraph = Api.CreateParagraph();
let value = listItem.GetValue();
paragraph.AddText("Value of the content control list entry: " + value);
doc.AddElement(0, paragraph);
```
