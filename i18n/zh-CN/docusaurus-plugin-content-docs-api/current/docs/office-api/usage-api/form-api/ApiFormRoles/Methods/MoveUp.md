# MoveUp

在填写顺序中将角色向上移动。

## 语法

```javascript
expression.MoveUp(name);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 角色名称。 |

## 返回值

boolean

## 示例

在文档中将角色移动到填写顺序中的更高位置。

```javascript editor-forms
// How do I change the order of roles to place one earlier in the sequence in a document?

// Reposition a role upward in the list and display the updated order in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

// Make the selected role the first one to fill
while (roles.MoveUp("Customer"));

let paragraph = doc.GetElement(0);
let orderIndex = 1;
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(orderIndex + ": ");
    paragraph.AddText(role);
    paragraph.AddLineBreak();
    orderIndex++;
});
```
