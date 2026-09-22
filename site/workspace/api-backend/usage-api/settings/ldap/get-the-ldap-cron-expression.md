---
title: "Get the LDAP cron expression"
sidebar_label: "Get the LDAP cron expression"
sidebar_class_name: api-method get
description: "Returns the LDAP autosynchronous cron expression for the current portal if it exists."
---

**GET** `/api/2.0/settings/ldap/cron`

Returns the LDAP autosynchronous cron expression for the current portal if it exists.

## Returns

Cron expression or null. A request that is not authenticated returns `401`.
