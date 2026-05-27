# GetRoleColor

返回指定角色的 RGB 颜色。

## 语法

```javascript
expression.GetRoleColor(name);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 角色名称。 |

## 返回值

null \| Object

## 示例

检索文档中分配给角色的颜色。

```javascript editor-forms
// How do I find out what color a role uses in a document?

// Check the color value for a specific role in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let color = roles.GetRoleColor("Customer");
let paragraph = doc.GetElement(0);
paragraph.AddText("Role color: rgb(" + color.r + ", " + color.g + ", " + color.b + ")");
```
