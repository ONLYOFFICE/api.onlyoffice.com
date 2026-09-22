---
title: "Check filter results"
sidebar_label: "Check filter results"
sidebar_class_name: api-method post
description: "Checks the results of a filter specified in the request."
---

**POST** `/api/2.0/mail/filters/check`

Checks the results of a filter specified in the request.

## Request body

### filter

**type:** `object`

Filter parameters: ID, name, position, enabled, conditions, actions, options

### page

**type:** `integer[]`

Page number

### pageSize

**type:** `integer[]`

Number of messages on the page

## Request example

```json
{
  "page": [
    0
  ],
  "pageSize": [
    0
  ]
}
```

## Returns

List of messages. A request that is not authenticated returns `401`.

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
