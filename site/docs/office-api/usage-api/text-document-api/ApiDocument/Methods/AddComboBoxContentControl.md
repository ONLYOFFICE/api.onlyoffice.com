# AddComboBoxContentControl

Adds a new combo box content control to the document.

## Syntax

```javascript
expression.AddComboBoxContentControl(list, selected);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| list | Optional | [ContentControlListItem](../../Enumeration/ContentControlListItem.md)[] |  | An array of objects representing the items in the combo box. |
| selected | Optional | string |  | The optional value of the item that should be selected by default (must match one of the ListItem.Value). |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to add a combo box content control to a document:

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddComboBoxContentControl();
```
