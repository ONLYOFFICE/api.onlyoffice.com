---
title: "Send a message"
sidebar_label: "Send a message"
sidebar_class_name: api-method put
description: "Sends a message with the ID specified in the request."
---

**PUT** `/api/2.0/mail/messages/send`

Sends a message with the ID specified in the request.

## Request body

### id

**type:** `integer`

Message ID which will be sent or 0

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

### fileLinksShareMode

**type:** `integer`

Sharing mode for the links of the attached files

**Example**: `0`

### calendarIcs

**type:** `string`

Calendar event in the iCal format for sending

**Example**: `"string"`

### isAutoreply

**type:** `boolean`

Specifies if this message is autoreply or not

**Example**: `true`

### requestReceipt

**type:** `boolean`

Specifies whether to add a request with the Return-Receipt-To header or not

**Example**: `true`

### requestRead

**type:** `boolean`

Specifies whether to add a request with the Disposition-Notification-To header or not

**Example**: `true`

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
  "fileLinksShareMode": 0,
  "calendarIcs": "string",
  "isAutoreply": true,
  "requestReceipt": true,
  "requestRead": true
}
```

## Returns

Message ID. A request that is not authenticated returns `401`.
