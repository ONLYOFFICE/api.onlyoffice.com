---
title: "Get the \"Always display external images\" flag"
sidebar_label: "Get the \"Always display external images\" flag"
sidebar_class_name: api-method get
description: "Returns a flag that specifies whether to display external images in the messages or not."
---

**GET** `/api/2.0/mail/settings/alwaysDisplayImages`

Returns a flag that specifies whether to display external images in the messages or not.

## Returns

Boolean value: true - the flag is enabled, false - the flag is disabled. A request that is not authenticated returns `401`.
