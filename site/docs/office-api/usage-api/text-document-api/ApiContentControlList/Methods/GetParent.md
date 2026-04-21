# GetParent

Returns a parent of the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

Get a parent content control in a document.

```javascript editor-docx
// How can I get the parent using a content control list in a document?

// Get the parent for a content control list in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let parentControl = contentControlList.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Parent class type is: " + parentControl.GetClassType());
doc.AddElement(0, paragraph);
```
