# AddOption

Adds options to checkbox group.

## Syntax

```javascript
expression.AddOption(nPage, aRect, sExportValue);
```

`expression` - A variable that represents a [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | Required | number |  | page to add option |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | rect of new option |
| sExportValue | Optional | string |  | option checked value |

## Returns

[ApiCheckboxWidget](../../ApiCheckboxWidget/ApiCheckboxWidget.md)