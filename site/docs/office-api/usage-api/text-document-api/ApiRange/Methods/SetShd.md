# SetShd

Specifies the shading applied to the contents of the current text Range.

## Syntax

```javascript
expression.SetShd(type, color);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type applied to the contents of the current text Range. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example specifies the shading applied to the contents of the current text Range.

```javascript editor-docx
// How to set a shading for a range text.

// Get a range text, specify its shading options.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetShd("clear", 255, 111, 61);
```
