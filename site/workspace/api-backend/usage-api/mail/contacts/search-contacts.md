---
title: "Search contacts"
sidebar_label: "Search contacts"
sidebar_class_name: api-method get
description: "Searches for contacts by their names, last names, or emails."
---

**GET** `/api/2.0/mail/emails/search`

Searches for contacts by their names, last names, or emails.

## Request body

### term

**type:** `string`

The string part of the contact name, last name, or email address

**Example**: `"string"`

## Request example

```json
{
  "term": "string"
}
```

## Returns

List of strings in the following format: "Name Last name" email. A request that is not authenticated returns `401`.

## Response example

```json
[
  "string"
]
```
