# SetPageBreakBefore

Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document.

Inherited from [ApiParaPr.SetPageBreakBefore](../../ApiParaPr/Methods/SetPageBreakBefore.md).

## Syntax

```javascript
expression.SetPageBreakBefore(isPageBreakBefore);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isPageBreakBefore | Required | boolean |  | The true value enables the option to render the contents of the paragraph at the beginning of a new page in the document. |

## Returns

boolean

## Example

Force a paragraph to always start at the top of a new page in a document.

```javascript editor-docx
// How do I make a paragraph begin on a fresh page in a document?

// Push a paragraph onto the next page by inserting a break before it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetPageBreakBefore(true);
doc.Push(paragraph);
```
