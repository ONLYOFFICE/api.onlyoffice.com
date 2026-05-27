---
sidebar_position: 2
---

# Admin Panel

These parameters define the Admin Panel properties. For more details on using Admin Panel, you can refer to [this article](https://helpcenter.onlyoffice.com/docs/installation/docs-admin-panel.aspx).

## adminPanel.passwordValidation

**type:** `object`

Password validation requirements using custom format types

### adminPanel.passwordValidation.minLength

**type:** `string`

be at least 8 characters long

### adminPanel.passwordValidation.hasDigit

**type:** `string`

contain at least one digit

### adminPanel.passwordValidation.hasUppercase

**type:** `string`

contain at least one uppercase letter

### adminPanel.passwordValidation.hasSpecialChar

**type:** `string`

contain at least one special character

### adminPanel.passwordValidation.allowedCharactersOnly

**type:** `string`

contain only uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters (e.g., ! @ # $ % & *)

## adminPanel.passwordHash

**type:** `string` | **default:** `""`

Defines a password hash used to protect a password with the PBKDF2-SHA256 algorithm.

:::note
The value of this parameter is stored in the *runtime.json* file. E.g., for the Linux version, this file can be found here: `/var/www/onlyoffice/Data/runtime.json`
:::

## adminPanel.port

**type:** `integer` | **default:** `9000`

Defines the port on which the Admin Panel service is running.

## Example

```json
{
  "adminPanel": {
    "port": 9000
  }
}
```

