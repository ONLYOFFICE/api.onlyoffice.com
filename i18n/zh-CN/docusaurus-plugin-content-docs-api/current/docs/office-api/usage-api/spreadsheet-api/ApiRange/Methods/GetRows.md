# GetRows

返回表示指定范围中各行的 Range 对象。

如果指定的行位于 Range 对象之外，将返回一个新的 Range，表示原始范围各列之间位于指定行中的单元格。

## 语法

```javascript
expression.GetRows(nRow);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | 必需 | number |  | 行号（从 1 开始计数，值为 0 时返回错误）。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

访问范围内的各个行以在电子表格中更新其值。

```javascript editor-xlsx
// How do I iterate over each row in a range and set its value in a spreadsheet?

// Fill a multi-row range by writing a different value into each row one at a time in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("1:3");
for (let i=1; i <= 3; i++) {
	let rows = range.GetRows(i);    
	rows.SetValue(i);
}
```
