---
title: "Get the product administrators"
sidebar_label: "Get the product administrators"
sidebar_class_name: api-method get
description: "Returns a list of all the administrators of the product with the ID specified in the request."
---

**GET** `/api/2.0/settings/security/administrator/{productid}`

Returns a list of all the administrators of the product with the ID specified in the request.

## Path parameters

### productid

**type:** `string`

Product ID

**Example**: `"string"`

## Returns

List of product administrators. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  }
]
```
