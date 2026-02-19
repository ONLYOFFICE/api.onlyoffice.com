# SetScrollLongText

Sets text field can scroll long text prop.

## Syntax

```javascript
expression.SetScrollLongText(bScroll);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bScroll | Required | boolean |  | can the field scroll long text |

## Returns

boolean

## Example

This example adds text field and sets scroll long text property for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());

```
