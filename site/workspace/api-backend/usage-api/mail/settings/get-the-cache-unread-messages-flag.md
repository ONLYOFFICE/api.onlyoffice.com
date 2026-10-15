---
title: "Get the \"Cache unread messages\" flag"
sidebar_label: "Get the \"Cache unread messages\" flag"
sidebar_class_name: api-method get
description: "Returns a flag that specifies whether to cache unread messages or not."
---

**GET** `/api/2.0/mail/settings/cacheMessagesEnabled`

Returns a flag that specifies whether to cache unread messages or not.

## Returns

Boolean value: true - the flag is enabled, false - the flag is disabled. A request that is not authenticated returns `401`.
