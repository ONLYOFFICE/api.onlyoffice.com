---
title: "Set a cookie for a password-protected external link"
sidebar_label: "Set a cookie for a password-protected external link"
sidebar_class_name: api-method post
description: "Sets a cookie after verifying the password for a password-protected external link and returns a link to the shared file."
---

**POST** `/api/2.0/files/sharedlink/password`

Sets a cookie after verifying the password for a password-protected external link and returns a link to the shared file.

## Request body

### key

**type:** `string`

Link signature

**Example**: `"string"`

### passwordHash

**type:** `string`

Password hash

**Example**: `"string"`

### isFolder

**type:** `boolean`

Specifies if a link is to the shared folder or not

**Example**: `true`

## Request example

```json
{
  "key": "string",
  "passwordHash": "string",
  "isFolder": true
}
```

## Returns

Shared file link
