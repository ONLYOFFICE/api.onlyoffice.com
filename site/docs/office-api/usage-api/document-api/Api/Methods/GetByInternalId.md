# GetByInternalId

Returns the object by it's internal ID.

## Syntax

```javascript
expression.GetByInternalId(id);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | The object internal ID. |

## Returns

object

## Example

Look up a paragraph by its unique ID and display its content in a document.

```javascript editor-docx
// How do I find a specific element by its ID in a document?

// Retrieve a paragraph using its identifier and show its type and text in a document.

const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
paragraph.AddText('Original paragraph text.');
const internalId = paragraph.GetInternalId();

const found = Api.GetByInternalId(internalId);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Found object class type: ' + found.GetClassType());
resultParagraph.AddLineBreak();
resultParagraph.AddText('Found paragraph text: ' + found.GetText());
doc.Push(resultParagraph);
```
