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

获取表单文档中的角色数量。

```javascript editor-forms
// How do I get the count in a form document?

// Get the count using a form roles object.

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
