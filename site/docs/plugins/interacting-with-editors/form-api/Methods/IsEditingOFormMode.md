# IsEditingOFormMode

Checks if the document is in the editing OForm mode.

## Syntax

```javascript
expression.IsEditingOFormMode();
```

`expression` - A variable that represents a [Api](../form-api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

```javascript
Asc.plugin.executeMethod('IsEditingOFormMode', [], result => console.log('Is editing OForm mode: ' + result));
```
