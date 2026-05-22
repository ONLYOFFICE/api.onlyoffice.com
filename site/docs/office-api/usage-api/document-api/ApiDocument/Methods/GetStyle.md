# GetStyle

Returns a style by its name.

## Syntax

```javascript
expression.GetStyle(styleName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| styleName | Required | string |  | The style name. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md) \| null

## Example

Apply a named style to a paragraph in a document.

```javascript editor-docx
// How do I retrieve and apply a built-in heading style in a document?

// Reuse an existing style from the style gallery to format text without defining custom properties.

let doc = Api.GetDocument();
let noSpacingStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
