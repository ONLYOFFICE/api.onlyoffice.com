# RemoveDuplicates

从范围中删除具有重复值的行，与“删除重复项”命令的作用相同。表格内的范围代表整个表格，自动筛选范围或其中的一个单元格代表筛选范围。当所比较列的显示值相等（不区分大小写）时，这些行即为重复行；其中第一行会被保留。范围中的其他行会上移以填补已删除行的位置；范围外的单元格保持不变。

## 语法

```javascript
expression.RemoveDuplicates(aColumns, sHeader);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aColumns | 可选 | number \| number[] |  | 要比较的列的索引（从 1 开始），从范围的第一列（或该范围所代表的表格或自动筛选的第一列）开始计数。如果省略，则比较所有列。 |
| sHeader | 可选 | [XlYesNoGuess](../../Enumeration/XlYesNoGuess.md) | "xlNo" | 指定第一行是否为标题行（标题行将被保留且不参与比较），或传递 "xlGuess" 以像该命令一样自动检测。该值可以是任意大小写形式，也可以不带 "xl"（例如，"yes"）；其他值会引发错误。表格或自动筛选的标题行始终会被保留。 |

## 返回值

number \| null

## 示例

在电子表格中从范围内删除所选列值重复的行。

```javascript editor-xlsx
// How do I delete duplicate rows from a list and keep the first of each in a spreadsheet?

// Clean up an order list by removing the repeated customer and product pairs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C6").SetValue([
    ["Customer", "Product", "Qty"],
    ["Anna", "Tea", 2],
    ["Boris", "Coffee", 1],
    ["Anna", "Tea", 5],
    ["Clara", "Tea", 3],
    ["Boris", "Coffee", 4]
]);
let removed = worksheet.GetRange("A1:C6").RemoveDuplicates([1, 2], "xlYes");
worksheet.GetRange("E1").SetValue("Removed rows: " + removed);
```
