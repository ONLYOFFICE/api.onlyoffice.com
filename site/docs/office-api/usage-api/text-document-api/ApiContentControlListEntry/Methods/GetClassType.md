# GetClassType

Returns a type of the ApiContentControlListEntry class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"contentControlList"

## Example

Check the class type returned by a content control list entry in a document.

```javascript editor-docx
// How do I check what type a content control list entry object is in a document?

// Retrieve and output the class type string for a content control list entry in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let classType = listItem.GetClassType();
paragraph.AddText("Class type of the content control list entry:" + classType);
doc.AddElement(0, paragraph);
```
