# GetClassType

Returns a type of the ApiContentControlList class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"contentControlList"

## Example

Check the class type returned by a content control list in a document.

```javascript editor-docx
// How do I check what type a content control list object is in a document?

// Retrieve and output the class type string for a content control list in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let dropDownList = cc.GetDropdownList();
let classType = dropDownList.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type of the content control list: " + classType);
doc.Push(paragraph);
```
