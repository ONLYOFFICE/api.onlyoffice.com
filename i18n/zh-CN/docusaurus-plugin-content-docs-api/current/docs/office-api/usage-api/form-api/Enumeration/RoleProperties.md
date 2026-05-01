# RoleProperties

角色属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| color | string | 角色颜色。 |

## 示例

创建属性并添加具有指定属性的新角色。

```javascript editor-forms
// Set the role color property for a form role.

// Add a "customer" role with the specified color.

let rolePr = {"color": "#ffefbf"};
formRoles.Add("customer", rolePr);
```
