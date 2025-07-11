# SetShd

Specifies the shading applied to the contents of the current text run.

## Syntax

```javascript
expression.SetShd(sType, r, g, b);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type applied to the contents of the current text run. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the shading applied to the contents of the current text run.

```javascript editor-docx
// How to set a shading for a text.

// Create a text run object, specify its shading options.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd("clear", 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");
```
