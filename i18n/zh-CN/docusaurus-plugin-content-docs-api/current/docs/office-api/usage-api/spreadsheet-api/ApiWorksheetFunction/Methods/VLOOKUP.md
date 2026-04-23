# VLOOKUP

在表格的最左列中查找值，然后从指定列返回同一行中的值。默认情况下，表格必须按升序排序。

## 语法

```javascript
expression.VLOOKUP(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要在表的第一列中查找的值。可以是值、引用或文本字符串。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 从中检索数据的文本、数字或逻辑值表。可以是单元格区域。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 应从中返回匹配值的数据表中的列号。表中值的第一列是第 1 列。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定是在第一列中查找最接近的匹配项（按升序排序）（**true** 或省略）还是查找精确匹配项（**false**）的逻辑值。 |

## 返回值

number \| string

## 示例

此示例演示如何在表的最左列中查找值，然后从指定列返回同一行中的值。默认情况下，表必须按升序排序。

```javascript editor-xlsx
// How to look for a value in the leftmost column of a table.

// Use a find a value in the leftmost column of a table and display it in the row.

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

let range = worksheet.GetRange("A1:C5");
worksheet.GetRange("D6").SetValue(func.VLOOKUP(3, range, 2, true));
```
