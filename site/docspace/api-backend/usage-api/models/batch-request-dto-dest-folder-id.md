# BatchRequestDto.destFolderId
The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
