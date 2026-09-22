---
title: "Get portal capabilities"
sidebar_label: "Get portal capabilities"
sidebar_class_name: api-method get
description: "Returns the information about portal capabilities."
---

**GET** `/api/2.0/capabilities/`

Returns the information about portal capabilities.

## Returns

Portal capabilities

### LdapEnabled

**type:** `boolean`

**Example**: `false`

### OauthEnabled

**type:** `boolean`

**Example**: `"google,facebook,twitter,linkedin,mailru,vk,yandex,gosuslugi"`

### Providers

**type:** `string[]`

### SsoLabel

**type:** `string`

**Example**: `""`

### SsoUrl

**type:** `string`

**Example**: `""`

## Response example

```json
{
  "LdapEnabled": false,
  "OauthEnabled": "google,facebook,twitter,linkedin,mailru,vk,yandex,gosuslugi",
  "Providers": [
    "string"
  ],
  "SsoLabel": "",
  "SsoUrl": ""
}
```
