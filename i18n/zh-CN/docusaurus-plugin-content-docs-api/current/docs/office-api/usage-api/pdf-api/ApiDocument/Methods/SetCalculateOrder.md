# SetCalculateOrder

设置文档字段计算顺序

## 语法

```javascript
expression.SetCalculateOrder(names);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| names | 必需 | string[] |  | 字段名称的顺序 |

## 返回值

boolean

## 示例

设置文档中字段的计算顺序。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let priceField = Api.CreateTextField([10, 10, 160, 30]);
priceField.SetPartialName("Price");
priceField.SetValue("100");
page.AddObject(priceField);

let taxField = Api.CreateTextField([10, 40, 160, 60]);
taxField.SetPartialName("Tax");
page.AddObject(taxField);

let totalField = Api.CreateTextField([10, 70, 160, 90]);
totalField.SetPartialName("Total");
page.AddObject(totalField);

let taxCalc = Api.CreateJsAction("event.value = this.getField('Price').value * 0.2;");
let taxWidgets = taxField.GetAllWidgets();
taxWidgets[0].GetActions().SetCalculate(taxCalc);

let totalCalc = Api.CreateJsAction("event.value = this.getField('Price').value + this.getField('Tax').value;");
let totalWidgets = totalField.GetAllWidgets();
totalWidgets[0].GetActions().SetCalculate(totalCalc);

let result = doc.SetCalculateOrder(["Total", "Tax"]);
console.log('Calculate order set: ' + result);
console.log('Current order: ' + doc.GetCalculateOrder());
```
