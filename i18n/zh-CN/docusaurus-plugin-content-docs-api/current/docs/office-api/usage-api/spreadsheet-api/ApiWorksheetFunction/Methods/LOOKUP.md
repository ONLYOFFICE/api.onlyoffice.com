# LOOKUP

从单行或单列范围中查找值。为向后兼容性而提供。

## 语法

```javascript
expression.LOOKUP(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 在第一个向量中搜索的值。可以是数字、文本、逻辑值，或值的名称或引用。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 仅包含一行或一列文本、数字或逻辑值的区域，按升序排列。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 仅包含一行或一列的区域。必须与第一个向量大小相同。 |

## 返回值

number \| string \| boolean

## 示例

此示例演示如何从单行或单列区域查找值。提供此功能是为了向后兼容。

```javascript editor-xlsx
// How to look up a value from a one-row or one-column range.

// Use a function to find a value from a row or a column range.

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

worksheet.GetRange("E1").SetValue("Name");
worksheet.GetRange("E2").SetValue("Ella Tompson");
worksheet.GetRange("F1").SetValue("Phone number");
let range1 = worksheet.GetRange("B2:B5");
let range2 = worksheet.GetRange("C2:C5");
worksheet.GetRange("F2").SetValue(func.LOOKUP("Ella Tompson", range1, range2));
```
