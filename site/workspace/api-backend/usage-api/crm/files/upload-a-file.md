---
title: "Upload a file"
sidebar_label: "Upload a file"
sidebar_class_name: api-method post
description: "Uploads a file to the CRM module with the parameters specified in the request."
---

**POST** `/api/2.0/crm/{entityType:(contact|opportunity|case)}/{entityid:[0-9]+}/files/upload`

Uploads a file to the CRM module with the parameters specified in the request.

**Note**: Upload can be done in 2 different ways:
             
1. Single file upload. You should set the Content-Type &amp; Content-Disposition headers to specify file name and content type, and send a file in the request body.
            
2. Using standart multipart/form-data method.

## Request body

### entityType

**type:** `string`

Related entity type

**Example**: `"string"`

### entityid

**type:** `integer`

Related entity ID

**Example**: `0`

### file

**type:** `object`

Request input stream

### contentType

**type:** `object`

Content-Type header

### contentDisposition

**type:** `object`

Content-Disposition header

### files

**type:** `string[]`

List of files when posted as multipart/form-data

### storeOriginalFileFlag

**type:** `boolean`

Defines if the documents in the original formats are also stored or not

**Example**: `true`

## Request example

```json
{
  "entityType": "string",
  "entityid": 0,
  "file": {},
  "contentType": {},
  "contentDisposition": {},
  "files": [
    "string"
  ],
  "storeOriginalFileFlag": true
}
```

## Returns

File information. A request that is not authenticated returns `401`.

### Name

**type:** `string`

**Example**: `"File name"`

### UpdatedBy

**type:** `EmployeeWraper`

### Updated

**type:** `string`

**Example**: `"2020-12-08T17:37:03.3424957Z"`

### Location

**type:** `string`

**Example**: `"4\\\\46\\\\File name"`

## Response example

```json
{
  "Name": "File name",
  "UpdatedBy": {
    "Id": "00000000-0000-0000-0000-000000000000",
    "DisplayName": "Mike Zanyatski",
    "Title": "Manager",
    "AvatarSmall": "url to small avatar",
    "ProfileUrl": "/Products/People/Profile.aspx?user=administrator"
  },
  "Updated": "2020-12-08T17:37:03.3424957Z",
  "Location": "4\\\\46\\\\File name"
}
```
