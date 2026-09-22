---
title: "Get invoice taxes"
sidebar_label: "Get invoice taxes"
sidebar_class_name: api-method get
description: "Returns a list of invoice taxes."
---

**GET** `/api/2.0/crm/invoice/tax`

Returns a list of invoice taxes.

## Returns

List of invoice taxes. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Name": "Name",
    "Description": "Description",
    "Rate": "Rate",
    "CreateOn": "2020-12-14T22:13:41.5378233Z",
    "CreateBy": {
      "Id": "00000000-0000-0000-0000-000000000000",
      "DisplayName": "Mike Zanyatski",
      "Title": "Manager",
      "AvatarSmall": "url to small avatar",
      "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
    },
    "CanEdit": true,
    "CanDelete": true,
    "ID": 1234
  }
]
```
