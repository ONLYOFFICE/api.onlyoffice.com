---
title: "Get a comment preview"
sidebar_label: "Get a comment preview"
sidebar_class_name: api-method post
description: "Returns a comment preview with the content specified in the request."
---

**POST** `/api/2.0/community/blog/comment/preview`

Returns a comment preview with the content specified in the request.

## Request body

### commentid

**type:** `string`

Comment ID

**Example**: `"string"`

### htmltext

**type:** `string`

Comment text in the HTML format

**Example**: `"string"`

## Request example

```json
{
  "commentid": "string",
  "htmltext": "string"
}
```

## Returns

Comment information. A request that is not authenticated returns `401`.

### CommentID

**type:** `string`

**Example**: `"12261949-db62-43c2-b956-91e12c412d5a"`

### UserID

**type:** `string`

**Example**: `"15985c13-ad91-4f2c-9286-cf991448e796"`

### UserPost

**type:** `string`

### UserFullName

**type:** `string`

**Example**: `"Administrator"`

### UserProfileLink

**type:** `string`

**Example**: `"/Products/People/Profile.aspx?user=administrator"`

### UserAvatarPath

**type:** `string`

**Example**: `"/skins/default/images/default_user_photo_size_82-82.png"`

### CommentBody

**type:** `string`

**Example**: `"das\\u000a"`

### Inactive

**type:** `boolean`

**Example**: `false`

### IsRead

**type:** `boolean`

**Example**: `true`

### IsEditPermissions

**type:** `boolean`

**Example**: `true`

### IsResponsePermissions

**type:** `boolean`

**Example**: `true`

### TimeStampStr

**type:** `string`

**Example**: `"15:39 Today"`

### CommentList

**type:** `object`

### Attachments

**type:** `Attachment[]`

## Response example

```json
{
  "CommentID": "12261949-db62-43c2-b956-91e12c412d5a",
  "UserID": "15985c13-ad91-4f2c-9286-cf991448e796",
  "UserFullName": "Administrator",
  "UserProfileLink": "/Products/People/Profile.aspx?user=administrator",
  "UserAvatarPath": "/skins/default/images/default_user_photo_size_82-82.png",
  "CommentBody": "das\\u000a",
  "Inactive": false,
  "IsRead": true,
  "IsEditPermissions": true,
  "IsResponsePermissions": true,
  "TimeStampStr": "15:39 Today",
  "Attachments": []
}
```
