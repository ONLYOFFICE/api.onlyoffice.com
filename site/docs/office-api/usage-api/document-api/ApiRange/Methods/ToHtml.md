# ToHtml

Converts the range to HTML.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.ToHtml(options);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | &#123;&#125; | The HTML conversion options. |

## Returns

string

## Example

Export a selected portion of text as an HTML string in a document.

```javascript editor-docx
// How do I turn a range of words into HTML markup so it can be used outside the document?

// Capture the content of a text range in HTML format for embedding or further processing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This range will be converted to HTML.");
let range = paragraph.GetRange(0, 36);
let html = range.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);
```
