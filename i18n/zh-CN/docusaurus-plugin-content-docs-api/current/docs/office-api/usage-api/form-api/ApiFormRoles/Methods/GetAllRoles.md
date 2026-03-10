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

此示例展示如何按填写顺序获取所有角色的列表。

```javascript editor-forms
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
