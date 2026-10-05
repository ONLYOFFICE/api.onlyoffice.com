---
title: "Get available currencies"
sidebar_label: "Get available currencies"
sidebar_class_name: api-method get
description: "Returns a list of all the currencies currently available on the portal."
---

**GET** `/api/2.0/crm/settings/currency`

Returns a list of all the currencies currently available on the portal.

## Returns

List of available currencies. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Title": "Chinese Yuan",
    "Symbol": "¥",
    "Abbreviation": "CNY",
    "CultureName": "CN",
    "IsConvertable": true,
    "IsBasic": false
  }
]
```
