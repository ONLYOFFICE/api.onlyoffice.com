# SetEndStyle

Sets a line end style.

## Syntax

```javascript
expression.SetEndStyle(style);
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets end line style to line annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
lineAnnot.SetEndStyle("slash");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End style set to: ${lineAnnot.GetEndStyle()}`);
```
