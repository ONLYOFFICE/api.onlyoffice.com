---
title: "Delete a tag from the entity and related contacts"
sidebar_label: "Delete a tag from the entity and related contacts"
sidebar_class_name: api-method delete
description: "Deletes the selected tag from the entity (company or person) specified in the request and from all the related contacts."
---

**DELETE** `/api/2.0/crm/{entityType:(company|person)}/{entityid:[0-9]+}/tag/group`

Deletes the selected tag from the entity (company or person) specified in the request and from all the related contacts.

## Request body

### entityType

**type:** `string`

Entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Entity ID

**Example**: `0`

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0,
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
