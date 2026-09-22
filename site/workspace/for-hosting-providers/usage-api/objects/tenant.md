---
title: Tenant
sidebar_position: 1
sidebar_label: Tenant
description: The portal description returned by the Hosted Solution methods.
---

The portal description. Returned by [List portals](../portal/list-portals.md),
[Register a new portal](../portal/register-a-new-portal.md),
[Delete a portal](../portal/delete-a-portal.md),
[Change portal activation status](../portal/change-portal-activation-status.md),
[Get tariff](../billing/get-tariff.md) and [Set tariff](../billing/set-tariff.md).

## tenantId

**type:** `integer`

**Example**: `1`

## portalName

**type:** `string`

Portal name.

**Example**: `"example"`

## domain

**type:** `string`

**Example**: `"example.com"`

## created

**type:** `string`

**Example**: `"2010-07-07T15:46:00"`, `"2014-02-07T20:14:00"`

## status

**type:** `string`

**Example**: `"Active"`

## ownerId

**type:** `string`

**Example**: `"78e1e841-8314-4846-8fc0-e7d6451b6475"`, `"be7bc931-b966-493e-a8b5-56fc7d21f9c8"`

## language

**type:** `string`

Portal language.

**Example**: `"en-US"`, `"de-DE"`

## timeZoneName

**type:** `string`

Portal time zone.

**Example**: `"UTC"`, `"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"`
