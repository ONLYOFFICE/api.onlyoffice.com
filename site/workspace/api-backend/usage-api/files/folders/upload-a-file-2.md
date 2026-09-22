---
title: "Upload a file"
sidebar_label: "Upload a file"
sidebar_class_name: api-method post
description: "Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method."
---

**POST** `/api/2.0/files/{folderId}/upload`

Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.

**Note**: You can upload files in two different ways:
             
1. Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.
            
2. Using standart multipart/form-data method.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

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

List of files when specified as multipart/form-data

### createNewIfExist

**type:** `boolean[]`

Specifies whether to create a new file if it already exists or not

### storeOriginalFileFlag

**type:** `boolean[]`

Specifies whether to upload documents in the original formats as well or not

### keepConvertStatus

**type:** `boolean`

Specifies whether to keep the file converting status or not

**Example**: `true`

## Request example

```json
{
  "files": [
    "string"
  ],
  "createNewIfExist": [
    true
  ],
  "storeOriginalFileFlag": [
    true
  ],
  "keepConvertStatus": true
}
```

## Returns

Uploaded file(s). A request that is not authenticated returns `401`.
