# SetTime

Sets the timestamp of the comment creation in the current time zone format.

## Syntax

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number \| String |  | The timestamp of the comment creation in the current time zone format. |

## Returns

This method doesn't return any data.

## Example

Update the recorded creation time of a comment in a spreadsheet.

```javascript editor-xlsx
// How do I change when a comment appears to have been created in a spreadsheet?

// Overwrite the original timestamp on a comment with a new time in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp: ");
comment.SetTime(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTime());
```
