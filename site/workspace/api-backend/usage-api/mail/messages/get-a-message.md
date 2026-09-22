---
title: "Get a message"
sidebar_label: "Get a message"
sidebar_class_name: api-method get
description: "Returns the detailed information about a message with the ID specified in the request."
---

**GET** `/api/2.0/mail/messages/{id:[0-9]+}`

Returns the detailed information about a message with the ID specified in the request.

## Request body

### id

**type:** `integer`

Message ID

**Example**: `0`

### loadImages

**type:** `boolean[]`

Specifies whether to display images sent in a message or not

### needSanitize

**type:** `boolean[]`

Specifies if HTML needs to be prepared for the FCK editor or not

### markRead

**type:** `boolean[]`

Specifies if a message will be marked as read or not

## Request example

```json
{
  "id": 0,
  "loadImages": [
    true
  ],
  "needSanitize": [
    true
  ],
  "markRead": [
    true
  ]
}
```

## Returns

Message information. A request that is not authenticated returns `401`.

### Attachments

**type:** `MailAttachmentData[]`

### Introduction

**type:** `string`

**Example**: `"Introduction"`

### HtmlBody

**type:** `string`

**Example**: `"HtmlBody"`

### ContentIsBlocked

**type:** `boolean`

**Example**: `true`

### Important

**type:** `boolean`

**Example**: `true`

### Subject

**type:** `string`

**Example**: `"Subject"`

### HasAttachments

**type:** `boolean`

**Example**: `true`

### Bcc

**type:** `string`

**Example**: `"Bcc"`

### Cc

**type:** `string`

**Example**: `"Cc"`

### To

**type:** `string`

**Example**: `"To"`

### Address

**type:** `string`

**Example**: `"Address"`

### From

**type:** `string`

**Example**: `"From"`

### ReplyTo

**type:** `string`

**Example**: `"ReplyTo"`

### Id

**type:** `integer`

**Example**: `555`

### ChainId

**type:** `string`

**Example**: `"ChainId"`

### ChainDateString

**type:** `string`

**Example**: `"ChainDate"`

### DateString

**type:** `string`

**Example**: `"Date"`

### DateDisplay

**type:** `string`

**Example**: `"DateDisplay"`

### TagIds

**type:** `integer[]`

### LabelsInString

**type:** `string`

**Example**: `"LabelsInString"`

### IsNew

**type:** `boolean`

**Example**: `true`

### IsAnswered

**type:** `boolean`

**Example**: `true`

### IsForwarded

**type:** `boolean`

**Example**: `true`

### TextBodyOnly

**type:** `boolean`

**Example**: `true`

### Size

**type:** `integer`

**Example**: `555555`

### EMLLink

**type:** `string`

**Example**: `"EMLLink"`

### StreamId

**type:** `string`

**Example**: `"StreamId"`

### RestoreFolderId

**type:** `"Sending" | "Inbox" | "Sent" | "Draft" | "Trash" | "Spam" | "UserFolder" | "Templates"`

[0 - Sending, 1 - Inbox, 2 - Sent, 3 - Draft, 4 - Trash, 5 - Spam, 6 - UserFolder, 7 - Templates]

**Example**: `1`

### Folder

**type:** `"Sending" | "Inbox" | "Sent" | "Draft" | "Trash" | "Spam" | "UserFolder" | "Templates"`

[0 - Sending, 1 - Inbox, 2 - Sent, 3 - Draft, 4 - Trash, 5 - Spam, 6 - UserFolder, 7 - Templates]

**Example**: `1`

### UserFolderId

**type:** `integer[]`

### ChainLength

**type:** `integer`

**Example**: `144`

### WasNew

**type:** `boolean`

**Example**: `false`

### IsToday

**type:** `boolean`

**Example**: `false`

### IsYesterday

**type:** `boolean`

**Example**: `false`

### ReceivedDate

**type:** `string`

**Example**: `"2020-12-18T08:12:09.1209967Z"`

### IsBodyCorrupted

**type:** `boolean`

**Example**: `false`

### HasParseError

**type:** `boolean`

**Example**: `false`

### MimeMessageId

**type:** `string`

**Example**: `"MimeMessageId"`

### MimeReplyToId

**type:** `string`

**Example**: `"MimeReplyToId"`

### CalendarUid

**type:** `string`

**Example**: `"CalendarUid"`

### ReadRequestStatus

**type:** `boolean`

**Example**: `true`

## Response example

```json
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
```
