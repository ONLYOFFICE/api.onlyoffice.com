---
title: "Check quota recalculation"
sidebar_label: "Check quota recalculation"
sidebar_class_name: api-method get
description: "Checks the process of recalculating quota."
---

**GET** `/api/2.0/settings/checkrecalculatequota`

Checks the process of recalculating quota.

## Returns

Boolean value: true - quota recalculation process is enabled, false - quota recalculation process is disabled. A request that is not authenticated returns `401`.
