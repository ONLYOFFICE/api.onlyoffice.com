---
title: "Get a conversation"
sidebar_label: "Get a conversation"
sidebar_class_name: api-method get
description: "Returns a list of messages linked in one chain (conversation)."
---

**GET** `/api/2.0/mail/conversation/{id:[0-9]+}`

Returns a list of messages linked in one chain (conversation).

## Request body

### id

**type:** `integer`

ID of any message from the conversation

**Example**: `0`

### loadAll

**type:** `boolean[]`

Loads the content of all messages

### markRead

**type:** `boolean[]`

Specifies if a conversation will be marked as read or not

### needSanitize

**type:** `boolean[]`

Specifies if HTML needs to be prepared for the FCK editor or not

## Request example

```json
{
  "id": 0,
  "loadAll": [
    true
  ],
  "markRead": [
    true
  ],
  "needSanitize": [
    true
  ]
}
```

## Returns

List of messages linked in one chain. A request that is not authenticated returns `401`.

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
