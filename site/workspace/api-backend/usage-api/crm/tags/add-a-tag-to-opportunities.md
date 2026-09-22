---
title: "Add a tag to opportunities"
sidebar_label: "Add a tag to opportunities"
sidebar_class_name: api-method post
description: "Adds the selected tag to the group of opportunities with the parameters specified in the request."
---

**POST** `/api/2.0/crm/opportunity/filter/taglist`

Adds the selected tag to the group of opportunities with the parameters specified in the request.

## Request body

### responsibleid

**type:** `string`

Opportunity responsible ID

**Example**: `"string"`

### opportunityStagesid

**type:** `integer`

Opportunity stage ID

**Example**: `0`

### tags

**type:** `string[]`

Opportunity tags

### contactid

**type:** `integer`

Contact ID

**Example**: `0`

### stageType

**type:** `integer[]`

Opportunity stage type

### contactAlsoIsParticipant

**type:** `boolean[]`

Participation status: take into account opportunities where the contact is a participant or not

### fromDate

**type:** `string`

Start date

**Example**: `"string"`

### toDate

**type:** `string`

End date

**Example**: `"string"`

### tagName

**type:** `string`

Tag name

**Example**: `"string"`

## Request example

```json
{
  "responsibleid": "string",
  "opportunityStagesid": 0,
  "tags": [
    "string"
  ],
  "contactid": 0,
  "stageType": [
    0
  ],
  "contactAlsoIsParticipant": [
    true
  ],
  "fromDate": "string",
  "toDate": "string",
  "tagName": "string"
}
```

## Returns

Tag. A request that is not authenticated returns `401`.
