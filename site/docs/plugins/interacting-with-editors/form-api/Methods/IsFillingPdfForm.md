# IsFillingPdfForm

Checks if the document is in the filling PDF form mode.

## Syntax

```javascript
expression.IsFillingPdfForm();
```

`expression` - A variable that represents an [Api](../form-api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

```javascript
Asc.plugin.executeMethod('IsFillingPdfForm', [], result => console.log('Is filling PDF form mode: ' + result));
```
