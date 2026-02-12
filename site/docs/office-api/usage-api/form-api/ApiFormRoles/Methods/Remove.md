# Remove

Removes a role with the specified name.

## Syntax

```javascript
expression.Remove(name, delegateRole);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of role to be removed. |
| delegateRole | Optional | string |  | The name of the role to which all forms bound to this role will be delegated. |

## Returns

boolean

## Example

This example shows how to remove role.

```javascript editor-pdf
let doc = editor.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
roles.Remove("Anyone");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});
```
