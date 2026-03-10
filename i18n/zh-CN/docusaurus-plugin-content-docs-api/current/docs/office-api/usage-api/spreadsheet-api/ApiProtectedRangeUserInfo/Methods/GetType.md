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

此示例获取受保护区域用户的类型。

```javascript editor-xlsx
// How to get a user info of a protected range and show its type.

// Get a user type of a protected range and add it to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userType = userInfo.GetType();
worksheet.GetRange("A3").SetValue("Type: " + userType);
```
