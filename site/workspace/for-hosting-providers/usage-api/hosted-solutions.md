---
title: Hosted Solutions
sidebar_label: Overview
sidebar_position: 1
description: The REST API of the ONLYOFFICE Hosted Solution, used to register, list, suspend and delete portals and to manage their pricing plans.
---

The ONLYOFFICE Hosted Solution exposes a REST API over HTTP for registering portals, listing
and suspending them, and reading or changing their pricing plans.

Requests go to the Hosted Solution host, `https://{host}:{port}`, where the API listens on
port `8092` by default. Every request must carry an `Authorization` header — see
[Authentication](../get-started/authentication.md) for the token format and for examples of
generating one.

Set both the `Content-Type` and the `Accept` header to `application/json`. Responses are JSON;
a failed request returns a non-200 status code and an `error` code in the body, listed in
[Errors](./errors.md).

## Portal

| Operation | Method | Path |
| --- | --- | --- |
| [List portals](./portal/list-portals.md) | `GET` | `/api/portal/get` |
| [Register a new portal](./portal/register-a-new-portal.md) | `POST` | `/api/portal/register` |
| [Delete a portal](./portal/delete-a-portal.md) | `DELETE` | `/api/portal/remove` |
| [Change portal activation status](./portal/change-portal-activation-status.md) | `PUT` | `/api/portal/status` |
| [Validate portal name](./portal/validate-portal-name.md) | `POST` | `/api/portal/validateportalname` |

## Billing

| Operation | Method | Path |
| --- | --- | --- |
| [Get tariff](./billing/get-tariff.md) | `GET` | `/api/tariff/get` |
| [Set tariff](./billing/set-tariff.md) | `PUT` | `/api/tariff/set` |

## Objects

| Object | Description |
| --- | --- |
| [Tenant](./objects/tenant.md) | The portal description. |
| [Tariff](./objects/tariff.md) | The portal pricing plan. |
