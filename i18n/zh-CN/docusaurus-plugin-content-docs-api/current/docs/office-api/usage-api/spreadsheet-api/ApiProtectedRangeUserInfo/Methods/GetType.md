# GetType

返回当前用户信息的类型属性。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md)

## 示例

读取在电子表格中受保护范围上分配给用户的权限类型。

```javascript editor-xlsx
// How do I check what access level a user has on a protected range in a spreadsheet?

// Verify whether a collaborator can view or edit a locked area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userType = userInfo.GetType();
worksheet.GetRange("A3").SetValue("Type: " + userType);
```
