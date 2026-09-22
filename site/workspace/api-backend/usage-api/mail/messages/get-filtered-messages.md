---
title: "Get filtered messages"
sidebar_label: "Get filtered messages"
sidebar_class_name: api-method get
description: "Returns the messages with the parameters specified in the request."
---

**GET** `/api/2.0/mail/messages`

Returns the messages with the parameters specified in the request.

## Request body

### folder

**type:** `integer[]`

Folder ID

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

IDs of tags linked to the target messages

### search

**type:** `string`

Text to search in the message bodies and subjects

**Example**: `"string"`

### page

**type:** `integer[]`

Page number

### with_calendar

**type:** `boolean[]`

Specifies if the messages have a calendar or not

### page_size

**type:** `integer[]`

Number of messages on the page

### user_folder_id

**type:** `integer[]`

User folder ID

### sortorder

**type:** `string`

Sort order by date: "ascending" or "descending"

**Example**: `"string"`

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
  "page": [
    0
  ],
  "with_calendar": [
    true
  ],
  "page_size": [
    0
  ],
  "user_folder_id": [
    0
  ],
  "sortorder": "string"
}
```

## Returns

List of filtered messages. A request that is not authenticated returns `401`.

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
