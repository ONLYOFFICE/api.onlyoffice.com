# SetTitle

为当前受保护区域设置标题。

## 语法

```javascript
expression.SetTitle(sTitle);
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 将为当前受保护区域显示的标题。 |

## 返回值

boolean

## 示例

此示例更改用户受保护区域的标题。

```javascript editor-xlsx
// How to set a title for a protected range.

// Rename a title of a protected range.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
