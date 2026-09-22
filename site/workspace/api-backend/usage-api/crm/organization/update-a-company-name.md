---
title: "Update a company name"
sidebar_label: "Update a company name"
sidebar_class_name: api-method put
description: "Updates a company name with the one specified in the request."
---

**PUT** `/api/2.0/crm/settings/organisation/base`

Updates a company name with the one specified in the request.

## Request body

### companyName

**type:** `string`

New company name

**Example**: `"string"`

## Request example

```json
{
  "companyName": "string"
}
```

## Returns

Updated company name. A request that is not authenticated returns `401`.
