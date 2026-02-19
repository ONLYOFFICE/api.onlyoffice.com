# GetClassType

Returns a type of the ApiRichRun class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRichRun](../ApiRichRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"richRun"

## Example

This example gets class type of rich run object.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");

console.log(`Object class type is: ${run.GetClassType()}`);
```
