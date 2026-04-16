---
sidebar_position: -6
sidebar_label: Introduction
title: Introducing ONLYOFFICE DocSpace
---

[ONLYOFFICE DocSpace](https://www.onlyoffice.com/docspace.aspx) is a collaborative cloud platform that allows users to edit and collaborate on documents, spreadsheets, presentations, PDFs, and forms in customizable rooms. It provides the following features:

- [creating and customizing rooms for collaboration](#step-3-create-a-room);
- creating, editing and viewing text documents, spreadsheets, presentations, fillable forms, PDFs, ebooks, multimedia files;
- inviting users to collaborate on files in real time.

## Basic concepts

Before getting started with ONLYOFFICE DocSpace, here are some terms to get familiar with: 

- **Portal:** Your personal DocSpace cloud containing your rooms with all your documents and files.
- **Rooms:** Rooms offer a space for users to create, edit, and work on files independently or collaboratively. DocSpace offers different types of rooms (Collaboration, Editing, Public, Custom, Form filling, and Virtual data rooms) based on your specific needs.
- **Users:** People with access to your DocSpace portal. Users are split between owners, and other members who can access some documents and files in DocSpace.

## Quickstart

Follow these steps to get started with ONLYOFFICE DocSpace:

### Step 1: Get ONLYOFFICE DocSpace

ONLYOFFICE offers these ways to access and use DocSpace:

- **Remote server**: This method requires no installation. [Sign up to DocSpace](https://www.onlyoffice.com/docspace-registration?utm_source=api&utm_medium=article&utm_campaign=mcpserver) to get started and access your DocSpace portal. 
- **Local server**: [ONLYOFFICE DocSpace](https://www.onlyoffice.com/download-developer.aspx#docspace-developer) is available for Windows, Linux and Docker. Follow the instructions in **ONLYOFFICE Help Center** to install on your local server:

    - [Get ONLYOFFICE DocSpace for Windows](https://helpcenter.onlyoffice.com/docspace/installation/docspace-developer-install-windows.aspx?from=api)
    - [Get ONLYOFFICE DocSpace for Linux](https://helpcenter.onlyoffice.com/docspace/installation/docspace-developer-install-script.aspx?from=api)
    - [Get ONLYOFFICE DocSpace for Docker](https://helpcenter.onlyoffice.com/docspace/installation/docspace-developer-install-script.aspx?from=api)

### Step 2:  Authenticate your account

Authenticate your account using API keys, OAuth, or any of the other [authentication methods](authentication/authentication.md) available on ONLYOFFICE DocSpace. This quickstart uses API keys. Follow these steps on [how to create and use API keys](./authentication/api-keys.md#how-to-create-api-keys) for your request.

### Step 3: Create a room

This sample request creates an **Editing Room** titled **Graduation Planning**.

:::note
Set your Content-Type and Accept headers to application/json, as every endpoint in the DocSpace API supports JSON.
:::

```http

POST /api/2.0/files/rooms HTTP/1.1
Host: yourportal.onlyoffice.com
Content-Type: application/json
Authorization: Bearer API_KEY
Content-Length: 115

{
    "title": "Chi's bridal shower",
    "roomType": "PublicRoom",
    "color": "Red",
    "private": false
    
}

```

**Where**:

- **API_KEY**: ONLYOFFICE API key.
- **yourportal**: Your DocSpace portal

You can send requests to customize and change room details to fit your specific needs.

### Decoding responses

| **Response codes** | **Meaning**                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| 200                | Successful query, delete, update, or read request.                               |
| 201                | Successfully created a new record.                                               |
| 404                | Requested resource not found.                                                    |
| 407                | Proxy authentication error from invalid/incorrect authentication credentials.    |
| 429                | Exceeded rate limit.                                                             |

- Any non-200 response status code indicates an unsuccessful response with error information in response content. 

For instance, if a requested record could not be found, the HTTP response might look something like:

```http
HTTP/1.1 404 Not Found
```

### Rate limiting

ONLYOFFICE DocSpace has some restrictions on authenticated requests:

- Up to 1500 authenticated requests per minute.
- Up to 50 simultaneous GET authenticated requests.
- Up to 15 simultaneous authenticated requests of any type except GET.
- Some methods have additional restrictions. For example, you can perform up to 5 authenticated requests per minute to collect passwords.

Exceeding the rate limit generates the **429 Too Many Requests** response for subsequent requests and may contain additional header information like:

- **X-Ratelimit-Limit**. Request limit per time span: 100/30m.
- **X-Ratelimit-Remaining**. The number of requests left for the time window.
- **X-Ratelimit-Reset**. The remaining window before the rate limit resets in seconds.