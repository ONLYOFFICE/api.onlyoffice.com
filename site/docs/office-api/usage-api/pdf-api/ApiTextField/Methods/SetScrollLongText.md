# SetScrollLongText

Sets whether the text field can scroll long text.

## Syntax

```javascript
expression.SetScrollLongText(allowScroll);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowScroll | Required | boolean |  | Specifies whether long text can be scrolled. |

## Returns

boolean

## Example

Let text scroll horizontally when it exceeds the field width in a PDF.

```javascript editor-pdf
// How do I make a narrow text field scrollable for longer content in a PDF?

// Enable scrolling for text that overflows the field boundary in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());
```
