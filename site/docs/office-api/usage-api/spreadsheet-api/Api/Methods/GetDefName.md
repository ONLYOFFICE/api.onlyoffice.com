# GetDefName

Returns the ApiName object by the range name.

## Syntax

```javascript
expression.GetDefName(defName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| defName | Required | string |  | The range name. |

## Returns

[ApiName](../../ApiName/ApiName.md)

## Example

Get the named range object by the range name in a spreadsheet.

```javascript editor-xlsx
// How to work with named ranges in a spreadsheet using the API.

// Get name of an object using a range name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
