# SetPageOrientation

设置页面方向。

## 语法

```javascript
expression.SetPageOrientation(sPageOrientation);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPageOrientation | 必需 | [PageOrientation](../../Enumeration/PageOrientation.md) |  | 页面方向类型。 |

## 返回值

boolean

## 示例

在电子表格中切换纵向和横向页面布局。

```javascript editor-xlsx
// How do I rotate the page orientation from vertical to horizontal in a spreadsheet?

// Choose whether your printed pages display in tall or wide format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPageOrientation("xlPortrait");
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
