---
sidebar_position: -1
---

# Load balancing with shard key

Starting from version 8.1, the *shardkey* parameter is added to the URL *QueryString* when sending requests to the ONLYOFFICE Docs API, **document command service**, **document conversion service**, or **document builder service**. It is also added to the browser-server interaction during the collaborative editing as the [WOPISrc](../../using-wopi/key-concepts.md#wopisrc) query parameter.

The *key* field is used as a value. For example, *?shardkey=Khirz6zTPdfd7*. If there is no key in the body, you do not have to send it (for example, in the [getForgottenList](../../additional-api/command-service/getforgottenlist.md) command).

This is a recommendation when working with an editor server cluster to load balance requests during the collaborative editing: all users editing the same document are served by the same server.
