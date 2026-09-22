---
title: "Add a tag to the entity and related contacts"
sidebar_label: "Add a tag to the entity and related contacts"
sidebar_class_name: api-method post
description: "Adds the selected tag to the entity (company or person) specified in the request and to all the related contacts."
---

**POST** `/api/2.0/crm/{entityType:(company|person)}/{entityid:[0-9]+}/tag/group`

Adds the selected tag to the entity (company or person) specified in the request and to all the related contacts.

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
