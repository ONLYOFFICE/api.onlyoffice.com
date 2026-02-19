# AddWidget

Adds new widget - visual representation for field

## Syntax

```javascript
expression.AddWidget(nPage, aRect);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | Required | number |  | page to add widget |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | field rect |

## Returns

[ApiWidget](../../Enumeration/ApiWidget.md)

## Example

This example adds new widget - visual representation for field

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);

```
