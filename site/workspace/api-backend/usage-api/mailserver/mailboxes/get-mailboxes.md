---
title: "Get mailboxes"
sidebar_label: "Get mailboxes"
sidebar_class_name: api-method get
description: "Returns a list of all the mailboxes associated with the tenant."
---

**GET** `/api/2.0/mailserver/mailboxes/get`

Returns a list of all the mailboxes associated with the tenant.

## Returns

List of mailbox data for the current tenant. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 1234,
    "UserId": "UserId",
    "UserDisplayName": "UserDisplayName",
    "Address": {
      "Id": 1234,
      "DomainId": 1234,
      "Email": "Email@only.com"
    },
    "Name": "Name",
    "Aliases": [
      {
        "Id": 1234,
        "DomainId": 1234,
        "Email": "Email@only.com"
      }
    ]
  }
]
```
