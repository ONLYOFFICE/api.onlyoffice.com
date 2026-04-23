# AddUser

将用户设置到当前受保护区域。

## 语法

```javascript
expression.AddUser(sId, sName, protectedRangeUserType);
```

`expression` - 表示 [ApiProtectedRange](../ApiProtectedRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | 必需 | string |  | 用户 ID。 |
| sName | 必需 | string |  | 用户名。 |
| protectedRangeUserType | 必需 | [ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md) |  | 受保护区域的用户类型。 |

## 返回值

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) \| null

## 示例

此示例为受保护区域添加用户。

```javascript editor-xlsx
// How to open an access for the protected range to user specifing user id, name and access type.

// Get an active sheet, add protected range to it and add user with rights.  

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
```
