# SetMask

Sets mask for field.

## Syntax

```javascript
expression.SetMask(inputMask);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inputMask | Required | string |  | The input mask (e.g. "(999)999-9999"). |

## Returns

boolean

## Example

Apply an input pattern to a field in a PDF.

```javascript editor-pdf
// What format should user input follow in a PDF?

// Enforce a specific input structure in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetMask("(999)999-9999");
comboboxField.SetValue("(123)456-7890");
```
