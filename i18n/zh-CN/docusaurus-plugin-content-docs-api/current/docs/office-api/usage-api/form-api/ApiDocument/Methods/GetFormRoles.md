# GetFormRoles

返回表单角色集合。

## 语法

```javascript
expression.GetFormRoles();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFormRoles](../../ApiFormRoles/ApiFormRoles.md)

## 示例

检索文档中分配给表单字段的用户角色列表。

```javascript editor-forms
// How do I see what roles have access to form fields in a document?

// Access the role management system to view form permissions in a document.

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
