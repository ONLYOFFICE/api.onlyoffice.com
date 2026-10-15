---
title: "Get the \"Enable Conversations\" flag"
sidebar_label: "Get the \"Enable Conversations\" flag"
sidebar_class_name: api-method get
description: "Returns a flag that specifies whether to group messages into conversations or not."
---

**GET** `/api/2.0/mail/settings/conversationsEnabled`

Returns a flag that specifies whether to group messages into conversations or not.

## Returns

Boolean value: true - the flag is enabled, false - the flag is disabled. A request that is not authenticated returns `401`.
