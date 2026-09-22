---
title: "Get the \"Replace message body\" flag"
sidebar_label: "Get the \"Replace message body\" flag"
sidebar_class_name: api-method get
description: "Returns a flag that specifies whether to completely replace text of the email when inserting a template or not."
---

**GET** `/api/2.0/mail/settings/replaceMessageBody`

Returns a flag that specifies whether to completely replace text of the email when inserting a template or not.

## Returns

Boolean value: true - the flag is enabled, false - the flag is disabled. A request that is not authenticated returns `401`.
