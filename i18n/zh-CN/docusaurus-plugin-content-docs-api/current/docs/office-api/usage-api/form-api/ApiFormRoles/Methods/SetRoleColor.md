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

此示例展示如何更改角色的颜色。

```javascript editor-forms
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
