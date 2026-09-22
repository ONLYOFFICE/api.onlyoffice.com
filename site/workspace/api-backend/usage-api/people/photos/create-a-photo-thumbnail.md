---
title: "Create a photo thumbnail"
sidebar_label: "Create a photo thumbnail"
sidebar_class_name: api-method post
description: "Creates a photo thumbnail by coordinates of the original image specified in the request."
---

**POST** `/api/2.0/people/{userid}/photo/thumbnails`

Creates a photo thumbnail by coordinates of the original image specified in the request.

## Path parameters

### userid

**type:** `string`

User ID

**Example**: `"string"`

## Request body

### tmpFile

**type:** `string`

Path to the temporary file

**Example**: `"string"`

### x

**type:** `integer`

Horizontal coordinate

**Example**: `0`

### y

**type:** `integer`

Vertical coordinate

**Example**: `0`

### width

**type:** `integer`

Thumbnail width

**Example**: `0`

### height

**type:** `integer`

Thumbnail height

**Example**: `0`

## Request example

```json
{
  "tmpFile": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

## Returns

Thumbnail. A request that is not authenticated returns `401`.

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
