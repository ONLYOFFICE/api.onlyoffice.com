---
title: "Generate the login history report"
sidebar_label: "Generate the login history report"
sidebar_class_name: api-method post
description: "Generates the login history report."
---

**POST** `/api/2.0/security/audit/login/report`

Generates the login history report.

## Returns

URL to the xlsx report file. A request that is not authenticated returns `401`.
