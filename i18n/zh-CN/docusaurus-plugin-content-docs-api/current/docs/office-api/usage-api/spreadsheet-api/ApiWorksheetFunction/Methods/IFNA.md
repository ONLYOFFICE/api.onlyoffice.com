# IFNA

检查第一个参数中的公式是否存在错误。如果公式返回 *#N/A* 错误值，函数返回指定的值；否则返回公式的结果。

## 语法

```javascript
expression.IFNA(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 被检查是否有错误的值、表达式或引用。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 公式计算结果为 *#N/A* 错误值时要返回的值。 |

## 返回值

number \| string \| boolean

## 示例

此示例演示如何检查第一个参数中的公式是否有错误。如果公式返回 N/A 错误值，函数返回指定的值，否则返回公式的结果。

```javascript editor-xlsx
// How to check whether a formula result is N/A.

// Use a function to get a result from a formula if an error occurs show specified error message.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ids = ["ID", 1, 2, 3, 4, 5];
let clients = ["Client", "John Smith", "Ella Tompson", "Mary Shinoda", "Lily-Ann Bates", "Clara Ray"];
let phones = ["Phone number", "12054097166", "13343943678", "12568542099", "12057032298", "12052914781"];

for (let i = 0; i < ids.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(ids[i]);
}
for (let j = 0; j < clients.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(clients[j]);
}
for (let n = 0; n < phones.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(phones[n]);
}

let range = worksheet.GetRange("B1:B5");
worksheet.GetRange("D6").SetValue(func.IFNA(func.MATCH("Mark Potato", range, 0), "Not found"));
```
