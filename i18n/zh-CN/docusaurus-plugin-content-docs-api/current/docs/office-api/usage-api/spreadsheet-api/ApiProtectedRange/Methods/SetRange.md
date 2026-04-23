# SetRange

将区域设置到当前受保护区域。

## 语法

```javascript
expression.SetRange(sRange);
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 将为当前受保护区域设置的单元格区域。 |

## 返回值

boolean

## 示例

此示例更改受保护区域的区域。

```javascript editor-xlsx
// How to set a protected range.

// Update a range of a protected range.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetRange("Sheet1!$A$2:$B$2");
```
