# PasteText

Pastes text into the document.

## Syntax

```javascript
expression.PasteText(text);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | A string value that specifies the text to be pasted into the document. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("PasteText", ["ONLYOFFICE for developers"]);
```
