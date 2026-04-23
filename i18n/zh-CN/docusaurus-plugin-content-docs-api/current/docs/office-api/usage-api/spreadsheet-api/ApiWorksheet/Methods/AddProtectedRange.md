# AddProtectedRange

从当前工作表的选定数据区域创建指定类型的受保护区域。

## 语法

```javascript
expression.AddProtectedRange(sTitle, sDataRange);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 将为当前受保护区域显示的标题。 |
| sDataRange | 必需 | string |  | 将用于获取受保护区域数据的选定单元格区域。 |

## 返回值

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) \| null

## 示例

此示例添加新的受保护区域。

```javascript editor-xlsx
// How to add the protected ApiRange object.

// Insert a protected range to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
```
