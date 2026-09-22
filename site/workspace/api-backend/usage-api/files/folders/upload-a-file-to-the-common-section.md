---
title: "Upload a file to the \"Common\" section"
sidebar_label: "Upload a file to the \"Common\" section"
sidebar_class_name: api-method post
description: "Uploads a file specified in the request to the \"Common\" section by single file uploading or standart multipart/form-data method."
---

**POST** `/api/2.0/files/@common/upload`

Uploads a file specified in the request to the "Common" section by single file uploading or standart multipart/form-data method.

**Note**: You can upload files in two different ways:
             
1. Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.
            
2. Using standart multipart/form-data method.

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

## Request example

```json
{
  "file": {},
  "contentType": {},
  "contentDisposition": {},
  "files": [
    "string"
  ]
}
```

## Returns

Uploaded file(s). A request that is not authenticated returns `401`.
