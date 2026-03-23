# Remove

移除具有指定名称的角色。

## 语法

```javascript
expression.Remove(name, delegateRole);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要移除的角色名称。 |
| delegateRole | 可选 | string |  | 所有绑定到此角色的表单将被委托给的角色名称。 |

## 返回值

boolean

## 示例

此示例展示如何移除角色。

```javascript editor-forms
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
roles.Remove("Anyone");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});
```
