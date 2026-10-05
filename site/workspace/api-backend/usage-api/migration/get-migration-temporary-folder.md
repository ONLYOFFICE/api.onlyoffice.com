---
title: "Get migration temporary folder"
sidebar_label: "Get migration temporary folder"
sidebar_class_name: api-method get
description: "Returns the temporary folder where all the migration files are stored."
---

**GET** `/api/2.0/migration/tmp`

Returns the temporary folder where all the migration files are stored.

## Returns

Path to the migration temporary folder. A request that is not authenticated returns `401`.
