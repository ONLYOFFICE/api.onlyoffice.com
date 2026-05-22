# GetCount

返回表单角色的数量。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算文档中为表单设置的用户角色数量。

```javascript editor-forms
// How do I find out how many roles exist in a document?

// Check the total number of roles that have been created in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});
let numRoles = roles.GetCount();
paragraph.AddText("Number of roles: " + numRoles);
```
