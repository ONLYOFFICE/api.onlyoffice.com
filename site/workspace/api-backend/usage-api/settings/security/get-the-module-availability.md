---
title: "Get the module availability"
sidebar_label: "Get the module availability"
sidebar_class_name: api-method get
description: "Returns the availability of the module with the ID specified in the request."
---

**GET** `/api/2.0/settings/security/{id}`

Returns the availability of the module with the ID specified in the request.

## Path parameters

### id

**type:** `string`

Module ID

**Example**: `"string"`

## Returns

Boolean value: true - module is enabled, false - module is disabled. A request that is not authenticated returns `401`.
