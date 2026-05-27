# SetRightMargin

设置工作表的右边距。

## 语法

```javascript
expression.SetRightMargin(nPoints);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | 必需 | number |  | 以磅为单位的右边距大小。 |

## 返回值

boolean

## 示例

设置电子表格中打印页面的右边距宽度。

```javascript editor-xlsx
// How do I control the empty space along the right edge when printing in a spreadsheet?

// Determine how much blank space appears between your data and the right page boundary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRightMargin(20.8);
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
