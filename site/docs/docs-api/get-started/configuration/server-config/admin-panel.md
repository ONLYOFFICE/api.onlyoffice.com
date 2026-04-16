---
sidebar_position: 2
---

# Admin Panel

These parameters define the Admin Panel properties. For more details on using Admin Panel, you can refer to [this article](https://helpcenter.onlyoffice.com/docs/installation/docs-admin-panel.aspx).

## adminPanel.passwordValidation

`Type: object`

Password validation requirements using custom format types

### adminPanel.passwordValidation.minLength

`Type: string`

be at least 8 characters long

### adminPanel.passwordValidation.hasDigit

`Type: string`

contain at least one digit

### adminPanel.passwordValidation.hasUppercase

`Type: string`

contain at least one uppercase letter

### adminPanel.passwordValidation.hasSpecialChar

`Type: string`

contain at least one special character

### adminPanel.passwordValidation.allowedCharactersOnly

`Type: string`

contain only uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters (e.g., ! @ # $ % & *)

## adminPanel.passwordHash

`Type: string`   `Default: ""`

Defines a password hash used to protect a password with the PBKDF2-SHA256 algorithm.

:::note
The value of this parameter is stored in the *runtime.json* file. E.g., for the Linux version, this file can be found here: `/var/www/onlyoffice/Data/runtime.json`
:::

## adminPanel.port

`Type: integer`   `Default: 9000`

Defines the port on which the Admin Panel service is running.

## Example

```json
{
  "adminPanel": {
    "port": 9000
  }
}
```

