# FolderPayload
The folder carried by a folder.* webhook. room.* and agent.* webhooks carry a room in their own payload; a room a folder.* webhook is about (folder.downloaded of a whole room) comes in this shape, told apart by `type`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | [**EntryId**](entry-id.md) |  | [optional] |
| **parentId** | [**EntryId**](entry-id.md) |  | [optional] |
| **rootFolderId** | [**EntryId**](entry-id.md) |  | [optional] |
| **title** | **String** | The name of the entry as shown in the portal; for a file it includes the extension. | [optional] |
| **fileEntryType** | **Integer** | Tells a folder or room payload (1) from a file payload (2), so a receiver can pick the schema to read the rest of the object with. Flags of `FileEntryType`: 1 = Folder, 2 = File. | [optional] |
| **created** | **Date** (date-time) | When the entry was created, in UTC. | [optional] |
| **createdBy** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **updated** | **Date** (date-time) | When the entry was last changed, in UTC; equal to `created` for an entry that has not changed since. | [optional] |
| **updatedBy** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **rootFolderType** | **Integer** | The kind of top-level section the entry sits in, such as My documents, Rooms, Archive or Trash. Values of `FolderType`: 0 = DEFAULT, 1 = COMMON, 2 = BUNCH, 3 = TRASH, 5 = USER, 6 = SHARE, 8 = Projects, 10 = Favorites, 11 = Recent, 12 = Templates, 13 = Privacy, 14 = VirtualRooms, 15 = FillingFormsRoom, 16 = EditingRoom, 19 = CustomRoom, 20 = Archive, 21 = ThirdpartyBackup, 22 = PublicRoom, 25 = ReadyFormFolder, 26 = InProcessFormFolder, 27 = FormFillingFolderDone, 28 = FormFillingFolderInProgress, 29 = VirtualDataRoom, 30 = RoomTemplates, 31 = AiRoom, 32 = Knowledge, 33 = ChatOutputs, 34 = AiAgents, 35 = DefaultTemplates, 36 = Forms, 37 = Ai, 38 = InstructionsRoom, 39 = KnowledgeRoom, 40 = AiProjectRoom, 41 = AiHub, 42 = PrivateRooms. | [optional] |
| **parentRoomType** | **Integer** | The type of the room the entry is inside, at any depth; absent for an entry outside rooms. Values of `FolderType`: 0 = DEFAULT, 1 = COMMON, 2 = BUNCH, 3 = TRASH, 5 = USER, 6 = SHARE, 8 = Projects, 10 = Favorites, 11 = Recent, 12 = Templates, 13 = Privacy, 14 = VirtualRooms, 15 = FillingFormsRoom, 16 = EditingRoom, 19 = CustomRoom, 20 = Archive, 21 = ThirdpartyBackup, 22 = PublicRoom, 25 = ReadyFormFolder, 26 = InProcessFormFolder, 27 = FormFillingFolderDone, 28 = FormFillingFolderInProgress, 29 = VirtualDataRoom, 30 = RoomTemplates, 31 = AiRoom, 32 = Knowledge, 33 = ChatOutputs, 34 = AiAgents, 35 = DefaultTemplates, 36 = Forms, 37 = Ai, 38 = InstructionsRoom, 39 = KnowledgeRoom, 40 = AiProjectRoom, 41 = AiHub, 42 = PrivateRooms. | [optional] |
| **originId** | [**EntryId**](entry-id.md) |  | [optional] |
| **originRoomId** | [**EntryId**](entry-id.md) |  | [optional] |
| **originTitle** | **String** | For an entry in the trash, the name of the folder it was deleted from. | [optional] |
| **originRoomTitle** | **String** | For an entry in the trash, the name of the room it was deleted from. | [optional] |
| **providerItem** | **Boolean** | True when the entry lives in a connected third-party storage; absent for the portal's own storage. | [optional] |
| **providerKey** | **String** | The connected third-party storage the entry lives in; absent for the portal's own storage. | [optional] |
| **providerId** | **Integer** (int32) | The ID of the third-party storage connection the entry comes through; absent for the portal's own storage. | [optional] |
| **order** | **Integer** (int32) | The position of the entry in a room with indexing turned on; meaningful only inside such a room. | [optional] |
| **filesCount** | **Integer** (int32) | The number of files the folder directly contains. | [optional] |
| **foldersCount** | **Integer** (int32) | The number of subfolders the folder directly contains. | [optional] |
| **type** | **Integer** | The kind of folder: an ordinary one, one the portal creates and maintains itself, such as the folders of a form-filling room, or, for a room a folder.* webhook is about, the kind of room. Values of `FolderType`: 0 = DEFAULT, 1 = COMMON, 2 = BUNCH, 3 = TRASH, 5 = USER, 6 = SHARE, 8 = Projects, 10 = Favorites, 11 = Recent, 12 = Templates, 13 = Privacy, 14 = VirtualRooms, 15 = FillingFormsRoom, 16 = EditingRoom, 19 = CustomRoom, 20 = Archive, 21 = ThirdpartyBackup, 22 = PublicRoom, 25 = ReadyFormFolder, 26 = InProcessFormFolder, 27 = FormFillingFolderDone, 28 = FormFillingFolderInProgress, 29 = VirtualDataRoom, 30 = RoomTemplates, 31 = AiRoom, 32 = Knowledge, 33 = ChatOutputs, 34 = AiAgents, 35 = DefaultTemplates, 36 = Forms, 37 = Ai, 38 = InstructionsRoom, 39 = KnowledgeRoom, 40 = AiProjectRoom, 41 = AiHub, 42 = PrivateRooms. | [optional] |
