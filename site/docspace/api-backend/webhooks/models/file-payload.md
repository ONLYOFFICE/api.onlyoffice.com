# FilePayload
The file carried by a file.* webhook, and by form.filled.out and form.stopped.  Carries no thumbnail, image dimensions or form-filling state; read them from the REST API by the file ID.

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
| **version** | **Integer** (int32) | The number of the current version of the file, starting at 1 and growing with every saved version. | [optional] |
| **versionGroup** | **Integer** (int32) | The number of the version group the current version belongs to; the versions saved during one editing session share a group. | [optional] |
| **contentLength** | **Long** (int64) | The size of the current version of the file in bytes. | [optional] |
| **fileType** | **Integer** | The kind of content the file holds, derived from its extension: a document, a spreadsheet, a presentation, a PDF, an image and so on. Values of `FileType`: 0 = Unknown, 1 = Archive, 2 = Video, 3 = Audio, 4 = Image, 5 = Spreadsheet, 6 = Presentation, 7 = Document, 10 = Pdf, 11 = Diagram. | [optional] |
| **fileExst** | **String** | The file extension, including the leading dot. | [optional] |
| **comment** | **String** | The comment saved with the current version, either typed by the user or set by the portal for the action that made the version. | [optional] |
| **viewUrl** | **String** | The URL the file content can be downloaded from. Carries no share token. | [optional] |
| **webUrl** | **String** | The URL the file can be opened at in a browser. Carries no share token. | [optional] |
| **encrypted** | **Boolean** | True when the file is end-to-end encrypted in a private room; absent otherwise. | [optional] |
| **locked** | **Boolean** | True when the file is locked, so that only the user who locked it can edit it; absent otherwise. A file.updated raised by locking or unlocking the file tells the two apart by this field. | [optional] |
| **lockedBy** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **isForm** | **Boolean** | True for every PDF file, with or without form fields, since the editor can open any PDF as a form; absent for other files. It does not tell a fillable form from an ordinary PDF document. | [optional] |
| **customFilterEnabled** | **Boolean** | True when custom filtering is turned on for the spreadsheet; absent otherwise. | [optional] |
| **customFilterEnabledBy** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **vectorizationStatus** | **Integer** | The state of the file's indexing for the AI features of the portal; absent when it does not apply. Values of `VectorizationStatus`: 0 = InProgress, 1 = Completed, 2 = Failed. | [optional] |
