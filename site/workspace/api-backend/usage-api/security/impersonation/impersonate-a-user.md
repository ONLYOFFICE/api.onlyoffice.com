---
title: "Impersonate a user"
sidebar_label: "Impersonate a user"
sidebar_class_name: api-method post
description: "Impersonates a user with the ID specified in the request."
---

**POST** `/api/2.0/security/impersonate/{userId}`

Impersonates a user with the ID specified in the request.

## Path parameters

### userId

**type:** `string`

User ID

**Example**: `"string"`

## Returns

Cookies. A request that is not authenticated returns `401`.
