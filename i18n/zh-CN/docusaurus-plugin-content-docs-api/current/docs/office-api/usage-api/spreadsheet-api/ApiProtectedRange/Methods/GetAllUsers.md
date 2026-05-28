# GetAllUsers

返回当前受保护区域的所有用户。

## 语法

```javascript
expression.GetAllUsers();
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md)[] \| null

## 示例

列出有权访问电子表格中受保护范围的每个用户。

```javascript editor-xlsx
// How do I see all the people allowed to work with a locked range in a spreadsheet?

// Retrieve the full access list for a protected range and read a user's name from it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
worksheet.AddProtectedRange("Protected range", "$A$1:$C$1");
let protectedRange = worksheet.GetProtectedRange("Protected range");
protectedRange.AddUser("uid-1", "John Smith", "CanEdit");
protectedRange.AddUser("uid-2", "Mark Potato", "CanView");
let users = protectedRange.GetAllUsers();
worksheet.GetRange("A3").SetValue(users[0].GetName());
```
