# MoveDown

在填写顺序中将角色向下移动。

## 语法

```javascript
expression.MoveDown(name);
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 角色名称。 |

## 返回值

boolean

## 示例

在文档中将角色移动到填写顺序中的更低位置。

```javascript editor-forms
// How do I change the order of roles to place one later in the sequence in a document?

// Reposition a role downward in the list and display the updated order in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

// Make the selected role the last one to fill
while (roles.MoveDown("Customer"));

let paragraph = doc.GetElement(0);
let orderIndex = 1;
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(orderIndex + ": ");
    paragraph.AddText(role);
    paragraph.AddLineBreak();
    orderIndex++;
});
```
