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

查找电子表格中受保护范围特定用户的详细信息。

```javascript editor-xlsx
// How do I find one person's access information for a locked range in a spreadsheet?

// Fetch a single user's name and permissions from a protected range by their ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("User name: " + userName);
```
