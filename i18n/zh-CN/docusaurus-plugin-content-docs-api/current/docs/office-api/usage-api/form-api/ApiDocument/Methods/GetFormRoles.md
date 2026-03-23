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

此示例展示如何获取角色管理器。

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
