---
sidebar_position: 8
---

# Email

These parameters define the settings of an external mail server, which is used to send [notifications](./notification.md). To connect to the mail server, use the [nodemailer](https://nodemailer.com/about/) library. Many config settings are passed directly to this library.

## email.smtpServerConfiguration

**type:** `object`

Defines the [basic settings](https://nodemailer.com/smtp/) for connecting to the SMTP server.

### email.smtpServerConfiguration.host

**type:** `string` | **default:** `"localhost"`

Defines the host name or IP address of the SMTP server.

### email.smtpServerConfiguration.port

**type:** `integer` | **default:** `587`

Defines the SMTP server port.

### email.smtpServerConfiguration.auth

**type:** `object`

Defines the authentication data.

### email.smtpServerConfiguration.auth.user

**type:** `string` | **default:** `""`

Defines the authentication username.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

### email.smtpServerConfiguration.auth.pass

**type:** `string` | **default:** `""`

Defines the authentication password.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## email.connectionConfiguration

**type:** `object`

Defines the [technical options](https://nodemailer.com/smtp/#connection-options) for connecting to the SMTP server.

### email.connectionConfiguration.disableFileAccess

**type:** `boolean` | **default:** `false`

Defines whether to allow using files as content. If this parameter is set to **true**, then JSON data from an untrusted source cannot be used as the email.
If an attachment or message node tries to fetch something from a file, the sending returns an error.

### email.connectionConfiguration.disableUrlAccess

**type:** `boolean` | **default:** `false`

Defines whether to allow using URLs as content.

## email.contactDefaults

**type:** `object`

Defines the [email message settings](https://nodemailer.com/message/#common-fields).

### email.contactDefaults.from

**type:** `string` | **default:** `"from@example.com"`

Defines the email address of the sender. All email addresses can be plain *"sender@server.com"*
or with formatted name *&#x27;"Sender Name" sender@server.com&#x27;*.

### email.contactDefaults.to

**type:** `string` | **default:** `"to@example.com"`

Defines the comma separated list or an array of recipients email addresses that will appear on the *To:* field.

## Example

```json
{
  "email": {
    "smtpServerConfiguration": {
      "host": "localhost",
      "port": 587,
      "auth": {
        "user": "",
        "pass": ""
      }
    },
    "connectionConfiguration": {
      "disableFileAccess": false,
      "disableUrlAccess": false
    },
    "contactDefaults": {
      "from": "from@example.com",
      "to": "to@example.com"
    }
  }
}
```

