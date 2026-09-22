---
title: "Add contact information"
sidebar_label: "Add contact information"
sidebar_class_name: api-method post
description: "Adds the information with the parameters specified in the request to the contact with the selected ID."
---

**POST** `/api/2.0/crm/contact/{contactid:[0-9]+}/data`

Adds the information with the parameters specified in the request to the contact with the selected ID.

## Request body

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### infoType

**type:** `integer`

Contact information type

**Example**: `0`

### data

**type:** `string`

New data

**Example**: `"string"`

### isPrimary

**type:** `boolean`

Contact information importance: primary or not

**Example**: `true`

### category

**type:** `string`

Contact information category

**Example**: `"string"`

## Request example

```json
{
  "contactid": 0,
  "infoType": 0,
  "data": "string",
  "isPrimary": true,
  "category": "string"
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
