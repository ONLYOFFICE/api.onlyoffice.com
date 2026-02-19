# SetMultipleSelection

Sets field multiselect prop.

## Syntax

```javascript
expression.SetMultipleSelection(bMulti);
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMulti | Required | boolean |  | allow user select multi values |

## Returns

boolean

## Example

This example sets multiple selection for listbox field.

```javascript editor-pdf
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
