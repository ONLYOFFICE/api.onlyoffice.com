---
title: "Saves the Projects Firebase device token"
sidebar_label: "Saves the Projects Firebase device token"
sidebar_class_name: api-method post
description: "Saves the Firebase device token specified in the request for the Projects application."
---

**POST** `/api/2.0/settings/push/projregisterdevice`

Saves the Firebase device token specified in the request for the Projects application.

## Request body

### firebaseDeviceToken

**type:** `string`

Firebase device token

**Example**: `"string"`

## Request example

```json
{
  "firebaseDeviceToken": "string"
}
```

## Returns

Firebase user. A request that is not authenticated returns `401`.
