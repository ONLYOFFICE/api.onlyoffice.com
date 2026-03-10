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

此方法不返回任何数据。

## 示例

此示例设置工作表的顶边距。

```javascript editor-xlsx
// How to set margin of the top side.

// Resize the top margin of the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");

```
