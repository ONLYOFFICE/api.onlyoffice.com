# IsEditingPdfForm

Checks if the document is in the editing PDF form mode.

## Syntax

```javascript
expression.IsEditingPdfForm();
```

`expression` - A variable that represents an [Api](../form-api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

```javascript
Asc.plugin.executeMethod('IsEditingPdfForm', [], result => console.log('Is editing PDF form mode: ' + result));
```
