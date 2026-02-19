# GetStartStyle

Gets a line start style.

## Syntax

```javascript
expression.GetStartStyle();
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## Example

This example gets start line style to line annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style is: ${lineAnnot.GetStartStyle()}`);
```
