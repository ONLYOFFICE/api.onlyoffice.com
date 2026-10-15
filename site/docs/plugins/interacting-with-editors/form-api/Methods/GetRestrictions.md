# GetRestrictions

Returns the restrictions the editor currently applies to the document.

## Syntax

```javascript
expression.GetRestrictions();
```

`expression` - A variable that represents an [Api](../form-api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EditorRestrictions](../Enumeration/EditorRestrictions.md)

## Example

```javascript
window.Asc.plugin.executeMethod("GetRestrictions", [], function(restrictions) {
	if (restrictions & 0x80)
		console.log("The document cannot be changed");
});
```
