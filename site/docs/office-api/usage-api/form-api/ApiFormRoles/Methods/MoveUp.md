# MoveUp

Moves a role up in filling order.

## Syntax

```javascript
expression.MoveUp(name);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The role name. |

## Returns

boolean

## Example

Shift a role to a higher position in the fill order in a document.

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
