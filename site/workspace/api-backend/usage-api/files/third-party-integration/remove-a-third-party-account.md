---
title: "Remove a third-party account"
sidebar_label: "Remove a third-party account"
sidebar_class_name: api-method delete
description: "Removes the third-party storage service account with the ID specified in the request."
---

**DELETE** `/api/2.0/files/thirdparty/{providerId:[0-9]+}`

Removes the third-party storage service account with the ID specified in the request.

## Request body

### providerId

**type:** `integer`

Provider ID. It is a part of the folder ID. Example: folder ID is "sbox-123", then provider ID is "123".

**Example**: `0`

## Request example

```json
{
  "providerId": 0
}
```

## Returns

Deleted third-party account. A request that is not authenticated returns `401`.
