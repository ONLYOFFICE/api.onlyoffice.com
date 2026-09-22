---
title: Validate portal name
sidebar_position: 5
sidebar_label: Validate portal name
sidebar_class_name: api-method post
description: Checks if the specified name is available to create a portal.
---

**POST** `/api/portal/validateportalname`

Checks if the specified name is available to create a portal.

## Query parameters

### portalName

**type:** `string` | **required**

Portal name.

**Example**: `"example"`

## Returns

Information about the portal name availability. The name is available when the body has no
`error` key and `message` is `portalNameReadyToRegister`; when it cannot be used, the same body
is returned with status 400, carrying one of the shared [error codes](../errors.md) rather than
a bare error.

### error

**type:** `string`

Present only when the name cannot be used.

**Example**: `"portalNameEmpty"`

### message

**type:** `string`

`portalNameReadyToRegister` when the name is available, otherwise the error description.

### variants

**type:** `string[]`

When `error` is `portalNameExist`, the existing portal names starting with the name from the
request.

## Response examples

A name that is free, with status 200:

```json
{
  "message": "portalNameReadyToRegister"
}
```

A name that is taken, with status 400:

```json
{
  "error": "portalNameExist",
  "message": "The portal name is already taken, you need to choose another one",
  "variants": ["example1", "example2"]
}
```
