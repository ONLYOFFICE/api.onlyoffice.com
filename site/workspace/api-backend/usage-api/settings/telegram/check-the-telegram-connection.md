---
title: "Check the Telegram connection"
sidebar_label: "Check the Telegram connection"
sidebar_class_name: api-method get
description: "Checks if the current user is connected to the Telegram Bot or not."
---

**GET** `/api/2.0/settings/telegramisconnected`

Checks if the current user is connected to the Telegram Bot or not.

## Returns

Integer value: 0 - not connected, 1 - connected, 2 - awaiting confirmation. A request that is not authenticated returns `401`.
