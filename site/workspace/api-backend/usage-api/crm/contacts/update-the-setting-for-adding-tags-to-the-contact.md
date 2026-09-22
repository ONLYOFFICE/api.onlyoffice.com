---
title: "Update the setting for adding tags to the contact"
sidebar_label: "Update the setting for adding tags to the contact"
sidebar_class_name: api-method put
description: "Updates the setting for adding tags to the contact with the parameter specified in the request."
---

**PUT** `/api/2.0/crm/contact/tag/settings`

Updates the setting for adding tags to the contact with the parameter specified in the request.

## Request body

### addTagToContactGroupAuto

**type:** `boolean[]`

Defines if a tag is added to the contact automatically or not

## Request example

```json
{
  "addTagToContactGroupAuto": [
    true
  ]
}
```

## Returns

Updated setting for adding tags to the contact (true, false or null). A request that is not authenticated returns `401`.

## Response example

```json
[
  true
]
```
