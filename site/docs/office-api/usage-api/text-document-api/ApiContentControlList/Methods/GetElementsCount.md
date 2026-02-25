# GetElementsCount

Returns a number of items of the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get items count of the list of values of combobox/listbox.

```javascript editor-docx playground
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let count = contentControlList.GetElementsCount();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Number of items in the list: " + count);
doc.AddElement(0, paragraph);
```
