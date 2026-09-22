---
title: "Update an autoreply"
sidebar_label: "Update an autoreply"
sidebar_class_name: api-method post
description: "Updates or creates an autoreply with the parameters specified in the request."
---

**POST** `/api/2.0/mail/autoreply/update/{mailboxId:[0-9]+}`

Updates or creates an autoreply with the parameters specified in the request.

## Request body

### mailboxId

**type:** `integer`

Mailbox ID

**Example**: `0`

### turnOn

**type:** `boolean`

New autoreply status

**Example**: `true`

### onlyContacts

**type:** `boolean`

Specifies whether to send an autoreply only to the contacts or not

**Example**: `true`

### turnOnToDate

**type:** `boolean`

Specifies whether to send an autoreply till the specified date or not

**Example**: `true`

### fromDate

**type:** `string`

New start date of autoreply sending

**Example**: `"string"`

### toDate

**type:** `string`

New end date of autoreply sending

**Example**: `"string"`

### subject

**type:** `string`

New autoreply subject

**Example**: `"string"`

### html

**type:** `string`

New autoreply contents in the HTML format

**Example**: `"string"`

## Request example

```json
{
  "mailboxId": 0,
  "turnOn": true,
  "onlyContacts": true,
  "turnOnToDate": true,
  "fromDate": "string",
  "toDate": "string",
  "subject": "string",
  "html": "string"
}
```

## Returns

Updated autoreply information. A request that is not authenticated returns `401`.

### MailboxId

**type:** `integer`

**Example**: `33`

### TurnOn

**type:** `boolean`

**Example**: `true`

### OnlyContacts

**type:** `boolean`

**Example**: `false`

### TurnOnToDate

**type:** `boolean`

**Example**: `true`

### FromDate

**type:** `string`

**Example**: `"2020-10-01T17:04:32.0000000"`

### ToDate

**type:** `string`

**Example**: `"2020-10-01T17:04:32.0000000"`

### Subject

**type:** `string`

**Example**: `"subject"`

### Html

**type:** `string`

**Example**: `"html"`

## Response example

```json
{
  "MailboxId": 33,
  "TurnOn": true,
  "OnlyContacts": false,
  "TurnOnToDate": true,
  "FromDate": "2020-10-01T17:04:32.0000000",
  "ToDate": "2020-10-01T17:04:32.0000000",
  "Subject": "subject",
  "Html": "html"
}
```
