---
title: "Create an invoice tax"
sidebar_label: "Create an invoice tax"
sidebar_class_name: api-method post
description: "Creates an invoice tax with the parameters (name, description, rate) specified in the request."
---

**POST** `/api/2.0/crm/invoice/tax`

Creates an invoice tax with the parameters (name, description, rate) specified in the request.

## Request body

### name

**type:** `string`

Tax name

**Example**: `"string"`

### description

**type:** `string`

Tax description

**Example**: `"string"`

### rate

**type:** `number`

Tax rate

**Example**: `0`

## Request example

```json
{
  "name": "string",
  "description": "string",
  "rate": 0
}
```

## Returns

Invoice tax. A request that is not authenticated returns `401`.

### Name

**type:** `string`

**Example**: `"Name"`

### Description

**type:** `string`

**Example**: `"Description"`

### Rate

**type:** `number`

**Example**: `"Rate"`

### CreateOn

**type:** `string`

**Example**: `"2020-12-14T22:13:41.5378233Z"`

### CreateBy

**type:** `EmployeeWraper`

### CanEdit

**type:** `boolean`

**Example**: `true`

### CanDelete

**type:** `boolean`

**Example**: `true`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "Name": "Name",
  "Description": "Description",
  "Rate": "Rate",
  "CreateOn": "2020-12-14T22:13:41.5378233Z",
  "CreateBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "CanEdit": true,
  "CanDelete": true,
  "ID": 1234
}
```
