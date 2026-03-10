# GetUser

返回表示当前受保护区域中用户的对象。

## 语法

```javascript
expression.GetUser(sId);
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | 必需 | string |  | 用户 ID。 |

## 返回值

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) \| null

## 示例

此示例获取受保护区域的用户。

```javascript editor-xlsx
// How to get a user information of the protected range.

// Get an active sheet, add protected range to it, add user with rights and get user info. 

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("User name: " + userName);
```
