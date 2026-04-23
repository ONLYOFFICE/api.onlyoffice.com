# GetRows

返回表示指定范围中的行的 Range 对象。如果指定的行在 Range 对象之外，将返回一个新的 Range，表示指定行中原始范围列之间的单元格。

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

此示例演示如何获取表示指定范围中的行的 Range 对象。

```javascript editor-xlsx
// How to get a cell rows of a range.

// Get a range and change each cell's row value by getting all row objects.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("1:3");
for (let i=1; i <= 3; i++) {
	let rows = range.GetRows(i);    
	rows.SetValue(i);
}
```
