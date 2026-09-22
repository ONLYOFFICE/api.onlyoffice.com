---
title: "Get login history"
sidebar_label: "Get login history"
sidebar_class_name: api-method get
description: "Returns all the latest user login activity including successful logins and failed attempts with an indication of reasons."
---

**GET** `/api/2.0/security/audit/login/last`

Returns all the latest user login activity including successful logins and failed attempts with an indication of reasons.

## Returns

List of login events. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
