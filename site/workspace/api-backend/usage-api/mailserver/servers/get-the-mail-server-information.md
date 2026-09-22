---
title: "Get the mail server information"
sidebar_label: "Get the mail server information"
sidebar_class_name: api-method get
description: "Returns full information on the mail server associated with the current tenant."
---

**GET** `/api/2.0/mailserver/serverinfo/get`

Returns full information on the mail server associated with the current tenant.

## Returns

Full mail server information for the current tenant. A request that is not authenticated returns `401`.

### Server

**type:** `ServerData`

### Domains

**type:** `ServerDomainData[]`

### Mailboxes

**type:** `ServerMailboxData[]`

### Mailgroups

**type:** `ServerDomainGroupData[]`

## Response example

```json
{
  "Server": {
    "Id": 1234,
    "Dns": {
      "Id": 1234,
      "MxRecord": {
        "Host": "Host",
        "Priority": 1234,
        "IsVerified": true
      },
      "SpfRecord": {
        "Name": "name",
        "Value": "value",
        "IsVerified": true
      },
      "DkimRecord": {
        "Selector": "Selector",
        "PublicKey": "PublicKey",
        "IsVerified": true
      },
      "DomainCheckRecord": {
        "Name": "name",
        "Value": "value",
        "IsVerified": true
      },
      "IsVerified": true
    },
    "ServerLimits": {
      "MailboxMaxCountPerUser": 5
    }
  },
  "Domains": [
    {
      "Id": "id",
      "IsSharedDomain": true,
      "Name": "Name",
      "Dns": {
        "Id": 1234,
        "MxRecord": {
          "Host": "Host",
          "Priority": 1234,
          "IsVerified": true
        },
        "SpfRecord": {
          "Name": "name",
          "Value": "value",
          "IsVerified": true
        },
        "DkimRecord": {
          "Selector": "Selector",
          "PublicKey": "PublicKey",
          "IsVerified": true
        },
        "DomainCheckRecord": {
          "Name": "name",
          "Value": "value",
          "IsVerified": true
        },
        "IsVerified": true
      }
    }
  ],
  "Mailboxes": [
    {
      "Id": 1234,
      "UserId": "UserId",
      "UserDisplayName": "UserDisplayName",
      "Address": {
        "Id": 1234,
        "DomainId": 1234,
        "Email": "Email@only.com"
      },
      "Name": "Name",
      "Aliases": [
        {
          "Id": 1234,
          "DomainId": 1234,
          "Email": "Email@only.com"
        }
      ]
    }
  ],
  "Mailgroups": [
    {
      "Id": 1234,
      "Address": {
        "Id": 1234,
        "DomainId": 1234,
        "Email": "Email@only.com"
      },
      "Addresses": [
        {
          "Id": 1234,
          "DomainId": 1234,
          "Email": "Email@only.com"
        }
      ]
    }
  ]
}
```
