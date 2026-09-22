---
title: Tariff
sidebar_position: 2
sidebar_label: Tariff
description: The portal pricing plan returned by the Hosted Solution billing methods.
---

The portal pricing plan. Returned by [Get tariff](../billing/get-tariff.md) and
[Set tariff](../billing/set-tariff.md), and set by [Set tariff](../billing/set-tariff.md).

## activeUsers

**type:** `integer`

Number of active users.

**Example**: `50`

## dueDate

**type:** `string`

End date of the portal pricing plan.

**Example**: `"2016-07-13"`

## features

**type:** `string`

List of available features.

**Example**: `"whitelabel"`

## maxFileSize

**type:** `number`

Maximum size of a single uploaded file, in bytes. The default is 26214400 (25 megabytes).
The value is stored in megabytes, so it can come back rounded down — see
[`maxFileSize`](../billing/set-tariff.md#maxfilesize).

**Example**: `104857600`

## maxTotalSize

**type:** `number`

Maximum size of the portal disk space, in bytes. Unlimited by default.

**Example**: `1073741824`
