---
title: "Set the search settings"
sidebar_label: "Set the search settings"
sidebar_class_name: api-method post
description: "Sets the search settings specified in the request."
---

**POST** `/api/2.0/portal/search`

Sets the search settings specified in the request.

## Request body

### items

**type:** `SearchSettingsItem[]`

Search settings

## Request example

```json
{
  "items": [
    {
      "ID": "string",
      "Enabled": true
    }
  ]
}
```
