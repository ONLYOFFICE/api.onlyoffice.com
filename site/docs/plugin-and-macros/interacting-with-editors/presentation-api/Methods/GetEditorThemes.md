# GetEditorThemes

Returns the list of available editor themes.

## Syntax

```javascript
expression.GetEditorThemes();
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object[]

## Example

```javascript
window.Asc.plugin.executeMethod("GetEditorThemes", null, function(themes) {
	console.log(themes);
});
```
