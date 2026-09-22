---
title: "Get filtered conversations"
sidebar_label: "Get filtered conversations"
sidebar_class_name: api-method get
description: "Returns the conversations with the parameters specified in the request."
---

**GET** `/api/2.0/mail/conversations`

Returns the conversations with the parameters specified in the request.

## Request body

### folder

**type:** `integer[]`

Folder type: 1 - inbox, 2 - sent, 3 - drafts, 4 - trash, 5 - spam

### unread

**type:** `boolean[]`

Conversation status: unread (true), read (false), or all (null) messages

### attachments

**type:** `boolean[]`

Defines if a conversation has attachments or not: with attachments (true), without attachments (false), or all (null) messages

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

### from_date

**type:** `string`

Start date of conversation search

**Example**: `"string"`

### from_message

**type:** `integer[]`

Message from which the conversations are searched

### with_calendar

**type:** `boolean[]`

Specifies if the conversations have a calendar or not

### user_folder_id

**type:** `integer[]`

User folder ID

### prev_flag

**type:** `boolean[]`

Direction sort of the conversation list: true for previous, false for next

## Request example

```json
{
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
  "from_date": "string",
  "from_message": [
    0
  ],
  "with_calendar": [
    true
  ],
  "user_folder_id": [
    0
  ],
  "prev_flag": [
    true
  ]
}
```

## Returns

List of filtered conversations. A request that is not authenticated returns `401`.

## Response example

```json
[
  {
    "Attachments": [
      {
        "fileId": 1234,
        "fileName": "fileName",
        "size": 1234,
        "contentType": "contentType",
        "needSaveToTemp": true,
        "contentId": "contentId",
        "fileNumber": 333,
        "storedName": "storedName",
        "streamId": "streamId",
        "attachedAsLink": true,
        "tempStoredUrl": "tempStoredUrl"
      }
    ],
    "Introduction": "Introduction",
    "HtmlBody": "HtmlBody",
    "ContentIsBlocked": true,
    "Important": true,
    "Subject": "Subject",
    "HasAttachments": true,
    "Bcc": "Bcc",
    "Cc": "Cc",
    "To": "To",
    "Address": "Address",
    "From": "From",
    "ReplyTo": "ReplyTo",
    "Id": 555,
    "ChainId": "ChainId",
    "ChainDateString": "ChainDate",
    "DateString": "Date",
    "DateDisplay": "DateDisplay",
    "TagIds": [
      1234
    ],
    "LabelsInString": "LabelsInString",
    "IsNew": true,
    "IsAnswered": true,
    "IsForwarded": true,
    "TextBodyOnly": true,
    "Size": 555555,
    "EMLLink": "EMLLink",
    "StreamId": "StreamId",
    "RestoreFolderId": 1,
    "Folder": 1,
    "UserFolderId": [
      144
    ],
    "ChainLength": 144,
    "WasNew": false,
    "IsToday": false,
    "IsYesterday": false,
    "ReceivedDate": "2020-12-18T08:12:09.1209967Z",
    "IsBodyCorrupted": false,
    "HasParseError": false,
    "MimeMessageId": "MimeMessageId",
    "MimeReplyToId": "MimeReplyToId",
    "CalendarUid": "CalendarUid",
    "ReadRequestStatus": true
  }
]
```
