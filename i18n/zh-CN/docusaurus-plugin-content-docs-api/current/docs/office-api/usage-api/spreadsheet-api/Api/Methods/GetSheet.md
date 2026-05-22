# GetSheet

返回表示工作表的对象。

## 语法

```javascript
expression.GetSheet(nameOrIndex);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nameOrIndex | 必需 | string \| number |  | 工作表名称或工作表索引。 |

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) \| null

## 示例

按名称打开特定工作表并在电子表格中向其一个单元格写入内容。

```javascript editor-xlsx
// How do I navigate to a particular sheet using its tab name in a spreadsheet?

// Target a named sheet directly and place a value into it without switching tabs in a spreadsheet.

let worksheet = Api.GetSheet("Sheet1");
worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
```
