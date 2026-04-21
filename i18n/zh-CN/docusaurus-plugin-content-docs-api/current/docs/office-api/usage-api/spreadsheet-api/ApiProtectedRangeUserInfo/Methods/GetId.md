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

获取电子表格中受保护范围用户的 ID。

```javascript editor-xlsx
// How to get an user info of a protected range and show its Id in a spreadsheet.

// Get an user id of a protected range and add it to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userId = userInfo.GetId();
worksheet.GetRange("A3").SetValue("Id: " + userId);
```
