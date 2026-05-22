# ShowComment

Shows a comment by its ID.

## Syntax

```javascript
expression.ShowComment(commentId);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| commentId | Required | string \| Array.string |  | The comment ID. |

## Returns

boolean

## Example

Make a specific comment visible by its ID in a document.

```javascript editor-docx
// How do I display a comment attached to a text range in a document?

// Reveal a reviewer's comment programmatically so it appears in the comment panel without manual interaction.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text has a comment attached to it.');

const range = paragraph.GetRange();
const comment = range.AddComment('Please review this section.', 'John');

if (comment) {
	doc.ShowComment(comment.GetId());
	const resultParagraph = Api.CreateParagraph();
	const author = comment.GetAuthorName();
	resultParagraph.AddText('Comment by ' + author + ' is now displayed.');
	doc.Push(resultParagraph);
}
```
