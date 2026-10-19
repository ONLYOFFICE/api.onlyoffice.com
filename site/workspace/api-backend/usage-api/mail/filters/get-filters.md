---
title: "Get filters"
sidebar_label: "Get filters"
sidebar_class_name: api-method get
description: "Returns a list of filters used in all the mails."
---

**GET** `/api/2.0/mail/filters`

Returns a list of filters used in all the mails.

## Returns

List of filters which is represented as JSON. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 1,
    "Name": "name",
    "Position": 2,
    "Enabled": true,
    "Conditions": [
      {
        "Key": 1,
        "Operation": 1,
        "Value": "value"
      }
    ],
    "Actions": [
      {
        "Action": 1,
        "Data": "data"
      }
    ],
    "Options": {
      "MatchMultiConditions": 1,
      "ApplyTo": {
        "Folders": [
          1
        ],
        "Mailboxes": [
          1
        ],
        "WithAttachments": 1
      },
      "IgnoreOther": true
    }
  }
]
```
