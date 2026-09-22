---
title: "Add an attachment"
sidebar_label: "Add an attachment"
sidebar_class_name: api-method post
description: "Adds an attachment to the draft with the ID specified in the request."
---

**POST** `/api/2.0/mail/messages/attachment/add`

Adds an attachment to the draft with the ID specified in the request.

## Request body

### id_message

**type:** `integer`

Message ID

**Example**: `0`

### name

**type:** `string`

File name

**Example**: `"string"`

### file

**type:** `object`

File stream

### content_type

**type:** `string`

File content type

**Example**: `"string"`

## Request example

```json
{
  "id_message": 0,
  "name": "string",
  "file": {},
  "content_type": "string"
}
```

## Returns

Mail attachment. A request that is not authenticated returns `401`.

### fileId

**type:** `integer`

**Example**: `1234`

### fileName

**type:** `string`

**Example**: `"fileName"`

### size

**type:** `integer`

**Example**: `1234`

### contentType

**type:** `string`

**Example**: `"contentType"`

### needSaveToTemp

**type:** `boolean`

**Example**: `true`

### contentId

**type:** `string`

**Example**: `"contentId"`

### fileNumber

**type:** `integer`

**Example**: `333`

### storedName

**type:** `string`

**Example**: `"storedName"`

### streamId

**type:** `string`

**Example**: `"streamId"`

### attachedAsLink

**type:** `boolean`

**Example**: `true`

### tempStoredUrl

**type:** `string`

**Example**: `"tempStoredUrl"`

## Response example

```json
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
```
