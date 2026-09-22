---
title: "Import users"
sidebar_label: "Import users"
sidebar_class_name: api-method post
description: "Imports the new portal users with the first name, last name, and email address."
---

**POST** `/api/2.0/people/import/save`

Imports the new portal users with the first name, last name, and email address.

## Request body

### userList

**type:** `string`

List of users

**Example**: `"string"`

### importUsersAsCollaborators

**type:** `boolean`

Specifies whether to import users as guests (true) or not (false)

**Example**: `true`

## Request example

```json
{
  "userList": "string",
  "importUsersAsCollaborators": true
}
```
