---
title: "Delete an invoice tax"
sidebar_label: "Delete an invoice tax"
sidebar_class_name: api-method delete
description: "Deletes an invoice tax with the ID specified in the request."
---

**DELETE** `/api/2.0/crm/invoice/tax/{id:[0-9]+}`

Deletes an invoice tax with the ID specified in the request.

## Request body

### id

**type:** `integer`

Tax ID

**Example**: `0`

## Request example

```json
{
  "id": 0
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
