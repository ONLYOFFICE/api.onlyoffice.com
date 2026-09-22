---
title: "Check user impersonation"
sidebar_label: "Check user impersonation"
sidebar_class_name: api-method get
description: "Checks if a user with the ID specified in the request can be impersonated or not."
---

**GET** `/api/2.0/security/impersonate/{userId}`

Checks if a user with the ID specified in the request can be impersonated or not.

## Path parameters

### userId

**type:** `string`

User ID

**Example**: `"string"`

## Returns

Boolean value: true - the user can be impersonated, false - the user cannot be impersonated. A request that is not authenticated returns `401`.
