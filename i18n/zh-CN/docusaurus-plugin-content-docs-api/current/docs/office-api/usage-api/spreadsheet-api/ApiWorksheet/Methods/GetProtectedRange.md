# GetProtectedRange

按标题返回受保护区域对象。

## 语法

```javascript
expression.GetProtectedRange(sTitle);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 将返回的受保护区域的标题。 |

## 返回值

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) \| null

## 示例

按名称访问受保护的范围并在电子表格中更新其标题。

```javascript editor-xlsx
// How do I retrieve a protected range from a worksheet in a spreadsheet?

// Locate a locked cell range and rename it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
