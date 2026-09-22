---
title: "Update the phone number settings"
sidebar_label: "Update the phone number settings"
sidebar_class_name: api-method put
description: "Updates the settings of the phone number with the ID specified in the request."
---

**PUT** `/api/2.0/crm/voip/numbers/{numberId:\w+}/settings`

Updates the settings of the phone number with the ID specified in the request.

## Request body

### numberId

**type:** `string`

Phone number ID

**Example**: `"string"`

### greeting

**type:** `string`

New first greeting that callers hear when they call to this phone number

**Example**: `"string"`

### holdUp

**type:** `string`

New music on hold that callers hear when they are placed in the waiting queue

**Example**: `"string"`

### wait

**type:** `string`

New URL to which the customer is redirected to the voice mail service when the waiting timeout is exceeded

**Example**: `"string"`

### voiceMail

**type:** `string`

New message that callers hear when the waiting queue length or max waiting time is exceeded and the callers are able to leave a voicemail message

**Example**: `"string"`

### workingHours

**type:** `object`

New phone number working hours

### allowOutgoingCalls

**type:** `boolean[]`

Defines if a phone number allows making the outgoing calls or not

### record

**type:** `boolean[]`

Defines if the phone number allows recording the calls or not

### alias

**type:** `string`

New phone number alias

**Example**: `"string"`

## Request example

```json
{
  "numberId": "string",
  "greeting": "string",
  "holdUp": "string",
  "wait": "string",
  "voiceMail": "string",
  "allowOutgoingCalls": [
    true
  ],
  "record": [
    true
  ],
  "alias": "string"
}
```

## Returns

Updated phone number settings. A request that is not authenticated returns `401`.
