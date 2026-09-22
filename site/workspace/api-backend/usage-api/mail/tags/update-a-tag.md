---
title: "Update a tag"
sidebar_label: "Update a tag"
sidebar_class_name: api-method put
description: "Updates a tag with the ID specified in the request."
---

**PUT** `/api/2.0/mail/tags/{id}`

Updates a tag with the ID specified in the request.

## Path parameters

### id

**type:** `integer`

Tag ID

**Example**: `0`

## Request body

### name

**type:** `string`

New tag name

**Example**: `"string"`

### style

**type:** `string`

New style identifier: a postfix which represents the CSS style (tag color)

**Example**: `"string"`

### addresses

**type:** `string[]`

New list of addresses associated with a tag

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

Updated mail tag. A request that is not authenticated returns `401`.

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
