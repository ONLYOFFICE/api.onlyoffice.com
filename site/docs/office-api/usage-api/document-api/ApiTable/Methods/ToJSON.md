# ToJSON

Converts the ApiTable object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Serialize a table to a portable format and restore it as a new table in a document.

```javascript editor-docx
// How do I save a table's structure and recreate it from saved data in a document?

// Duplicate a table by converting it to data and rebuilding it with custom borders in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
let json = table.ToJSON(false, true);
let tableFromJSON = Api.FromJSON(json);
tableFromJSON.SetTableBorderTop("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderRight("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderInsideV("single", 32, 0, 255, 111, 6);
tableFromJSON.SetTableBorderInsideH("single", 32, 0, 255, 111, 6);
tableFromJSON.SetWidth("percent", 100);
doc.Push(tableFromJSON);
```
