# SetCheckInUnison

Sets field in unison prop.

## Syntax

```javascript
expression.SetCheckInUnison(bInUnison);
```

`expression` - A variable that represents a [ApiRadiobuttonField](../ApiRadiobuttonField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bInUnison | Required | boolean |  | will fields with the same export value be checked at the same time |

## Returns

boolean

## Example

This example sets radiobutton field check in unison property.

```javascript editor-pdf
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
