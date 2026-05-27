# CreateListboxField

Creates a listbox field.

## Syntax

```javascript
expression.CreateListboxField(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiListboxField](../../ApiListboxField/ApiListboxField.md)

## Example

Create and add a listbox field to document.

```javascript editor-pdf
// Create the listbox field in a PDF document.

// Create the listbox field and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let listboxField = Api.CreateListboxField([10, 10, 100, 70]);
page.AddObject(listboxField);
listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
```
