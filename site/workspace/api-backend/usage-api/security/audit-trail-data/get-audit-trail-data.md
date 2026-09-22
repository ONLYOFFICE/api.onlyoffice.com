---
title: "Get audit trail data"
sidebar_label: "Get audit trail data"
sidebar_class_name: api-method get
description: "Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities (tasks, opportunities, files, etc.) on the portal."
---

**GET** `/api/2.0/security/audit/events/last`

Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities (tasks, opportunities, files, etc.) on the portal.

## Returns

List of audit trail data. A request that is not authenticated returns `401`.

## Response example

```json
[]
```
