# GetFontList

Returns the fonts list.

## Syntax

```javascript
expression.GetFontList();
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FontInfo](../Enumeration/FontInfo.md)[]

## Example

```javascript
window.Asc.plugin.executeMethod ("GetFontList", null, function (res) {
    console.log (res)
});
```
