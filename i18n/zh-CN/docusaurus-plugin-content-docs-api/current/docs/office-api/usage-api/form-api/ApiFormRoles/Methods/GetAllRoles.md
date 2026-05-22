# GetAllRoles

列出所有可用角色。

## 语法

```javascript
expression.GetAllRoles();
```

`expression` - 表示 [ApiFormRoles](../ApiFormRoles.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

查看文档中为表单定义的所有用户角色。

```javascript editor-forms
// How do I see every role that can access form fields in a document?

// List all the role names available for controlling form permissions in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
let orderIndex = 1;
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(orderIndex + ": ");
    paragraph.AddText(role);
    paragraph.AddLineBreak();
    orderIndex++;
});
```
