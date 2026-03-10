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

此示例展示如何获取表示受保护区域的对象。

```javascript editor-xlsx
// How to get protected range.

// Get protected range and set its title.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
