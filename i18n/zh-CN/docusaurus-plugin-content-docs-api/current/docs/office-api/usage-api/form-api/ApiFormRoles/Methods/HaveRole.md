# HaveRole

检查是否存在具有指定名称的角色。

## 语法

```javascript
expression.HaveRole(name);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 角色名称。 |

## 返回值

boolean

## 示例

检查文档中是否存在角色。

```javascript editor-forms
// How do I verify whether a specific role is available in a document?

// Test for the presence of a role and display the result in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
["Customer", "CEO"].forEach(roleName => {
    if (roles.HaveRole(roleName)) {
        paragraph.AddText(roleName + " role is present in the form");
    } else {
        paragraph.AddText(roleName + " role is not present in the form");
    }
    paragraph.AddLineBreak();
});
```
