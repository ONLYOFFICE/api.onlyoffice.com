---
title: "Get the previous or next conversation ID"
sidebar_label: "Get the previous or next conversation ID"
sidebar_class_name: api-method get
description: "Returns the previous or next conversation ID filtered with the parameters specified in the request."
---

**GET** `/api/2.0/mail/conversation/{id:[0-9]+}/{direction:(next|prev)}`

Returns the previous or next conversation ID filtered with the parameters specified in the request.

## Request body

### id

**type:** `integer`

Head message ID of the current conversation

**Example**: `0`

### direction

**type:** `string`

Defines if the previous or next conversation is needed: "prev" for previous, "next" for next

**Example**: `"string"`

### folder

**type:** `integer[]`

Folder type: 1 - inbox, 2 - sent, 5 - spam

### unread

**type:** `boolean[]`

Conversation status: unread (true), read (false), or all (null) conversations

### attachments

**type:** `boolean[]`

Defines if a conversation has attachments or not: with attachments (true), without attachments (false) or all (null) messages

### period_from

**type:** `integer[]`

Start search period date

### period_to

**type:** `integer[]`

End search period date

### important

**type:** `boolean[]`

Specifies if only important conversations will be displayed or not

### from_address

**type:** `string`

Mail address from which the conversation messages were received

**Example**: `"string"`

### to_address

**type:** `string`

Mail address to which the conversation messages were sent

**Example**: `"string"`

### mailbox_id

**type:** `integer[]`

Recipient mailbox ID

### tags

**type:** `integer[]`

IDs of tags linked to the target conversation

### search

**type:** `string`

Text to search in the conversation bodies and subjects

**Example**: `"string"`

### page_size

**type:** `integer[]`

Number of conversations on the page

### sortorder

**type:** `string`

Sort order by date: "ascending" or "descending"

**Example**: `"string"`

### with_calendar

**type:** `boolean[]`

Specifies if the conversations have a calendar or not

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

Head message ID of the previous or next conversation. A request that is not authenticated returns `401`.
