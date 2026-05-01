# SetAnyoneType

将「任何人」用户的类型设置到当前受保护区域。

## 语法

```javascript
expression.SetAnyoneType(protectedRangeUserType);
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| protectedRangeUserType | 必需 | [ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md) |  | 受保护区域的用户类型。 |

## 返回值

boolean

## 示例

在电子表格中更改受保护范围的所有人访问类型。

```javascript editor-xlsx
// How to set access type to the "can view" one in a spreadsheet.

// Make a protected range viewable for anyone in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");
```
