---
title: "Send a message quickly"
sidebar_label: "Send a message quickly"
sidebar_class_name: api-method put
description: "Sends a message quickly specifying the sender, recipients, message subject, and message body."
---

**PUT** `/api/2.0/mail/messages/simpleSend`

Sends a message quickly specifying the sender, recipients, message subject, and message body.

## Request body

### from

**type:** `string`

Mail address from which a letter will be sent. Format: Name &lt;name@domain&gt;

**Example**: `"string"`

### to

**type:** `string[]`

List of mail addresses to which a letter will be sent. Format: Name &lt;name@domain&gt;

### subject

**type:** `string`

Message subject

**Example**: `"string"`

### body

**type:** `string`

Message body as the HTML string

**Example**: `"string"`

### isReceipt

**type:** `boolean`

Specifies if the receipt is returned to the sender or not

**Example**: `true`

## Request example

```json
{
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "body": "string",
  "isReceipt": true
}
```

## Returns

Boolean value: true if a message was sent successfully. A request that is not authenticated returns `401`.
