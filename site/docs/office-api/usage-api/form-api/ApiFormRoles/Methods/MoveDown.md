# MoveDown

Moves a role down in filling order.

## Syntax

```javascript
expression.MoveDown(name);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The role name. |

## Returns

boolean

## Example

This example shows how to move down the specified role.

```javascript editor-pdf playground
let doc = editor.GetDocument();
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
