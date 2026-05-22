# SetTopMargin

设置工作表的顶边距。

## 语法

```javascript
expression.SetTopMargin(nPoints);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | 必需 | number |  | 以磅为单位的顶边距大小。 |

## 返回值

boolean

## 示例

设置电子表格中打印页面的上边距宽度。

```javascript editor-xlsx
// How do I control the empty space along the top edge when printing in a spreadsheet?

// Determine how much blank space appears between the top page boundary and your data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
