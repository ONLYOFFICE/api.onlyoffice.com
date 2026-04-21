# SetStartStyle

Sets a line start style.

## Syntax

```javascript
expression.SetStartStyle(style);
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | No description provided. |

## Returns

boolean

## Example

Set start line style to line annotation in a PDF document.

```javascript editor-pdf
// How do I set start style in a PDF document?

// Set start style using a line annotation object in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
lineAnnot.SetStartStyle("rClosedArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style set to: ${lineAnnot.GetStartStyle()}`);
```
