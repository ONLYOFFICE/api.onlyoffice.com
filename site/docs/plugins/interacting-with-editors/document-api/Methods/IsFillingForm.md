# IsFillingForm

Checks if the document is in the filling form mode.

## Syntax

```javascript
expression.IsFillingForm();
```

`expression` - A variable that represents an [Api](../document-api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

```javascript
Asc.plugin.executeMethod('IsFillingForm', [], result => console.log('Is filling form mode: ' + result));
```
