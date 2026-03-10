# Add

添加新的表单角色。

## 语法

```javascript
expression.Add(name, props);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要添加的角色名称。 |
| props | 必需 | [RoleProperties](../../Enumeration/RoleProperties.md) |  | 角色属性。 |

## 返回值

boolean

## 示例

此示例展示如何添加新角色。

```javascript editor-forms
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});

```
