---
title: "Get the invoice pdf file"
sidebar_label: "Get the invoice pdf file"
sidebar_class_name: api-method get
description: "Returns the pdf file related to an invoice with the ID specified in the request."
---

**GET** `/api/2.0/crm/invoice/{invoiceid:[0-9]+}/pdf`

Returns the pdf file related to an invoice with the ID specified in the request.

## Request body

### invoiceid

**type:** `integer`

Invoice ID

**Example**: `0`

## Request example

```json
{
  "invoiceid": 0
}
```

## Returns

Pdf file. A request that is not authenticated returns `401`.

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
