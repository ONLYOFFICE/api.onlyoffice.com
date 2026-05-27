# SetCheckInUnison

Sets field in unison prop.

## Syntax

```javascript
expression.SetCheckInUnison(checkInUnison);
```

`expression` - A variable that represents a [ApiRadiobuttonField](../ApiRadiobuttonField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkInUnison | Required | boolean |  | Specifies whether fields with the same export value are checked together. |

## Returns

boolean

## Example

Link radio button options so only one can be selected at a time in a PDF.

```javascript editor-pdf
// How do I make radio buttons work together in a PDF?

// Enable synchronized selection across radio button choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);
radiobuttonField.SetValue('Choice1');
```
