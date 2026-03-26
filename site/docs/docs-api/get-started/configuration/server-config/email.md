---
sidebar_position: 8
---

# Email

These parameters define the settings of an external mail server, which is used to send [notifications](./notification). To connect to the mail server, use the [nodemailer](https://nodemailer.com/about/) library. Many config settings are passed directly to this library.

## email.smtpServerConfiguration

`Type: object`

Defines the [basic settings](https://nodemailer.com/smtp/) for connecting to the SMTP server.

### email.smtpServerConfiguration.host

`Type: string`   `Default: "localhost"`

Defines the host name or IP address of the SMTP server.

### email.smtpServerConfiguration.port

`Type: integer`   `Default: 587`

Defines the SMTP server port.

### email.smtpServerConfiguration.auth

`Type: object`

Defines the authentication data.

### email.smtpServerConfiguration.auth.user

`Type: string`   `Default: ""`

Defines the authentication username.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

### email.smtpServerConfiguration.auth.pass

`Type: string`   `Default: ""`

Defines the authentication password.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## email.connectionConfiguration

`Type: object`

Defines the [technical options](https://nodemailer.com/smtp/#connection-options) for connecting to the SMTP server.

### email.connectionConfiguration.disableFileAccess

`Type: boolean`   `Default: false`

Defines whether to allow using files as content. If this parameter is set to **true**, then JSON data from an untrusted source cannot be used as the email.
If an attachment or message node tries to fetch something from a file, the sending returns an error.

### email.connectionConfiguration.disableUrlAccess

`Type: boolean`   `Default: false`

Defines whether to allow using URLs as content.

## email.contactDefaults

`Type: object`

Defines the [email message settings](https://nodemailer.com/message/#common-fields).

### email.contactDefaults.from

`Type: string`   `Default: "from@example.com"`

Defines the email address of the sender. All email addresses can be plain *"sender@server.com"*
or with formatted name *&#x27;"Sender Name" sender@server.com&#x27;*.

### email.contactDefaults.to

`Type: string`   `Default: "to@example.com"`

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

