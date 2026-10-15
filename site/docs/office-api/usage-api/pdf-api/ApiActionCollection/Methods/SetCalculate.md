# SetCalculate

Sets the Calculate action.

## Syntax

```javascript
expression.SetCalculate(action);
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiJsAction](../../ApiJsAction/ApiJsAction.md) \| null \| undefined |  | The action to set, or `null` to remove it. |

## Returns

boolean

## Example

This example sets a Calculate action on a text field to compute its value from other fields.

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
let result = widgets[0].GetActions().SetCalculate(calcAction);

console.log('Calculate action set: ' + result);
```
