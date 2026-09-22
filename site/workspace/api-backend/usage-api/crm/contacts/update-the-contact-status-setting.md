---
title: "Update the contact status setting"
sidebar_label: "Update the contact status setting"
sidebar_class_name: api-method put
description: "Updates the contact status setting with the parameter specified in the request."
---

**PUT** `/api/2.0/crm/contact/status/settings`

Updates the contact status setting with the parameter specified in the request.

## Request body

### changeContactStatusGroupAuto

**type:** `boolean[]`

Defines if the contact status setting is changed automatically or not

## Request example

```json
{
  "changeContactStatusGroupAuto": [
    true
  ]
}
```

## Returns

Updated contact status setting value (true, false or null). A request that is not authenticated returns `401`.

## Response example

```json
[
  true
]
```
