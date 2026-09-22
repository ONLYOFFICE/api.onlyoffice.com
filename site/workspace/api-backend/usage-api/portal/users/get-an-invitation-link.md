---
title: "Get an invitation link"
sidebar_label: "Get an invitation link"
sidebar_class_name: api-method get
description: "Returns an invitation link for joining the portal."
---

**GET** `/api/2.0/portal/users/invite/{employeeType}`

Returns an invitation link for joining the portal.

## Path parameters

### employeeType

**type:** `"All" | "User" | "Visitor"`

Employee type (User or Visitor)

**Example**: `"All"`

## Returns

Invitation link. A request that is not authenticated returns `401`.
