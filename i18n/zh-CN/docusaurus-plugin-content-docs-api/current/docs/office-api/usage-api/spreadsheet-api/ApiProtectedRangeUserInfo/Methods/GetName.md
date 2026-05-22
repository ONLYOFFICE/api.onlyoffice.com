# GetName

返回当前用户信息的名称属性。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

读取有权访问电子表格中受保护范围的用户的显示名称。

```javascript editor-xlsx
// How do I find out a user's name for a protected range in a spreadsheet?

// Identify a collaborator by name when inspecting who can edit a locked area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("Name: " + userName);
```
