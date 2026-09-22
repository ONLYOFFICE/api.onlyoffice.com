---
title: "Attach a document"
sidebar_label: "Attach a document"
sidebar_class_name: api-method post
description: "Attaches a document to the message with the ID specified in the request."
---

**POST** `/api/2.0/mail/messages/{id:[0-9]+}/document`

Attaches a document to the message with the ID specified in the request.

## Request body

### id

**type:** `integer`

Message ID

**Example**: `0`

### fileId

**type:** `string`

Document ID

**Example**: `"string"`

### version

**type:** `string`

Document version

**Example**: `"string"`

### needSaveToTemp

**type:** `boolean`

Specifies if this document needs to be saved to a template message or not

**Example**: `true`

## Request example

```json
{
  "id": 0,
  "fileId": "string",
  "version": "string",
  "needSaveToTemp": true
}
```

## Returns

Attached document. A request that is not authenticated returns `401`.

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
