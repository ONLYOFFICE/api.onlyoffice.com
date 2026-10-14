# SetCalculate

设置 Calculate 操作。

## 语法

```javascript
expression.SetCalculate(action);
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | 必需 | [ApiJsAction](../../ApiJsAction/ApiJsAction.md) \| null \| undefined |  | 要设置的操作，传递 `null` 可移除该操作。 |

## 返回值

boolean

## 示例

此示例在文本字段上设置 Calculate 操作，根据其他字段计算其值。

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
