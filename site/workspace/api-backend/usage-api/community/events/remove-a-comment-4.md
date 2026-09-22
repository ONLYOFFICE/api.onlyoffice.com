---
title: "Remove a comment"
sidebar_label: "Remove a comment"
sidebar_class_name: api-method delete
description: "Removes a comment with the ID specified in the request."
---

**DELETE** `/api/2.0/community/event/comment/{commentid}`

Removes a comment with the ID specified in the request.

## Path parameters

### commentid

**type:** `string`

Comment ID

**Example**: `"string"`

## Returns

Comment information. A request that is not authenticated returns `401`.
