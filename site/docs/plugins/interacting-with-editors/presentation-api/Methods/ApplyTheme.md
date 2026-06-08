# ApplyTheme

Applies a theme to the presentation by index or name.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.ApplyTheme(themeIndex);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| themeIndex | Required | number \| string |  | The theme index (number) or theme name (string, case-insensitive). |

## Returns

boolean

## Example

```javascript
window.Asc.plugin.executeMethod("ApplyTheme", [5]);
```
