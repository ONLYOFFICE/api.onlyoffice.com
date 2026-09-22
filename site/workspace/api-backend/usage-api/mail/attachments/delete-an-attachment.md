---
title: "Delete an attachment"
sidebar_label: "Delete an attachment"
sidebar_class_name: api-method delete
description: "Deletes the selected attachment from the message with the ID specified in the request."
---

**DELETE** `/api/2.0/mail/messages/{messageid:[0-9]+}/attachments/{attachmentid:[0-9]+}`

Deletes the selected attachment from the message with the ID specified in the request.

## Request body

### messageid

**type:** `integer`

Message ID

**Example**: `0`

### attachmentid

**type:** `integer`

Attachment ID

**Example**: `0`

## Request example

```json
{
  "messageid": 0,
  "attachmentid": 0
}
```

## Returns

The message ID which attachment was removed. A request that is not authenticated returns `401`.
