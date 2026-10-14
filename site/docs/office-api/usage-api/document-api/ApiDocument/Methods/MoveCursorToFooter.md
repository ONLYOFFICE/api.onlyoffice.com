# MoveCursorToFooter

Moves the cursor into the footer of the specified page and switches the document into the footer editing mode. The cursor is positioned at the beginning of the footer.

## Syntax

```javascript
expression.MoveCursorToFooter(page);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| page | Optional | number |  | The page number. If not specified, the current page is used. |

## Returns

boolean

## Example

Move the cursor into the footer of the current page and type text there.

```javascript editor-docx
// Switch the document into the footer editing mode so the following input goes to the footer.

// Enter text that appears in the page footer instead of the main document body.

const doc = Api.GetDocument();
doc.MoveCursorToFooter();
doc.EnterText('Text in the page footer.');
```
