---
title: "Update a user photo"
sidebar_label: "Update a user photo"
sidebar_class_name: api-method put
description: "Updates a photo of the user with the ID specified in the request."
---

**PUT** `/api/2.0/people/{userid}/photo`

Updates a photo of the user with the ID specified in the request.

## Path parameters

### userid

**type:** `string`

User ID

**Example**: `"string"`

## Request body

### files

**type:** `string`

New avatar photo URL

**Example**: `"string"`

## Request example

```json
{
  "files": "string"
}
```

## Returns

Updated user photo. A request that is not authenticated returns `401`.

### Original

**type:** `string`

**Example**: `"default_user_photo_size_1280-1280.png"`

### Retina

**type:** `string`

**Example**: `"default_user_photo_size_360-360.png"`

### Max

**type:** `string`

**Example**: `"default_user_photo_size_200-200.png"`

### Big

**type:** `string`

**Example**: `"default_user_photo_size_82-82.png"`

### Medium

**type:** `string`

**Example**: `"\"default_user_photo_size_48-48.png"`

### Small

**type:** `string`

**Example**: `"default_user_photo_size_32-32.png"`

## Response example

```json
{
  "Original": "default_user_photo_size_1280-1280.png",
  "Retina": "default_user_photo_size_360-360.png",
  "Max": "default_user_photo_size_200-200.png",
  "Big": "default_user_photo_size_82-82.png",
  "Medium": "\"default_user_photo_size_48-48.png",
  "Small": "default_user_photo_size_32-32.png"
}
```
