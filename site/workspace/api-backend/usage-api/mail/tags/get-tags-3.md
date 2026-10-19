---
title: "Get tags"
sidebar_label: "Get tags"
sidebar_class_name: api-method get
description: "Returns a list of all the tags used in the Mail module."
---

**GET** `/api/2.0/mail/tags`

Returns a list of all the tags used in the Mail module.

## Returns

List of tags represented as JSON. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Id": 1234,
    "Name": "name",
    "Style": "style",
    "Addresses": [
      "addresses"
    ],
    "LettersCount": 1234
  }
]
```
