---
title: "Initialize migration"
sidebar_label: "Initialize migration"
sidebar_class_name: api-method post
description: "Uploads a backup of a migrator specified in the request and initializes the import."
---

**POST** `/api/2.0/migration/init/{migratorName}`

Uploads a backup of a migrator specified in the request and initializes the import.

## Path parameters

### migratorName

**type:** `string`

Migrator name

**Example**: `"string"`

## Request body

### path

**type:** `string`

Path to the backup file

**Example**: `"string"`

## Request example

```json
{
  "path": "string"
}
```
