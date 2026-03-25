# DeleteUser

从当前受保护区域删除用户。

## 语法

```javascript
expression.DeleteUser(sId);
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | 必需 | string |  | 用户 ID。 |

## 返回值

boolean

## 示例

此示例删除用户受保护区域。

```javascript editor-xlsx
// How to close an access for the protected range to user specifing user id, name and access type.

// Get an active sheet, add protected range to it, add users with rights then delete one of them. 

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
protectedRange.DeleteUser("userId");
```
