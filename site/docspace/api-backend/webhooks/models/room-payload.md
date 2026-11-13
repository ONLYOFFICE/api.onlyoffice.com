# RoomPayload
The room carried by a room.* webhook, and the AI agent carried by every agent.* webhook.  Carries no logo, watermark, file lifetime, tags or chat settings; read them from `GET api/2.0/files/rooms/{id}`.

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
| **roomType** | **Integer** | The kind of room, which decides what the room is for and which roles it offers. Values of `RoomType`: 1 = FillingFormsRoom, 2 = EditingRoom, 5 = CustomRoom, 6 = PublicRoom, 8 = VirtualDataRoom, 9 = AiRoom, 10 = InstructionsRoom, 11 = KnowledgeRoom, 12 = AiProjectRoom. | [optional] |
| **type** | **Integer** | The same kind of room as `roomType`, in the numbering the portal uses for folders. Values of `FolderType`: 0 = DEFAULT, 1 = COMMON, 2 = BUNCH, 3 = TRASH, 5 = USER, 6 = SHARE, 8 = Projects, 10 = Favorites, 11 = Recent, 12 = Templates, 13 = Privacy, 14 = VirtualRooms, 15 = FillingFormsRoom, 16 = EditingRoom, 19 = CustomRoom, 20 = Archive, 21 = ThirdpartyBackup, 22 = PublicRoom, 25 = ReadyFormFolder, 26 = InProcessFormFolder, 27 = FormFillingFolderDone, 28 = FormFillingFolderInProgress, 29 = VirtualDataRoom, 30 = RoomTemplates, 31 = AiRoom, 32 = Knowledge, 33 = ChatOutputs, 34 = AiAgents, 35 = DefaultTemplates, 36 = Forms, 37 = Ai, 38 = InstructionsRoom, 39 = KnowledgeRoom, 40 = AiProjectRoom, 41 = AiHub, 42 = PrivateRooms. | [optional] |
| **filesCount** | **Integer** (int32) | The number of files the room directly contains. | [optional] |
| **foldersCount** | **Integer** (int32) | The number of folders the room directly contains. | [optional] |
| **private** | **Boolean** | True for a private room, whose files are end-to-end encrypted. | [optional] |
| **indexing** | **Boolean** | True when the room numbers its files and folders in a fixed order; `order` on each entry is that number. | [optional] |
| **denyDownload** | **Boolean** | True when downloading, copying and printing the room's files is restricted for those who may only view them. | [optional] |
| **quotaLimit** | **Long** (int64) | The room's own quota in bytes, -1 for an explicit \"no limit\". Absent when the room has no quota of its own, so the portal's default room quota applies, if room quotas are on, and absent as well for a subscription whose creator the REST API would not show a room quota to: one who may neither edit the room nor create in it and is not its editor, or, for a room in the archive, may not delete it. Unlike `quotaLimit` of the REST API, it is the stored value whether or not room quotas are turned on and wherever the room lies, the archive included, and it carries no default quota. | [optional] |
| **usedSpace** | **Long** (int64) | The space used by the room in bytes. | [optional] |
| **color** | **String** | The background colour of the room icon, as a hex RGB code. | [optional] |
| **cover** | **String** | The name of the cover picture chosen for the room icon; absent when none is chosen. | [optional] |
