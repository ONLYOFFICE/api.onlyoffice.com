---
title: "Get contact information by ID"
sidebar_label: "Get contact information by ID"
sidebar_class_name: api-method get
description: "Returns the detailed contact information with the ID specified in the request."
---

**GET** `/api/2.0/crm/contact/{contactid:[0-9]+}/data/{id:[0-9]+}`

Returns the detailed contact information with the ID specified in the request.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### id

**type:** `integer`

Contact information ID

**Example**: `0`

## Request example

```json
{
  "contactid": 0,
  "id": 0
}
```

## Returns

Contact information. A request that is not authenticated returns `401`.

### InfoType

**type:** `"Phone" | "Email" | "Website" | "Skype" | "Twitter" | "LinkedIn" | "Facebook" | "Address" | "LiveJournal" | "MySpace" | "GMail" | "Blogger" | "Yahoo" | "MSN" | "ICQ" | "Jabber" | "AIM" | "VK"`

[0 - Phone, 1 - Email, 2 - Website, 3 - Skype, 4 - Twitter, 5 - LinkedIn, 6 - Facebook, 7 - Address, 8 - LiveJournal, 9 - MySpace, 10 - GMail, 11 - Blogger, 12 - Yahoo, 13 - MSN, 14 - ICQ, 15 - Jabber, 16 - AIM, 17 - VK]

**Example**: `1`

### Category

**type:** `integer`

**Example**: `0`

### Data

**type:** `string`

**Example**: `"support@onlyoffice.com"`

### CategoryName

**type:** `string`

**Example**: `"Home"`

### IsPrimary

**type:** `boolean`

**Example**: `true`

### ID

**type:** `integer`

**Example**: `1234`

## Response example

```json
{
  "InfoType": 1,
  "Category": 0,
  "Data": "support@onlyoffice.com",
  "CategoryName": "Home",
  "IsPrimary": true,
  "ID": 1234
}
```
