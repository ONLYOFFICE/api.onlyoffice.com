# GetCalculate

Gets Calculate action.

## Syntax

```javascript
expression.GetCalculate();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiJsAction](../../ApiJsAction/ApiJsAction.md)

## Example

This example gets the Calculate action from a text field's action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let priceField = Api.CreateTextField([10, 10, 160, 30]);
priceField.SetPartialName("Price");
priceField.SetValue("100");
page.AddObject(priceField);

let qtyField = Api.CreateTextField([10, 40, 160, 60]);
qtyField.SetPartialName("Qty");
qtyField.SetValue("3");
page.AddObject(qtyField);

let totalField = Api.CreateTextField([10, 70, 160, 90]);
totalField.SetPartialName("Total");
page.AddObject(totalField);

let calcAction = Api.CreateJsAction("event.value = this.getField('Price').value * this.getField('Qty').value;");
let widgets = totalField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetCalculate(calcAction);

let action = actions.GetCalculate();
console.log('Calculate action script: ' + action.GetScript());
```
