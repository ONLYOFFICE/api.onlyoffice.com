# SetAnyoneType

将“任何人”用户的类型设置到当前受保护区域。

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

设置适用于电子表格中受保护范围所有用户的默认访问级别。

```javascript editor-xlsx
// How do I control what anyone without explicit permission can do with a locked range in a spreadsheet?

// Restrict or open a protected range to everyone by choosing a blanket access level in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");
```
