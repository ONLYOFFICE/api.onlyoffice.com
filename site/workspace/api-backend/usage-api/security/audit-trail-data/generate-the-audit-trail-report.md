---
title: "Generate the audit trail report"
sidebar_label: "Generate the audit trail report"
sidebar_class_name: api-method post
description: "Generates the audit trail report."
---

**POST** `/api/2.0/security/audit/events/report`

Generates the audit trail report.

## Returns

URL to the xlsx report file. A request that is not authenticated returns `401`.
