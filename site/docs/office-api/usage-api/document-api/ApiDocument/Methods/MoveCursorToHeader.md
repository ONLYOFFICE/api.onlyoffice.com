# MoveCursorToHeader

Moves the cursor into the header of the specified page and switches the document into the header editing mode. The cursor is positioned at the beginning of the header.

## Syntax

```javascript
expression.MoveCursorToHeader(page);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| page | Optional | number |  | The page number. If not specified, the current page is used. |

## Returns

boolean

## Example

Move the cursor into the header of the current page and type text there.

```javascript editor-docx
// Switch the document into the header editing mode so the following input goes to the header.

// Enter text that appears in the page header instead of the main document body.

const doc = Api.GetDocument();
doc.MoveCursorToHeader();
doc.EnterText('Text in the page header.');
```
