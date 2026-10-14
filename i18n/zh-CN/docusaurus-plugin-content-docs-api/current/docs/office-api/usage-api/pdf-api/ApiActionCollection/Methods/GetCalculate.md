# GetCalculate

获取 Calculate 操作。

## 语法

```javascript
expression.GetCalculate();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiJsAction](../../ApiJsAction/ApiJsAction.md)

## 示例

此示例从文本字段的操作集合中获取 Calculate 操作。

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
