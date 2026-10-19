# Stop

Stops the traversal. No further hooks are called after the current one returns.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Stop();
```

`expression` - A variable that represents an [ApiDocumentVisitor](../ApiDocumentVisitor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Find the first paragraph that mentions a word and stop the document visitor there.

```javascript editor-docx
// How do I stop walking a document as soon as the first match is found?

// Add three paragraphs, stop at the first one containing the search word, make it bold and report how many paragraphs were visited.

const doc = Api.GetDocument();
const agenda = doc.GetElement(0);
agenda.AddText("Agenda for the quarterly meeting");
const overview = Api.CreateParagraph();
overview.AddText("Budget overview for the next quarter");
doc.Push(overview);
const summary = Api.CreateParagraph();
summary.AddText("Budget summary and open questions");
doc.Push(summary);

let found = null;
let visited = 0;
const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function (paragraph) {
	visited += 1;
	if (paragraph.GetText().indexOf("Budget") !== -1) {
		found = paragraph;
		visitor.Stop();
	}
	return true;
};
visitor.Traverse(false);

found.SetBold(true);
const result = Api.CreateParagraph();
result.AddText("Paragraphs visited before stopping: " + visited);
doc.Push(result);
```
