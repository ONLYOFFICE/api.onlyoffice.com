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

This example shows how to get an object by its internal ID.

```javascript editor-docx
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
