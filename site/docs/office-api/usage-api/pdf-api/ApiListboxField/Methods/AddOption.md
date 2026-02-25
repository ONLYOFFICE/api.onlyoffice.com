# AddOption

Adds new option to list options.

## Syntax

```javascript
expression.AddOption(option, nPos);
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| option | Required | [ListOption](../../Enumeration/ListOption.md) |  | list option to add |
| nPos | Optional | number | this.GetOptions().lenght | pos to add option |

## Returns

boolean