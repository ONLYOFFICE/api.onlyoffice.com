# AddCheckBoxContentControl

Adds a new checkbox content control to the document.

## Syntax

```javascript
expression.AddCheckBoxContentControl(checkBoxPr);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | Required | [ContentControlCheckBoxPr](../../Enumeration/ContentControlCheckBoxPr.md) |  | The configuration object for the checkbox. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Add a checkbox content control to a document: in a document.

```javascript editor-docx
// How to add the check box content control for a document?

// Add the check box content control and display the result in a document.

let doc = Api.GetDocument();
doc.AddCheckBoxContentControl({checked : true});
```
