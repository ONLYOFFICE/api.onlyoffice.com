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

在电子表格中为受保护范围分配新标题。

```javascript editor-xlsx
// How do I rename a protected range in a spreadsheet?

// Update the label on a locked area so collaborators know what it protects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
