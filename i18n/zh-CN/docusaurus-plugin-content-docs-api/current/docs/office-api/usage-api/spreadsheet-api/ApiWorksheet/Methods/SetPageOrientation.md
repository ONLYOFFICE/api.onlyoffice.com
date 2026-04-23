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

此方法不返回任何数据。

## 示例

此示例设置页面方向。

```javascript editor-xlsx
// How to change a page orientation.

// Set a page orientation and display it in the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPageOrientation("xlPortrait");
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
