# AddDropDownListContentControl

Adds a new drop-down list content control to the document.

## Syntax

```javascript
expression.AddDropDownListContentControl(list, selected);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| list | Optional | [ContentControlListItem](../../Enumeration/ContentControlListItem.md)[] |  | An array of objects representing the items in the drop-down list. |
| selected | Optional | string |  | The optional value of the item that should be selected by default (must match one of the ListItem.Value). |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Add a dropdown list content control to a document in a document.

```javascript editor-docx
// How do I add the drop down list content control in a document?

// Add the drop down list content control using a document object.

let doc = Api.GetDocument();
doc.AddDropDownListContentControl();
```
