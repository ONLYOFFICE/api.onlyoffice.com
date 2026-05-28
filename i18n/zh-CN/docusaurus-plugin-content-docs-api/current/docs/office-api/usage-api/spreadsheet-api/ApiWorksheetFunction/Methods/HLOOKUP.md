# HLOOKUP

在表格或值数组的首行中查找值，并从指定行返回同一列中的值。

## 语法

```javascript
expression.HLOOKUP(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要在表的第一行中查找的值，可以是值、引用或文本字符串。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 用于查找数据的文本、数字或逻辑值表。数据按升序排列。此参数可以是单元格区域或区域名称。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 应从中返回匹配值的数据表中的行号。表中值的第一行是第 1 行。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定是在首行（按升序排列）中查找最接近的匹配（**true** 或省略）还是查找精确匹配（**false**）的逻辑值。 |

## 返回值

number \| string

## 示例

在电子表格中搜索表格顶行中的值并从同列中指定行检索值。

```javascript editor-xlsx
// How do I find values in a horizontal table using a lookup formula in a spreadsheet?

// Retrieve a specific cell value from a table by searching horizontally in a spreadsheet.

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

worksheet.GetRange("E1").SetValue("ID");
worksheet.GetRange("E2").SetValue(3);
worksheet.GetRange("F1").SetValue("Phone number");
let range = worksheet.GetRange("A1:C5");
worksheet.GetRange("F2").SetValue(func.HLOOKUP("Phone number", range, 3+1));
```
