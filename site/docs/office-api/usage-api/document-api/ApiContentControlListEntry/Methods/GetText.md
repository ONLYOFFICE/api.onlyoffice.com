# GetText

Returns a String that represents the display text of a list item for the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the display label of a dropdown or combo box list entry in a document.

```javascript editor-docx
// How do I get the visible text of a list item in a document?

// Retrieve the label shown to the user when you need to verify or compare entry names in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(2);
let paragraph = Api.CreateParagraph();
let text = listItem.GetText();
paragraph.AddText("Text of the content control list entry: " + text);
doc.AddElement(0, paragraph);
```
