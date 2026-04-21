# GetItem

Returns an item of the combo box / drop-down list content control by the position specified in the request.

## Syntax

```javascript
expression.GetItem(nIndex);
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | Item position. |

## Returns

[ApiContentControlListEntry](../../ApiContentControlListEntry/ApiContentControlListEntry.md)

## Example

Get the item of values of combobox/dropdown list in a document.

```javascript editor-docx
// How do I get the item in a document?

// Get the item using a content control list object in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("First item value: " + listItem.GetValue());
doc.AddElement(0, paragraph);
```
