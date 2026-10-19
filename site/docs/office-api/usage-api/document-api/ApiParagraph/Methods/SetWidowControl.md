# SetWidowControl

Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page.

Inherited from [ApiParaPr.SetWidowControl](../../ApiParaPr/Methods/SetWidowControl.md).

## Syntax

```javascript
expression.SetWidowControl(isWidowControl);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWidowControl | Required | boolean |  | The true value means that a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page. |

## Returns

boolean

## Example

Prevent a lone paragraph line from being left behind on a page by itself in a document.

```javascript editor-docx
// How do I keep orphaned or widowed lines of a paragraph from appearing alone on a page in a document?

// Ensure paragraph lines always flow together so no single line strays to an isolated page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The single line of the last paragraph on this page will be prevented from being displayed on a separate page. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
for (let i = 0; i < 4; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetWidowControl(true);
paragraph.AddText("This last line is displayed on the next page, because we used the set widow control method set to 'true'.");
doc.Push(paragraph);
```
