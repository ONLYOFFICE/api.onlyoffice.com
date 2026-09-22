---
title: "Chunked upload"
sidebar_label: "Chunked upload"
sidebar_class_name: api-method post
description: "Creates a session to upload large files in multiple chunks to the folder with the ID specified in the request."
---

**POST** `/api/2.0/files/{folderId}/upload/create_session`

Creates a session to upload large files in multiple chunks to the folder with the ID specified in the request.

**Note**: Each chunk can have different length but the length should be multiple of **512** and greater or equal to **10 mb**. Last chunk can have any size.
            After the initial response to the request with the **200 OK** status, you must get the *location* field value from the response. Send all your chunks to this location.
            Each chunk must be sent in the exact order the chunks appear in the file.
            After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.
            When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the **201 Created** status and sends you information about the uploaded file.

## Path parameters

### folderId

**type:** `string`

Folder ID

**Example**: `"string"`

## Request body

### fileName

**type:** `string`

File name

**Example**: `"string"`

### fileSize

**type:** `integer`

File length in bytes

**Example**: `0`

### relativePath

**type:** `string`

Relative path to the folder

**Example**: `"string"`

### encrypted

**type:** `boolean`

Specifies whether to encrypt a file or not

**Example**: `true`

## Request example

```json
{
  "fileName": "string",
  "fileSize": 0,
  "relativePath": "string",
  "encrypted": true
}
```

## Returns

Information about created session which includes:
            
- **id:** unique ID of this upload session
            
- **created:** UTC time when the session was created
            
- **expired:** UTC time when the session will expire if no chunks are sent before that time
            
- **location:** URL where you should send your next chunk
            
- **bytes_uploaded:** number of bytes uploaded for the specific upload ID
            
- **bytes_total:** total number of bytes which will be uploaded
