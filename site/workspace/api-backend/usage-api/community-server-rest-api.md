---
title: Community Server REST API
sidebar_label: Introduction
sidebar_position: 0
description: The REST API of the ONLYOFFICE Community Server, covering documents, CRM, projects, mail, calendar and portal administration.
---

The ONLYOFFICE Community Server exposes a REST API over HTTP. Every resource — a file, a CRM
contact, a project task, a mail message — has its own URL and is manipulated in isolation with
`GET`, `POST`, `PUT` and `DELETE`.

Requests go to the portal host, `https://{host}:{port}`, where the API listens on port `8092`
by default.

## Authentication

Every request must carry an `Authorization` header holding the token returned by
[Authenticate a user](./authentication/authenticate-a-user.md). See
[Passing authentication](../get-started/passing-authentication.md) for the full exchange and
for examples in several languages.

A request without a valid token is answered with `401`.

## Making requests

Set both the `Content-Type` and the `Accept` header to `application/json`. Responses are JSON:
a successful call returns a status code in the 200 range and the result described on each
operation page.

See [Basic concepts](../get-started/basic-concepts.md) for the conventions shared by every
method.
