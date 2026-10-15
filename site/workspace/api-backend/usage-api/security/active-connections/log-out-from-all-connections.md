---
title: "Log out from all connections"
sidebar_label: "Log out from all connections"
sidebar_class_name: api-method put
description: "Logs out from all the active connections except the current connection."
---

**PUT** `/api/2.0/security/activeconnections/logoutallexceptthis`

Logs out from all the active connections except the current connection.

## Returns

Current user name. A request that is not authenticated returns `401`.
