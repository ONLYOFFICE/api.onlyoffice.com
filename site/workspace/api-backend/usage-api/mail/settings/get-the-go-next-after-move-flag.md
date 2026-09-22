---
title: "Get the \"Go next after move\" flag"
sidebar_label: "Get the \"Go next after move\" flag"
sidebar_class_name: api-method get
description: "Returns a flag that specifies whether to go to the next message after moving/deleting the currently viewed or return to the current folder."
---

**GET** `/api/2.0/mail/settings/goNextAfterMoveEnabled`

Returns a flag that specifies whether to go to the next message after moving/deleting the currently viewed or return to the current folder.

## Returns

Boolean value: true - the flag is enabled, false - the flag is disabled. A request that is not authenticated returns `401`.
