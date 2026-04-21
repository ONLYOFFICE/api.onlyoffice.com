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

获取表单文档中的角色管理器。

```javascript editor-forms
// How can I get the form roles using a document in a form document?

// Get the form roles for a document in a form document.

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
