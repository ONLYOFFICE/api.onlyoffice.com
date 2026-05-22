# SetLocale

Sets a locale to the document.

## Syntax

```javascript
expression.SetLocale(LCID);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| LCID | Required | number |  | The locale specified. |

## Returns

boolean

## Example

Apply a specific regional language setting to the document in a spreadsheet.

```javascript editor-xlsx
// How do I change the language and region used for dates, numbers, and text in a spreadsheet?

// Switch the document locale to match the target audience's region in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
```
