---
sidebar_position: 9
---

# Notification

These parameters define the notification settings.

Notifications with the following event types and content are sent:

- 70% of the [connection quota](./license.md#licensewarning_limit_percents) (quota of unique users) is exceeded.

  License connection limit warning: *"Attention! You have reached 70% of the connections limit set by your license."*

- The connection quota (quota of unique users) is reached.

  License connection limit warning: *"Attention! You have reached 100% of the connection limit set by your license."*

- 30 days before the [license expires](./license.md#licensewarning_license_expiration).

  License expiration warning: *"Attention! Your license is about to expire on September 8, 2024. Upon reaching this date, you will no longer be entitled to receive personal technical support and install new Docs versions released after this date."*

- The license has expired.

  License connection limit warning: *"Attention! Your license expired on September 8, 2024. You are no longer entitled to receive personal technical support and install new Docs versions released after this date. Please contact sales@onlyoffice.com to discuss license renewal."*

## notification.rules

**type:** `object`

Defines the rules of notification settings for four notification types:
*licenseExpirationWarning*, *licenseExpirationError*, *licenseLimitEdit*, *licenseLimitLiveViewer*.

### notification.rules.licenseExpirationWarning

**type:** `object`

Defines the rules for the *licenseExpirationWarning* notification settings.

### notification.rules.licenseExpirationWarning.enable

**type:** `boolean` | **default:** `false`

Defines whether the *licenseExpirationWarning* notification is enabled. Each notification type must be enabled separately.

### notification.rules.licenseExpirationWarning.transportType

**type:** `array of strings` | **default:** `["email"]`

Defines the way of sending the *licenseExpirationWarning* notification. Currently, only the *email* type is available.

### notification.rules.licenseExpirationWarning.template

**type:** `object`

Defines a template of the *licenseExpirationWarning* notification title and body.

### notification.rules.licenseExpirationWarning.template.title

**type:** `string` | **default:** `"%s Docs license expiration warning"`

Defines a template of the *licenseExpirationWarning* notification title.

### notification.rules.licenseExpirationWarning.template.body

**type:** `string`

Defines a template of the *licenseExpirationWarning* notification body.

### notification.rules.licenseExpirationWarning.policies

**type:** `object`

Defines the *licenseExpirationWarning* notification sending policy.

### notification.rules.licenseExpirationWarning.policies.repeatInterval

**type:** `string` | **default:** `"1d"`

Defines the time when the *licenseExpirationWarning* notification will be sent (not more often than the specified period).

### notification.rules.licenseExpirationError

**type:** `object`

Defines the rules for the *licenseExpirationError* notification settings.

### notification.rules.licenseExpirationError.enable

**type:** `boolean` | **default:** `false`

Defines whether the *licenseExpirationError* notification is enabled. Each notification type must be enabled separately.

### notification.rules.licenseExpirationError.transportType

**type:** `array of strings` | **default:** `["email"]`

Defines the way of sending the *licenseExpirationError* notification. Currently, only the *email* type is available.

### notification.rules.licenseExpirationError.template

**type:** `object`

Defines a template of the *licenseExpirationError* notification title and body.

### notification.rules.licenseExpirationError.template.title

**type:** `string` | **default:** `"%s Docs license expiration warning"`

Defines a template of the *licenseExpirationError* notification title.

### notification.rules.licenseExpirationError.template.body

**type:** `string`

Defines a template of the *licenseExpirationError* notification body.

### notification.rules.licenseExpirationError.policies

**type:** `object`

Defines the *licenseExpirationError* notification sending policy.

### notification.rules.licenseExpirationError.policies.repeatInterval

**type:** `string` | **default:** `"1d"`

Defines the time when the *licenseExpirationError* notification will be sent (not more often than the specified period).

### notification.rules.licenseLimitEdit

**type:** `object`

Defines the rules for the *licenseLimitEdit* notification settings.

### notification.rules.licenseLimitEdit.enable

**type:** `boolean` | **default:** `false`

Defines whether the *licenseLimitEdit* notification is enabled. Each notification type must be enabled separately.

### notification.rules.licenseLimitEdit.transportType

**type:** `array of strings` | **default:** `["email"]`

Defines the way of sending the *licenseLimitEdit* notification. Currently, only the *email* type is available.

### notification.rules.licenseLimitEdit.template

**type:** `object`

Defines a template of the *licenseLimitEdit* notification title and body.

### notification.rules.licenseLimitEdit.template.title

**type:** `string` | **default:** `"%s Docs license %s limit warning"`

Defines a template of the *licenseLimitEdit* notification title.

### notification.rules.licenseLimitEdit.template.body

**type:** `string`

Defines a template of the *licenseLimitEdit* notification body.

### notification.rules.licenseLimitEdit.policies

**type:** `object`

Defines the *licenseLimitEdit* notification sending policy.

### notification.rules.licenseLimitEdit.policies.repeatInterval

**type:** `string` | **default:** `"1h"`

Defines the time when the *licenseLimitEdit* notification will be sent (not more often than the specified period).

### notification.rules.licenseLimitLiveViewer

**type:** `object`

Defines the rules for the *licenseLimitLiveViewer* notification settings.

### notification.rules.licenseLimitLiveViewer.enable

**type:** `boolean` | **default:** `false`

Defines whether the *licenseLimitLiveViewer* notification is enabled. Each notification type must be enabled separately.

### notification.rules.licenseLimitLiveViewer.transportType

**type:** `array of strings` | **default:** `["email"]`

Defines the way of sending the *licenseLimitLiveViewer* notification. Currently, only the *email* type is available.

### notification.rules.licenseLimitLiveViewer.template

**type:** `object`

Defines a template of the *licenseLimitLiveViewer* notification title and body.

### notification.rules.licenseLimitLiveViewer.template.title

**type:** `string` | **default:** `"%s Docs license %s limit warning"`

Defines a template of the *licenseLimitLiveViewer* notification title.

### notification.rules.licenseLimitLiveViewer.template.body

**type:** `string`

Defines a template of the *licenseLimitLiveViewer* notification body.

### notification.rules.licenseLimitLiveViewer.policies

**type:** `object`

Defines the *licenseLimitLiveViewer* notification sending policy.

### notification.rules.licenseLimitLiveViewer.policies.repeatInterval

**type:** `string` | **default:** `"1h"`

Defines the time when the *licenseLimitLiveViewer* notification will be sent (not more often than the specified period).

## Example

```json
{
  "notification": {
    "rules": {
      "licenseExpirationWarning": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license expiration warning",
          "body": "Attention! Your license is about to expire on %s.\nUpon reaching this date, you will no longer be entitled to receive personal technical support and install new Docs versions released after this date."
        },
        "policies": {
          "repeatInterval": "1d"
        }
      },
      "licenseExpirationError": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license expiration warning",
          "body": "Attention! Your license expired on %s.\nYou are no longer entitled to receive personal technical support and install new Docs versions released after this date.\nPlease contact sales@onlyoffice.com to discuss license renewal."
        },
        "policies": {
          "repeatInterval": "1d"
        }
      },
      "licenseLimitEdit": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license %s limit warning",
          "body": "Attention! You have reached %s%% of the %s limit set by your license."
        },
        "policies": {
          "repeatInterval": "1h"
        }
      },
      "licenseLimitLiveViewer": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license %s limit warning",
          "body": "Attention! You have reached %s%% of the live viewer %s limit set by your license."
        },
        "policies": {
          "repeatInterval": "1h"
        }
      }
    }
  }
}
```

