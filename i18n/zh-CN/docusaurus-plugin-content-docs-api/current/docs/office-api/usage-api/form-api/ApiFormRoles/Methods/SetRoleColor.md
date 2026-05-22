# SetRoleColor

设置指定角色的颜色。

## 语法

```javascript
expression.SetRoleColor(name, color);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 角色名称。 |
| color | 必需 | string |  | 角色颜色。 |

## 返回值

boolean

## 示例

为文档中的角色分配颜色。

```javascript editor-forms
// How do I apply a specific color to identify a role in a document?

// Change the color value for a role to customize its appearance in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.SetRoleColor("Customer", "#C6E0B3");
doc.InsertTextForm({
	key: "Name",
	role: "Customer",
	placeholder: "Enter your name"
});
```
