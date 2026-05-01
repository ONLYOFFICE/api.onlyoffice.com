# SetBottomMargin

设置工作表的底边距。

## 语法

```javascript
expression.SetBottomMargin(nPoints);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | 必需 | number |  | 以磅为单位的底边距大小。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中设置工作表的下边距。

```javascript editor-xlsx
// How to set margin of the bottom in a spreadsheet.

// Resize the bottom margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetBottomMargin(25.1);
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
