# SetStyle

The paragraph style base method.

:::note
This method is not used by itself, as it only forms the basis for the [ApiParagraph#SetStyle](../../ApiParagraph/Methods/SetStyle.md) method which sets the selected or created style for the paragraph.
:::

Inherited from [ApiParaPr.SetStyle](../../ApiParaPr/Methods/SetStyle.md).

## Syntax

```javascript
expression.SetStyle(oStyle);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The style of the paragraph to be set. |

## Returns

boolean

## Example

Apply a named style to a paragraph in a document.

```javascript editor-docx
// How do I format a paragraph using one of the built-in styles in a document?

// Give a paragraph a consistent appearance by assigning it a predefined style in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
