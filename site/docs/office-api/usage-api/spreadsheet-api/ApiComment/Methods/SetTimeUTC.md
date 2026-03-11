# SetTimeUTC

Sets the timestamp of the comment creation in UTC format.

## Syntax

```javascript
expression.SetTimeUTC(nTimeStamp);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number \| String |  | The timestamp of the comment creation in UTC format. |

## Returns

This method doesn't return any data.

## Example

This example sets the timestamp of the comment creation in UTC format.

```javascript editor-xlsx
// How to change a timestamp in UTC when a comment was created.

// Add a comment then update its creation time in UTC format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
comment.SetTimeUTC(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());
```
