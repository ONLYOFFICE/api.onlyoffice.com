---
title: "Get a user by ID"
sidebar_label: "Get a user by ID"
sidebar_class_name: api-method get
description: "Returns a user with the ID specified in the request from the current portal."
---

**GET** `/api/2.0/portal/users/{userID}`

Returns a user with the ID specified in the request from the current portal.

## Path parameters

### userID

**type:** `string`

User ID

**Example**: `"string"`

## Returns

User. A request that is not authenticated returns `401`.
