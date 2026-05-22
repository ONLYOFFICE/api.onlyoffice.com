# GetId

返回当前用户信息的 ID 属性。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

读取有权访问电子表格中受保护范围的用户的唯一标识符。

```javascript editor-xlsx
// How do I find a user's ID for a protected range in a spreadsheet?

// Confirm which user account is linked to a locked area by checking its ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userId = userInfo.GetId();
worksheet.GetRange("A3").SetValue("Id: " + userId);
```
