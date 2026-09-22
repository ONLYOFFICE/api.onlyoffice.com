---
title: "Log out from the connection"
sidebar_label: "Log out from the connection"
sidebar_class_name: api-method put
description: "Logs out from the connection with the ID specified in the request."
---

**PUT** `/api/2.0/security/activeconnections/logout/{loginEventId}`

Logs out from the connection with the ID specified in the request.

## Path parameters

### loginEventId

**type:** `integer`

Login event ID

**Example**: `0`

## Returns

Boolean value: true if the operation is successful. A request that is not authenticated returns `401`.
