# ToHtml

Converts the paragraph to HTML.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.ToHtml(options);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | The HTML conversion options. |

## Returns

string

## Example

Export a paragraph's content as an HTML string for use outside the editor in a document.

```javascript editor-docx
// How do I get the HTML representation of a paragraph's text and formatting in a document?

// Capture paragraph content as markup so it can be embedded or transferred to a web page from a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This paragraph will be converted to HTML.");
let html = paragraph.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);
```
