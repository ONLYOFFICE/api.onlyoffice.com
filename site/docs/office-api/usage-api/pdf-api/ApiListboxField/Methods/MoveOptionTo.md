# MoveOptionTo

Moves option to specified position in list options.

## Syntax

```javascript
expression.MoveOptionTo(nCurPos, nNewPos);
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCurPos | Required | number |  | index of moved option |
| nNewPos | Required | number |  | new positon for option |

## Returns

boolean

## Example

This example moves option in field with list of options.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOptionTo(2, 0);
```
