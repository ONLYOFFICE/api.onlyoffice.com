---
title: "Save a draft message"
sidebar_label: "Save a draft message"
sidebar_class_name: api-method put
description: "Saves a message with the ID specified in the request as a draft."
---

**PUT** `/api/2.0/mail/drafts/save`

Saves a message with the ID specified in the request as a draft.

## Request body

### id

**type:** `integer`

Message ID which will be saved or 0

**Example**: `0`

### from

**type:** `string`

Mail address from which a letter will be sent. Format: Name &lt;name@domain&gt;

**Example**: `"string"`

### to

**type:** `string[]`

List of mail addresses to which a letter will be sent. Format: Name &lt;name@domain&gt;

### cc

**type:** `string[]`

List of Cc (carbon copy) mail addresses. Format: Name &lt;name@domain&gt;

### bcc

**type:** `string[]`

List of Bcc (blind carbon copy) mail addresses. Format: Name &lt;name@domain&gt;

### mimeReplyToId

**type:** `string`

Message ID to which this message is replying to

**Example**: `"string"`

### importance

**type:** `boolean`

Specifies if this message is important or not: true - important, false - not important

**Example**: `true`

### subject

**type:** `string`

Message subject

**Example**: `"string"`

### tags

**type:** `integer[]`

List of tag IDs added to the message

### body

**type:** `string`

Message body as the HTML string

**Example**: `"string"`

### attachments

**type:** `MailAttachmentData[]`

List of message attachments

### calendarIcs

**type:** `string`

Calendar event in the iCal format for sending

**Example**: `"string"`

## Request example

```json
{
  "id": 0,
  "from": "string",
  "to": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "bcc": [
    "string"
  ],
  "mimeReplyToId": "string",
  "importance": true,
  "subject": "string",
  "tags": [
    0
  ],
  "body": "string",
  "attachments": [
    {
      "fileId": "1234",
      "fileName": "fileName",
      "size": "1234",
      "contentType": "contentType",
      "needSaveToTemp": "true",
      "contentId": "contentId",
      "fileNumber": "333",
      "storedName": "storedName",
      "streamId": "streamId",
      "attachedAsLink": "true",
      "tempStoredUrl": "tempStoredUrl"
    }
  ],
  "calendarIcs": "string"
}
```

## Returns

Saved message. A request that is not authenticated returns `401`.

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
