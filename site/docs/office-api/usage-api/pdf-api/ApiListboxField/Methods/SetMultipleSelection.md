# SetMultipleSelection

Sets whether multiple values can be selected.

## Syntax

```javascript
expression.SetMultipleSelection(allowMultipleSelection);
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowMultipleSelection | Required | boolean |  | Specifies whether multiple values can be selected. |

## Returns

boolean

## Example

Allow a list selection field to accept multiple choices in a PDF.

```javascript editor-pdf
// How do I enable multiple selections in a PDF?

// Configure the field to permit picking several options in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
listboxField.AddOption('Option 4');
listboxField.SetMultipleSelection(true);
listboxField.SetValueIndexes([0, 3]);
```
