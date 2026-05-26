# SetPlaceholderText

Sets the placeholder text to the current inline content control.
*Can't be set to checkbox or radio button*

## Syntax

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current inline content control. |

## Returns

boolean

## Example

Define the placeholder text of an inline content control in a document.

```javascript editor-docx
// How do I set a custom placeholder message for an inline content control in a document?

// Guide users with descriptive hint text shown inside an empty content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.SetPlaceholderText("Custom placeholder");
```
