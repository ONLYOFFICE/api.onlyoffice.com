---
title: "Get the invoice JSON data"
sidebar_label: "Get the invoice JSON data"
sidebar_class_name: api-method get
description: "Returns the JSON data of an invoice with the ID specified in the request."
---

**GET** `/api/2.0/crm/invoice/jsondata/{invoiceid:[0-9]+}`

Returns the JSON data of an invoice with the ID specified in the request.

## Request body

### invoiceid

**type:** `integer`

Invoice ID

**Example**: `0`

## Request example

```json
{
  "invoiceid": 0
}
```

## Returns

Invoice JSON data. A request that is not authenticated returns `401`.
