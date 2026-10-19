---
description: Overview of basic Embed SDK samples, grouped by SDK area.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Basic samples

These samples each demonstrate a single DocSpace Embed SDK mode or method in isolation. Use them as a quick reference before combining several calls into a real integration, like the ones in [Advanced samples](../advanced-samples/index.md).

Not every SDK method has a dedicated sample yet. For the complete list, see the [SDK](../../usage-sdk/classes/SDK.md) reference for the init methods and the [SDKInstance](../../usage-sdk/classes/SDKInstance.md) reference for the instance methods.

## Authentication and session

| Sample | Description |
| --- | --- |
| [Create password hash](create-hash.md) | Generate a password hash using the DocSpace JS SDK. |
| [Login](login.md) | Log in to DocSpace using the JS SDK with password hashing. |
| [Logout](logout.md) | Log out a user from the DocSpace session using the JS SDK. |
| [Get hash settings](get-hash-settings.md) | Retrieve hash settings from the DocSpace frame using the JS SDK. |
| [Get user info](get-user-info.md) | Retrieve user information using the DocSpace JS SDK. |

## Frame initialization

| Sample | Description |
| --- | --- |
| [Initialize frame](init-frame.md) | Initialize a DocSpace frame in the mode set by the `mode` config field. |
| [Initialize manager](init-manager.md) | Initialize the DocSpace manager using the JS SDK. |
| [Initialize editor](init-editor.md) | Open a document in the DocSpace editor using the JS SDK. |
| [Initialize viewer](init-viewer.md) | Embed a read-only document viewer using the JS SDK. |
| [Initialize file selector](init-file-selector.md) | Initialize the DocSpace file selector using the JS SDK. |
| [Initialize room selector](init-room-selector.md) | Embed the room selection interface using the JS SDK. |
| [Initialize system](init-system.md) | Initialize the DocSpace system interface using the JS SDK. |
| [Destroy frame](destroy-frame.md) | Remove the embedded DocSpace iframe using the JS SDK. |
| [Mark iframe as loaded](mark-iframe-as-loaded.md) | Mark the DocSpace iframe as loaded using the JS SDK. |

## Frame configuration and UI

| Sample | Description |
| --- | --- |
| [Get config](get-config.md) | Retrieve the embedded frame configuration using the JS SDK. |
| [Set config](set-config.md) | Update the embedded frame configuration using the JS SDK. |
| [Set list view](set-list-view.md) | Change the file list display mode using the JS SDK. |
| [Open modal](open-modal.md) | Open a modal window in DocSpace using the JS SDK. |
| [Get selection](get-selection.md) | Retrieve the current selection in DocSpace using the JS SDK. |

## Rooms and folders

| Sample | Description |
| --- | --- |
| [Create room](create-room.md) | Create a new shared room using the DocSpace JS SDK. |
| [Get rooms](get-rooms.md) | Retrieve available rooms using the DocSpace JS SDK. |
| [Create folder](create-folder.md) | Create a folder in a DocSpace room using the JS SDK. |
| [Get folders](get-folders.md) | Retrieve a list of folders from a room using the JS SDK. |
| [Get folder info](get-folder-info.md) | Retrieve current folder information using the JS SDK. |

## Files

| Sample | Description |
| --- | --- |
| [Create file](create-file.md) | Create a new file inside a DocSpace room using the JS SDK. |
| [Get files](get-files.md) | Retrieve a list of files from a room using the JS SDK. |
| [Get files and folders list](get-files-and-folders-list.md) | Retrieve files and folders from a room using the JS SDK. |

## Tags

| Sample | Description |
| --- | --- |
| [Create tag](create-tag.md) | Create a custom tag in DocSpace using the JS SDK. |
| [Add tags to room](add-tags-to-room.md) | Add custom tags to a DocSpace room using the JS SDK. |
| [Remove tags from room](remove-tags-from-room.md) | Remove tags from a DocSpace room using the JS SDK. |
