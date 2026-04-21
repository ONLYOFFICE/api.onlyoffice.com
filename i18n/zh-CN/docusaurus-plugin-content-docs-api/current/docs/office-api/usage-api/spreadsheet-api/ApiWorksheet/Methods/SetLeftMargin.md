# SetLeftMargin

设置工作表的左边距。

## 语法

```javascript
expression.SetLeftMargin(nPoints);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | 必需 | number |  | 以磅为单位的左边距大小。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中设置工作表的左边距。

```javascript editor-xlsx
// How to set margin of the left side in a spreadsheet.

// Resize the left margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetLeftMargin(20.8);
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
