# SetReferenceStyle

设置单元格引用样式。

## 语法

```javascript
expression.SetReferenceStyle(sReferenceStyle);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReferenceStyle | 必需 | [ReferenceStyle](../../Enumeration/ReferenceStyle.md) |  | 单元格引用样式。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中切换字母列和行列表示法之间的单元格寻址样式。

```javascript editor-xlsx
// How do I change the way cell addresses are displayed across the entire workbook in a spreadsheet?

// Choose a preferred coordinate style for all cell references and formulas in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
