---
title: "Get providers"
sidebar_label: "Get providers"
sidebar_class_name: api-method get
description: "Returns a list of the available providers."
---

**GET** `/api/2.0/files/thirdparty/capabilities`

Returns a list of the available providers.

**Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.

## Returns

List of provider keys. A request that is not authenticated returns `401`.

## Response example

```json
[
  [
    "string"
  ]
]
```
