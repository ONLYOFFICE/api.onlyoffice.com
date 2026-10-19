---
title: "Log out and change password"
sidebar_label: "Log out and change password"
sidebar_class_name: api-method put
description: "Logs out from all the active connections for the current user and changes their password."
---

**PUT** `/api/2.0/security/activeconnections/logoutallchangepassword`

Logs out from all the active connections for the current user and changes their password.

## Returns

URL to the confirmation message for changing a password. A request that is not authenticated returns `401`.
