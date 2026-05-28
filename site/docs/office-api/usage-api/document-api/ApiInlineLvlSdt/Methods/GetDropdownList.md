# GetDropdownList

Returns a list of values of the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetDropdownList();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiContentControlList](../../ApiContentControlList/ApiContentControlList.md)

## Example

Retrieve the dropdown list object from an inline content control in a document.

```javascript editor-docx
// How do I access the dropdown list attached to a content control in a document?

// Inspect the type of a dropdown list tied to an inline content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
let contentControlList = cc.GetDropdownList();
paragraph.AddText("Class Type = " + contentControlList.GetClassType());
doc.Push(paragraph);
```
