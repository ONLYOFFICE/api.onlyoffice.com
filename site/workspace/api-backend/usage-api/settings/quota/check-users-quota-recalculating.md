---
title: "Check users quota recalculating"
sidebar_label: "Check users quota recalculating"
sidebar_class_name: api-method get
description: "Checks the process of recalculating users quota."
---

**GET** `/api/2.0/settings/checkrecalculateuserquota`

Checks the process of recalculating users quota.

## Returns

Boolean value: True - quota recalculating process is running, False - quota recalculating process is stopped. A request that is not authenticated returns `401`.
