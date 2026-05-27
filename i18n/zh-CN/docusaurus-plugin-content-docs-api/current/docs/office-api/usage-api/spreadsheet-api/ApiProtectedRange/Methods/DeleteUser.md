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

撤销用户对电子表格中受保护范围的访问权限。

```javascript editor-xlsx
// How do I remove a person's permission to edit a locked range in a spreadsheet?

// Take away an existing user's rights to a protected range by removing them from the access list in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
protectedRange.DeleteUser("userId");
```
