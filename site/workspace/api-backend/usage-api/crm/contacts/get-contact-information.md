---
title: "Get contact information"
sidebar_label: "Get contact information"
sidebar_class_name: api-method get
description: "Returns the detailed information on the contact with the ID specified in the request."
---

**GET** `/api/2.0/crm/contact/{contactid:[0-9]+}/data`

Returns the detailed information on the contact with the ID specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

## Request example

```json
{
  "contactid": 0
}
```

## Returns

Contact information. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "InfoType": 1,
    "Category": 0,
    "Data": "support@onlyoffice.com",
    "CategoryName": "Home",
    "IsPrimary": true,
    "ID": 1234
  }
]
```
