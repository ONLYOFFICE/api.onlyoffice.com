# Delete

Removes a content control and its content. If keepContent is true, the content is not deleted.

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Remove an inline content control from a document.

```javascript editor-docx
// How do I delete an inline content control in a document?

// Replace a content control with plain text to clean up unwanted input fields in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.Delete(false);
paragraph.AddText("The inline text content control was removed.");
```
