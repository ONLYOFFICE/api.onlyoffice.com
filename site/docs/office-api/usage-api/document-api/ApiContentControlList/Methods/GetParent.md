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

Retrieve the parent content control that owns a dropdown list in a document.

```javascript editor-docx
// How do I get the content control that contains a given dropdown list in a document?

// Navigate from a list object up to its enclosing combo box control to inspect its properties in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let parentControl = contentControlList.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Parent class type is: " + parentControl.GetClassType());
doc.AddElement(0, paragraph);
```
