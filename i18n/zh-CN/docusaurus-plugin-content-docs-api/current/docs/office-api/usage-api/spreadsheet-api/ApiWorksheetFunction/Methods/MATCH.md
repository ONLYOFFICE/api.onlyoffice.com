# MATCH

返回范围中与指定值按指定顺序匹配的项的相对位置。

## 语法

```javascript
expression.MATCH(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要在区域中匹配的值。可以是数字、文本或逻辑值，或对其中之一的引用。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| (number \| string \| boolean)[] |  | 包含可能查找值的连续单元格区域或数组。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 数字 1、0 或 -1，表示要返回哪个值。 |

## 返回值

number

## 示例

此示例演示如何返回区域中按指定顺序与指定值匹配的项目的相对位置。

```javascript editor-xlsx
// How to get an index of an element that matches a condition.

// Use a function to find an item in a range.

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
worksheet.GetRange("D6").SetValue(func.MATCH("Ella Tompson", range, 0));
```
