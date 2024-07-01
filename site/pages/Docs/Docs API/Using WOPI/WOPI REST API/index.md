[WOPI REST API](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/rest/) specifies a set of operations that enables a client to access and change files stored on a server.

ONLYOFFICE Docs uses the following WOPI operations:

* [CheckFileInfo](/editors/wopi/restapi/checkfileinfo) - returns information about the file properties, access rights and editor settings.
* [GetFile](/editors/wopi/restapi/getfile) - requests a message to retrieve a file for the *HTTP://server/<...>/wopi\*/files/\<id>/contents* operation.
* [Lock](/editors/wopi/restapi/lock) - locks file editing by an online office that requested the lock.
* [RefreshLock](/editors/wopi/restapi/refreshlock) - refreshes the lock on a file by resetting its automatic expiration timer to 30 minutes.
* [Unlock](/editors/wopi/restapi/unlock) - allows for file editing.
* [PutFile](/editors/wopi/restapi/putfile) - requests a message to update a file for the *HTTP://server/<...>/wopi\*/files/\<id>/contents* operation.
* [PutRelativeFile](/editors/wopi/restapi/putrelativefile) - creates a new file on the host based on the current file.
* [RenameFile](/editors/wopi/restapi/renamefile) - renames a file.

Possible error codes and their description

| Error code                   | Description                                                                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 OK                       | Success                                                                                                                                                                                   |
| 400 Bad Request              | **X-WOPI-Lock** was not provided or was empty / Specified name is illegal                                                                                                                 |
| 401 Unauthorized             | Invalid access token                                                                                                                                                                      |
| 404 Not Found                | Resource not found/user unauthorized                                                                                                                                                      |
| 409 Conflict                 | Lock mismatch/locked by another interface; the **X-WOPI-Lock** response header containing the value of the current lock on the file must always be included when using this response code |
| 412 Precondition Failed      | File is larger than **X-WOPI-MaxExpectedSize**                                                                                                                                            |
| 413 Request Entity Too Large | File is too large; the maximum file size is host-specific                                                                                                                                 |
| 500 Internal Server Error    | Server error                                                                                                                                                                              |
| 501 Not Implemented          | Operation not supported                                                                                                                                                                   |
