# SetKeepLines

Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible.

Inherited from [ApiParaPr.SetKeepLines](../../ApiParaPr/Methods/SetKeepLines.md).

## Syntax

```javascript
expression.SetKeepLines(isKeepLines);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isKeepLines | Required | boolean |  | The true value enables the option to keep lines of the paragraph on a single page. |

## Returns

boolean

## Example

Prevent a paragraph from being split across two pages in a document.

```javascript editor-docx
// How do I keep all lines of a paragraph together on the same page in a document?

// Force a paragraph to stay on one page instead of breaking across pages in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
paragraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetKeepLines(true);
doc.Push(paragraph);
```
