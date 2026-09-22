---
title: "Create a tag"
sidebar_label: "Create a tag"
sidebar_class_name: api-method post
description: "Creates a new tag with the parameters specified in the request."
---

**POST** `/api/2.0/mail/tags`

Creates a new tag with the parameters specified in the request.

## Request body

### name

**type:** `string`

Tag name

**Example**: `"string"`

### style

**type:** `string`

Style identifier: a postfix which represents the CSS style (tag color)

**Example**: `"string"`

### addresses

**type:** `string[]`

List of addresses associated with a tag

## Request example

```json
{
  "name": "string",
  "style": "string",
  "addresses": [
    "string"
  ]
}
```

## Returns

Mail tag. A request that is not authenticated returns `401`.

### Id

**type:** `integer`

**Example**: `1234`

### Name

**type:** `string`

**Example**: `"name"`

### Style

**type:** `string`

**Example**: `"style"`

### Addresses

**type:** `string[]`

### LettersCount

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "Id": 1234,
  "Name": "name",
  "Style": "style",
  "Addresses": [
    "addresses"
  ],
  "LettersCount": 1234
}
```
