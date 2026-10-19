# GetClassType

Gets class type of this object.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"actionCollection"

## Example

This example gets the class type of an action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();

console.log('Actions class type: ' + actions.GetClassType());
```
