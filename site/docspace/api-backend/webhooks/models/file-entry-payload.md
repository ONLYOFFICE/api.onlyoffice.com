# FileEntryPayload
What every file, folder and room webhook payload has in common.  All dates are in UTC. A delivery goes only to a subscription owner who may see the entry, and it carries no per-user state: no access rights, share settings, favourite flag or thumbnail. Read those from the REST API by the entry ID when they are needed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | [**EntryId**](entry-id.md) |  | [optional] |
| **parentId** | [**EntryId**](entry-id.md) |  | [optional] |
| **rootFolderId** | [**EntryId**](entry-id.md) |  | [optional] |
| **title** | **String** | The name of the entry as shown in the portal; for a file it includes the extension. | [optional] [example: `Contract 2026.docx`] |
| **fileEntryType** | **Integer** | Tells a folder or room payload (1) from a file payload (2), so a receiver can pick the schema to read the rest of the object with. Flags of `FileEntryType`: 1 = Folder, 2 = File. | [optional] [example: `2`] |
| **created** | **Date** (date-time) | When the entry was created, in UTC. | [optional] [example: `2021-01-01T00:00:00Z`] |
| **createdBy** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **updated** | **Date** (date-time) | When the entry was last changed, in UTC; equal to `created` for an entry that has not changed since. | [optional] [example: `2021-01-01T00:00:00Z`] |
| **updatedBy** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **rootFolderType** | **Integer** | The kind of top-level section the entry sits in, such as My documents, Rooms, Archive or Trash. Values of `FolderType`: 0 = DEFAULT, 1 = COMMON, 2 = BUNCH, 3 = TRASH, 5 = USER, 6 = SHARE, 8 = Projects, 10 = Favorites, 11 = Recent, 12 = Templates, 13 = Privacy, 14 = VirtualRooms, 15 = FillingFormsRoom, 16 = EditingRoom, 19 = CustomRoom, 20 = Archive, 21 = ThirdpartyBackup, 22 = PublicRoom, 25 = ReadyFormFolder, 26 = InProcessFormFolder, 27 = FormFillingFolderDone, 28 = FormFillingFolderInProgress, 29 = VirtualDataRoom, 30 = RoomTemplates, 31 = AiRoom, 32 = Knowledge, 33 = ChatOutputs, 34 = AiAgents, 35 = DefaultTemplates, 36 = Forms, 37 = Ai, 38 = InstructionsRoom, 39 = KnowledgeRoom, 40 = AiProjectRoom, 41 = AiHub, 42 = PrivateRooms. | [optional] [example: `14`] |
| **parentRoomType** | **Integer** | The type of the room the entry is inside, at any depth; absent for an entry outside rooms. Values of `FolderType`: 0 = DEFAULT, 1 = COMMON, 2 = BUNCH, 3 = TRASH, 5 = USER, 6 = SHARE, 8 = Projects, 10 = Favorites, 11 = Recent, 12 = Templates, 13 = Privacy, 14 = VirtualRooms, 15 = FillingFormsRoom, 16 = EditingRoom, 19 = CustomRoom, 20 = Archive, 21 = ThirdpartyBackup, 22 = PublicRoom, 25 = ReadyFormFolder, 26 = InProcessFormFolder, 27 = FormFillingFolderDone, 28 = FormFillingFolderInProgress, 29 = VirtualDataRoom, 30 = RoomTemplates, 31 = AiRoom, 32 = Knowledge, 33 = ChatOutputs, 34 = AiAgents, 35 = DefaultTemplates, 36 = Forms, 37 = Ai, 38 = InstructionsRoom, 39 = KnowledgeRoom, 40 = AiProjectRoom, 41 = AiHub, 42 = PrivateRooms. | [optional] [example: `19`] |
| **originId** | [**EntryId**](entry-id.md) |  | [optional] |
| **originRoomId** | [**EntryId**](entry-id.md) |  | [optional] |
| **originTitle** | **String** | For an entry in the trash, the name of the folder it was deleted from. | [optional] [example: `Q3 Reports`] |
| **originRoomTitle** | **String** | For an entry in the trash, the name of the room it was deleted from. | [optional] [example: `Marketing Room`] |
| **providerItem** | **Boolean** | True when the entry lives in a connected third-party storage; absent for the portal's own storage. | [optional] [example: `true`] |
| **providerKey** | **String** | The connected third-party storage the entry lives in; absent for the portal's own storage. | [optional] [example: `GoogleDrive`] |
| **providerId** | **Integer** (int32) | The ID of the third-party storage connection the entry comes through; absent for the portal's own storage. | [optional] [example: `1`] |
| **order** | **Integer** (int32) | The position of the entry in a room with indexing turned on; meaningful only inside such a room. | [optional] [example: `1`] |
