---
title: "Get the previous or next message ID"
sidebar_label: "Get the previous or next message ID"
sidebar_class_name: api-method get
description: "Returns the previous or next message ID filtered with the parameters specified in the request."
---

**GET** `/api/2.0/mail/messages/{id:[0-9]+}/{direction:(next|prev)}`

Returns the previous or next message ID filtered with the parameters specified in the request.

## Request body

### id

**type:** `integer`

Head message ID of the current conversation

**Example**: `0`

### direction

**type:** `string`

Defines if the previous or next message is needed: "prev" for previous, "next" for next

**Example**: `"string"`

### folder

**type:** `integer[]`

Folder type: 1 - inbox, 2 - sent, 5 - spam

### unread

**type:** `boolean[]`

Message status: unread (true), read (false), or all (null) messages

### attachments

**type:** `boolean[]`

Defines if a message has attachments or not: with attachments (true), without attachments (false), or all (null) messages

### period_from

**type:** `integer[]`

Start search period date

### period_to

**type:** `integer[]`

End search period date

### important

**type:** `boolean[]`

Specifies if only important messages will be displayed or not

### from_address

**type:** `string`

Mail address from which a letter was received

**Example**: `"string"`

### to_address

**type:** `string`

Mail address to which a letter was sent

**Example**: `"string"`

### mailbox_id

**type:** `integer[]`

Recipient mailbox ID

### tags

**type:** `integer[]`

IDs of tags linked to the target message

### search

**type:** `string`

Text to search in the message bodies and subjects

**Example**: `"string"`

### page_size

**type:** `integer[]`

Number of messages on the page

### sortorder

**type:** `string`

Sort order by date: "ascending" or "descending"

**Example**: `"string"`

### with_calendar

**type:** `boolean[]`

Specifies if the messages have a calendar or not

### user_folder_id

**type:** `integer[]`

User folder ID

## Request example

```json
{
  "id": 0,
  "direction": "string",
  "folder": [
    0
  ],
  "unread": [
    true
  ],
  "attachments": [
    true
  ],
  "period_from": [
    0
  ],
  "period_to": [
    0
  ],
  "important": [
    true
  ],
  "from_address": "string",
  "to_address": "string",
  "mailbox_id": [
    0
  ],
  "tags": [
    0
  ],
  "search": "string",
  "page_size": [
    0
  ],
  "sortorder": "string",
  "with_calendar": [
    true
  ],
  "user_folder_id": [
    0
  ]
}
```

## Returns

Previous or next message ID. A request that is not authenticated returns `401`.
