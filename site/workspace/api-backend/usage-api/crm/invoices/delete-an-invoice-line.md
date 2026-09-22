---
title: "Delete an invoice line"
sidebar_label: "Delete an invoice line"
sidebar_class_name: api-method delete
description: "Deletes an invoice line with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/invoiceline/{id:[0-9]+}`

Deletes an invoice line with the ID specified in the request.

## Request body

### id

**type:** `integer`

Invoice line ID

**Example**: `0`

## Request example

```json
{
  "id": 0
}
```

## Returns

Invoice line ID. A request that is not authenticated returns `401`.
