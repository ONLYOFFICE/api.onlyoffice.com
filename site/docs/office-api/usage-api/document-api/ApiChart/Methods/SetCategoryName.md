# SetCategoryName

Sets a name to the specified chart category.

## Syntax

```javascript
expression.SetCategoryName(sName, nCategory);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name which will be set to the specified chart category. |
| nCategory | Required | number |  | The index of the chart category. |

## Returns

boolean

## Example

Rename a category label on a chart in a document.

```javascript editor-docx
// How do I change the name of a specific category on a chart in a document?

// Update a category label to reflect revised data ranges or corrected axis names in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetCategoryName("2013", 0);
```
