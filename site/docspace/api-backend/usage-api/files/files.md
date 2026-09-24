# ONLYOFFICE DocSpace Files API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Files

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**addFileToRecent**](files/add-file-to-recent.md) | **POST** /api/2.0/files/file/\{fileId\}/recent | Add a file to Recent |
| [**addTemplates**](files/add-templates.md) | **POST** /api/2.0/files/templates | Add template files |
| [**changeVersionHistory**](files/change-version-history.md) | **PUT** /api/2.0/files/file/\{fileId\}/history | Change version history |
| [**checkFillFormDraft**](files/check-fill-form-draft.md) | **POST** /api/2.0/files/masterform/\{fileId\}/checkfillformdraft | Open a form draft for filling |
| [**copyFileAs**](files/copy-file-as.md) | **POST** /api/2.0/files/file/\{fileId\}/copyas | Copy a file |
| [**createEditSession**](files/create-edit-session.md) | **POST** /api/2.0/files/file/\{fileId\}/edit_session | Create the editing session |
| [**createFile**](files/create-file.md) | **POST** /api/2.0/files/\{folderId\}/file | Create a file |
| [**createFileInMyDocuments**](files/create-file-in-my-documents.md) | **POST** /api/2.0/files/@my/file | Create a file in My documents |
| [**createFilePrimaryExternalLink**](files/create-file-primary-external-link.md) | **POST** /api/2.0/files/file/\{id\}/link | Create the file primary external link |
| [**createHtmlFile**](files/create-html-file.md) | **POST** /api/2.0/files/\{folderId\}/html | Create an HTML file |
| [**createHtmlFileInMyDocuments**](files/create-html-file-in-my-documents.md) | **POST** /api/2.0/files/@my/html | Create an HTML file in My documents |
| [**createTextFile**](files/create-text-file.md) | **POST** /api/2.0/files/\{folderId\}/text | Create a text file |
| [**createTextFileInMyDocuments**](files/create-text-file-in-my-documents.md) | **POST** /api/2.0/files/@my/text | Create a text file in My documents |
| [**createThumbnails**](files/create-thumbnails.md) | **POST** /api/2.0/files/thumbnails | Queue file thumbnails |
| [**deleteFile**](files/delete-file.md) | **DELETE** /api/2.0/files/file/\{fileId\} | Delete a file |
| [**deleteRecent**](files/delete-recent.md) | **DELETE** /api/2.0/files/recent | Delete recent files |
| [**deleteTemplates**](files/delete-templates.md) | **DELETE** /api/2.0/files/templates | Delete template files |
| [**generateXlsx**](files/generate-xlsx.md) | **POST** /api/2.0/files/file/\{fileId\}/xlsx | Generate a form answers report |
| [**getAllFormRoles**](files/get-all-form-roles.md) | **GET** /api/2.0/files/file/\{fileId\}/formroles | Get form roles |
| [**getEditDiffUrl**](files/get-edit-diff-url.md) | **GET** /api/2.0/files/file/\{fileId\}/edit/diff | Get changes URL |
| [**getEditHistory**](files/get-edit-history.md) | **GET** /api/2.0/files/file/\{fileId\}/edit/history | Get version history |
| [**getEncryptionInfo**](files/get-encryption-info.md) | **GET** /api/2.0/files/\{fileId\}/access | Get file encryption information |
| [**getFileHistory**](files/get-file-history.md) | **GET** /api/2.0/files/file/\{fileId\}/log | Get file history |
| [**getFileInfo**](files/get-file-info.md) | **GET** /api/2.0/files/file/\{fileId\} | Get file information |
| [**getFileLinks**](files/get-file-links.md) | **GET** /api/2.0/files/file/\{id\}/links | Get file external links |
| [**getFilePrimaryExternalLink**](files/get-file-primary-external-link.md) | **GET** /api/2.0/files/file/\{id\}/link | Get the file primary external link |
| [**getFileVersionInfo**](files/get-file-version-info.md) | **GET** /api/2.0/files/file/\{fileId\}/history | Get file versions |
| [**getFillResult**](files/get-fill-result.md) | **GET** /api/2.0/files/file/fillresult | Get form-filling result |
| [**getFormSubmissions**](files/get-form-submissions.md) | **GET** /api/2.0/files/file/\{fileId\}/submissions | Get form submission results |
| [**getPresignedFileUri**](files/get-presigned-file-uri.md) | **GET** /api/2.0/files/file/\{fileId\}/presigned | Get a signed download address |
| [**getPresignedUri**](files/get-presigned-uri.md) | **GET** /api/2.0/files/file/\{fileId\}/presigneduri | Get file download link |
| [**getProtectedFileUsers**](files/get-protected-file-users.md) | **GET** /api/2.0/files/file/\{fileId\}/protectusers | Get users for document protection |
| [**getReferenceData**](files/get-reference-data.md) | **POST** /api/2.0/files/file/referencedata | Resolve a spreadsheet reference |
| [**getXlsx**](files/get-xlsx.md) | **GET** /api/2.0/files/file/\{fileId\}/xlsx | Get form report generation status |
| [**isFormPDF**](files/is-form-pdf.md) | **GET** /api/2.0/files/file/\{fileId\}/isformpdf | Check the PDF file |
| [**lockFile**](files/lock-file.md) | **PUT** /api/2.0/files/file/\{fileId\}/lock | Lock a file |
| [**manageFormFilling**](files/manage-form-filling.md) | **PUT** /api/2.0/files/file/\{fileId\}/manageformfilling | Perform form filling action |
| [**openEditFile**](files/open-edit-file.md) | **GET** /api/2.0/files/file/\{fileId\}/openedit | Get the editor configuration |
| [**restoreFileVersion**](files/restore-file-version.md) | **POST** /api/2.0/files/file/\{fileId\}/restoreversion | Restore a file version |
| [**saveEditingFileFromForm**](files/save-editing-file-from-form.md) | **PUT** /api/2.0/files/file/\{fileId\}/saveediting | Save edited file content |
| [**saveFileAsPdf**](files/save-file-as-pdf.md) | **POST** /api/2.0/files/file/\{id\}/saveaspdf | Save a file as PDF |
| [**saveFormRoleMapping**](files/save-form-role-mapping.md) | **POST** /api/2.0/files/file/\{fileId\}/formrolemapping | Save form role mapping |
| [**setCustomFilterTag**](files/set-custom-filter-tag.md) | **PUT** /api/2.0/files/file/\{fileId\}/customfilter | Set the Custom Filter editing mode |
| [**setEncryptionInfo**](files/set-encryption-info.md) | **PUT** /api/2.0/files/\{fileId\}/access | Set file encryption information |
| [**setFileExternalLink**](files/set-file-external-link.md) | **PUT** /api/2.0/files/file/\{id\}/links | Set a file external link |
| [**setFileOrder**](files/set-file-order.md) | **PUT** /api/2.0/files/\{fileId\}/order | Set file order |
| [**setFilesOrder**](files/set-files-order.md) | **PUT** /api/2.0/files/order | Set order of files |
| [**startEditFile**](files/start-edit-file.md) | **POST** /api/2.0/files/file/\{fileId\}/startedit | Open an editing session |
| [**startFillingFile**](files/start-filling-file.md) | **PUT** /api/2.0/files/file/\{fileId\}/startfilling | Start filling a form |
| [**toggleFileFavorite**](files/toggle-file-favorite.md) | **GET** /api/2.0/files/favorites/\{fileId\} | Set the file favorite status |
| [**trackEditFile**](files/track-edit-file.md) | **GET** /api/2.0/files/file/\{fileId\}/trackeditfile | Track an editing session |
| [**updateFile**](files/update-file.md) | **PUT** /api/2.0/files/file/\{fileId\} | Update a file |

## Folders

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**checkUpload**](folders/check-upload.md) | **POST** /api/2.0/files/\{folderId\}/upload/check | Check for upload conflicts |
| [**createFolder**](folders/create-folder.md) | **POST** /api/2.0/files/folder/\{folderId\} | Create a folder |
| [**createFolderPrimaryExternalLink**](folders/create-folder-primary-external-link.md) | **POST** /api/2.0/files/folder/\{id\}/link | Create the folder primary external link |
| [**createReportFolderHistory**](folders/create-report-folder-history.md) | **POST** /api/2.0/files/folder/\{folderId\}/log/report | Start the folder history report generation |
| [**deleteFolder**](folders/delete-folder.md) | **DELETE** /api/2.0/files/folder/\{folderId\} | Delete a folder |
| [**generateXlsxByFolder**](folders/generate-xlsx-by-folder.md) | **POST** /api/2.0/files/folder/\{folderId\}/xlsx | Generate XLSX report by folder |
| [**getFavoritesFolder**](folders/get-favorites-folder.md) | **GET** /api/2.0/files/@favorites | Get the Favorites section |
| [**getFilesUsedSpace**](folders/get-files-used-space.md) | **GET** /api/2.0/files/filesusedspace | Get used space of files |
| [**getFolder**](folders/get-folder.md) | **GET** /api/2.0/files/\{folderId\}/formfilter | Get folder form filter |
| [**getFolderByFolderId**](folders/get-folder-by-folder-id.md) | **GET** /api/2.0/files/\{folderId\} | Get a folder by ID |
| [**getFolderHistory**](folders/get-folder-history.md) | **GET** /api/2.0/files/folder/\{folderId\}/log | Get folder history |
| [**getFolderInfo**](folders/get-folder-info.md) | **GET** /api/2.0/files/folder/\{folderId\} | Get folder information |
| [**getFolderLinks**](folders/get-folder-links.md) | **GET** /api/2.0/files/folder/\{id\}/links | Get folder external links |
| [**getFolderPath**](folders/get-folder-path.md) | **GET** /api/2.0/files/folder/\{folderId\}/path | Get the folder path |
| [**getFolderPrimaryExternalLink**](folders/get-folder-primary-external-link.md) | **GET** /api/2.0/files/folder/\{id\}/link | Get the folder primary external link |
| [**getFolders**](folders/get-folders.md) | **GET** /api/2.0/files/\{folderId\}/subfolders | Get subfolders |
| [**getFormsFolder**](folders/get-forms-folder.md) | **GET** /api/2.0/files/@forms | Get the Forms section |
| [**getMyFolder**](folders/get-my-folder.md) | **GET** /api/2.0/files/@my | Get the My documents section |
| [**getNewFolderItems**](folders/get-new-folder-items.md) | **GET** /api/2.0/files/\{folderId\}/news | Get new folder items |
| [**getRecentFolder**](folders/get-recent-folder.md) | **GET** /api/2.0/files/recent | Get the Recent section |
| [**getReportFolderHistory**](folders/get-report-folder-history.md) | **GET** /api/2.0/files/folder/\{folderId\}/log/report | Get the folder history report generation status |
| [**getRootFolders**](folders/get-root-folders.md) | **GET** /api/2.0/files/@root | Get filtered sections |
| [**getTrashFolder**](folders/get-trash-folder.md) | **GET** /api/2.0/files/@trash | Get the Trash section |
| [**insertFile**](folders/insert-file.md) | **POST** /api/2.0/files/\{folderId\}/insert | Insert a file |
| [**insertFileToMyFromBody**](folders/insert-file-to-my-from-body.md) | **POST** /api/2.0/files/@my/insert | Insert a file into My documents |
| [**renameFolder**](folders/rename-folder.md) | **PUT** /api/2.0/files/folder/\{folderId\} | Rename a folder |
| [**setFolderOrder**](folders/set-folder-order.md) | **PUT** /api/2.0/files/folder/\{folderId\}/order | Set folder order |
| [**setFolderPrimaryExternalLink**](folders/set-folder-primary-external-link.md) | **PUT** /api/2.0/files/folder/\{id\}/links | Set the folder external link |
| [**terminateReportFolderHistory**](folders/terminate-report-folder-history.md) | **DELETE** /api/2.0/files/folder/\{folderId\}/log/report | Terminate the folder history report generation |
| [**uploadFile**](folders/upload-file.md) | **POST** /api/2.0/files/\{folderId\}/upload | Upload a file |
| [**uploadFileToMy**](folders/upload-file-to-my.md) | **POST** /api/2.0/files/@my/upload | Upload a file to My documents |

## Operations

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**abortUploadSession**](operations/abort-upload-session.md) | **DELETE** /api/2.0/files/\{folderId\}/session/\{sessionId\} | Abort an upload session |
| [**addFavorites**](operations/add-favorites.md) | **POST** /api/2.0/files/favorites | Add favorite files and folders |
| [**bulkDownload**](operations/bulk-download.md) | **PUT** /api/2.0/files/fileops/bulkdownload | Bulk download |
| [**checkConversionStatus**](operations/check-conversion-status.md) | **GET** /api/2.0/files/file/\{fileId\}/checkconversion | Get conversion status |
| [**checkMoveOrCopyBatchItems**](operations/check-move-or-copy-batch-items.md) | **GET** /api/2.0/files/fileops/move | Check move or copy conflicts |
| [**checkMoveOrCopyDestFolder**](operations/check-move-or-copy-dest-folder.md) | **GET** /api/2.0/files/fileops/checkdestfolder | Check the destination folder |
| [**copyBatchItems**](operations/copy-batch-items.md) | **PUT** /api/2.0/files/fileops/copy | Copy files and folders |
| [**createUploadSession**](operations/create-upload-session.md) | **POST** /api/2.0/files/\{folderId\}/upload/create_session | Chunked upload |
| [**createUploadSessionInFolder**](operations/create-upload-session-in-folder.md) | **POST** /api/2.0/files/\{folderId\}/session | Create an upload session |
| [**deleteBatchItems**](operations/delete-batch-items.md) | **PUT** /api/2.0/files/fileops/delete | Delete files and folders |
| [**deleteFavoritesFromBody**](operations/delete-favorites-from-body.md) | **DELETE** /api/2.0/files/favorites | Delete favorite files and folders |
| [**deleteFileVersions**](operations/delete-file-versions.md) | **PUT** /api/2.0/files/fileops/deleteversion | Delete file versions |
| [**duplicateBatchItems**](operations/duplicate-batch-items.md) | **PUT** /api/2.0/files/fileops/duplicate | Duplicate files and folders |
| [**emptyTrash**](operations/empty-trash.md) | **PUT** /api/2.0/files/fileops/emptytrash | Empty the Trash folder |
| [**finalizeSession**](operations/finalize-session.md) | **PUT** /api/2.0/files/\{folderId\}/session/\{sessionId\}/finalize | Finalize an upload session |
| [**getOperationStatuses**](operations/get-operation-statuses.md) | **GET** /api/2.0/files/fileops | Get active file operations |
| [**getOperationStatusesByType**](operations/get-operation-statuses-by-type.md) | **GET** /api/2.0/files/fileops/\{operationType\} | Get file operations by type |
| [**markAsRead**](operations/mark-as-read.md) | **PUT** /api/2.0/files/fileops/markasread | Mark files and folders as read |
| [**moveBatchItems**](operations/move-batch-items.md) | **PUT** /api/2.0/files/fileops/move | Move files and folders |
| [**startFileConversion**](operations/start-file-conversion.md) | **PUT** /api/2.0/files/file/\{fileId\}/checkconversion | Start file conversion |
| [**terminateTasks**](operations/terminate-tasks.md) | **PUT** /api/2.0/files/fileops/terminate/\{id\} | Cancel file operations |
| [**updateFileComment**](operations/update-file-comment.md) | **PUT** /api/2.0/files/file/\{fileId\}/comment | Update a comment |
| [**uploadAsyncSession**](operations/upload-async-session.md) | **POST** /api/2.0/files/\{folderId\}/session/\{sessionId\}/upload | Upload a numbered chunk |
| [**uploadSession**](operations/upload-session.md) | **POST** /api/2.0/files/\{folderId\}/session/\{sessionId\} | Upload the next chunk |

## Quota

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**resetRoomQuota**](quota/reset-room-quota.md) | **PUT** /api/2.0/files/rooms/resetquota | Reset the room quota limit |
| [**updateRoomsQuota**](quota/update-rooms-quota.md) | **PUT** /api/2.0/files/rooms/roomquota | Change the room quota limit |

## Settings

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**changeAccessToThirdparty**](settings/change-access-to-thirdparty.md) | **PUT** /api/2.0/files/thirdparty | Change the third-party settings access |
| [**changeAutomaticallyCleanUp**](settings/change-automatically-clean-up.md) | **PUT** /api/2.0/files/settings/autocleanup | Update the trash bin auto-clearing setting |
| [**changeDefaultAccessRights**](settings/change-default-access-rights.md) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Change the default access rights |
| [**changeDeleteConfirm**](settings/change-delete-confirm.md) | **PUT** /api/2.0/files/changedeleteconfrim | Ask for delete confirmation |
| [**changeDownloadZip**](settings/change-download-zip.md) | **PUT** /api/2.0/files/settings/downloadtargz | Change the download archive format |
| [**changeExternalSharingSettings**](settings/change-external-sharing-settings.md) | **PUT** /api/2.0/files/settings/externalsharingsettings | Configure external sharing |
| [**checkDocServiceUrl**](settings/check-doc-service-url.md) | **PUT** /api/2.0/files/docservice | Set the document service address |
| [**displayFileExtension**](settings/display-file-extension.md) | **PUT** /api/2.0/files/displayfileextension | Display a file extension |
| [**displayRecent**](settings/display-recent.md) | **PUT** /api/2.0/files/displayrecent | Show the Recent section |
| [**externalShare**](settings/external-share.md) | **PUT** /api/2.0/files/settings/external | Change the external sharing ability |
| [**externalShareSocialMedia**](settings/external-share-social-media.md) | **PUT** /api/2.0/files/settings/externalsocialmedia | Change the external sharing ability on social networks |
| [**forcesave**](settings/forcesave.md) | **PUT** /api/2.0/files/forcesave | Change the forcesaving ability |
| [**getAutomaticallyCleanUp**](settings/get-automatically-clean-up.md) | **GET** /api/2.0/files/settings/autocleanup | Get the trash bin auto-clearing setting |
| [**getDefaultTemplates**](settings/get-default-templates.md) | **GET** /api/2.0/files/settings/defaulttemplate | Get the default template setting |
| [**getDocServiceUrl**](settings/get-doc-service-url.md) | **GET** /api/2.0/files/docservice | Get the document service address |
| [**getFilesModule**](settings/get-files-module.md) | **GET** /api/2.0/files/info | Get the Documents module information |
| [**getFilesSettings**](settings/get-files-settings.md) | **GET** /api/2.0/files/settings | Get file settings |
| [**hideConfirmCancelOperation**](settings/hide-confirm-cancel-operation.md) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Hide confirmation dialog when canceling operations |
| [**hideConfirmConvert**](settings/hide-confirm-convert.md) | **PUT** /api/2.0/files/hideconfirmconvert | Hide the confirmation dialog when converting |
| [**hideConfirmRoomLifetime**](settings/hide-confirm-room-lifetime.md) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Hide confirmation dialog when changing room lifetime settings |
| [**keepNewFileName**](settings/keep-new-file-name.md) | **PUT** /api/2.0/files/keepnewfilename | Keep the default file name |
| [**resetDefaultTemplate**](settings/reset-default-template.md) | **DELETE** /api/2.0/files/settings/defaulttemplate | Reset the default template setting |
| [**setDefaultTemplate**](settings/set-default-template.md) | **PUT** /api/2.0/files/settings/defaulttemplate | Change the default template setting |
| [**setOpenEditorInSameTab**](settings/set-open-editor-in-same-tab.md) | **PUT** /api/2.0/files/settings/openeditorinsametab | Open document in the same browser tab |
| [**setOrganizeRoomsGrouping**](settings/set-organize-rooms-grouping.md) | **PUT** /api/2.0/files/settings/organizegrouping | Organize rooms grouping |
| [**showQuickActions**](settings/show-quick-actions.md) | **PUT** /api/2.0/files/showquickactions | Display quick actions |
| [**storeForcesave**](settings/store-forcesave.md) | **PUT** /api/2.0/files/storeforcesave | Change the ability to store the forcesaved files |
| [**storeOriginal**](settings/store-original.md) | **PUT** /api/2.0/files/storeoriginal | Change the ability to upload original formats |
| [**updateFileIfExist**](settings/update-file-if-exist.md) | **PUT** /api/2.0/files/updateifexist | Update a file version if it exists |
| [**uploadDefaultTemplate**](settings/upload-default-template.md) | **POST** /api/2.0/files/settings/defaulttemplate | Upload a file as the default template setting |

## Sharing

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**applyExternalSharePassword**](sharing/apply-external-share-password.md) | **POST** /api/2.0/files/share/\{key\}/password | Unlock a password-protected link |
| [**changeFileOwner**](sharing/change-file-owner.md) | **POST** /api/2.0/files/owner | Change the room or file owner |
| [**getEncryptionAccess**](sharing/get-encryption-access.md) | **GET** /api/2.0/files/file/\{fileId\}/publickeys | Get file encryption keys |
| [**getExternalShareData**](sharing/get-external-share-data.md) | **GET** /api/2.0/files/share/\{key\} | Resolve an external share link |
| [**getFileSecurityInfo**](sharing/get-file-security-info.md) | **GET** /api/2.0/files/file/\{id\}/share | Get file sharing rights |
| [**getFolderSecurityInfo**](sharing/get-folder-security-info.md) | **GET** /api/2.0/files/folder/\{id\}/share | Get folder sharing rights |
| [**getGroupsMembersWithFileSecurity**](sharing/get-groups-members-with-file-security.md) | **GET** /api/2.0/files/file/\{fileId\}/group/\{groupId\}/share | Get file access of group members |
| [**getGroupsMembersWithFolderSecurity**](sharing/get-groups-members-with-folder-security.md) | **GET** /api/2.0/files/folder/\{folderId\}/group/\{groupId\}/share | Get folder access of group members |
| [**getSecurityInfo**](sharing/get-security-info.md) | **POST** /api/2.0/files/share | Get sharing rights in batch |
| [**getSharedUsers**](sharing/get-shared-users.md) | **GET** /api/2.0/files/file/\{fileId\}/sharedusers | Get users to mention in a file |
| [**removeSecurityInfo**](sharing/remove-security-info.md) | **DELETE** /api/2.0/files/share | Remove sharing rights in batch |
| [**sendEditorNotify**](sharing/send-editor-notify.md) | **POST** /api/2.0/files/file/\{fileId\}/sendeditornotify | Notify mentioned users |
| [**setFileSecurityInfo**](sharing/set-file-security-info.md) | **PUT** /api/2.0/files/file/\{id\}/share | Share a file |
| [**setFolderSecurityInfo**](sharing/set-folder-security-info.md) | **PUT** /api/2.0/files/folder/\{id\}/share | Share a folder |
| [**setSecurityInfo**](sharing/set-security-info.md) | **PUT** /api/2.0/files/share | Set sharing rights in batch |

## Third-party integration

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**deleteThirdParty**](third-party-integration/delete-third-party.md) | **DELETE** /api/2.0/files/thirdparty/\{providerId\} | Remove a third-party account |
| [**getAllProviders**](third-party-integration/get-all-providers.md) | **GET** /api/2.0/files/thirdparty/providers | Get all third-party providers |
| [**getBackupThirdPartyAccount**](third-party-integration/get-backup-third-party-account.md) | **GET** /api/2.0/files/thirdparty/backup | Get the third-party backup folder |
| [**getCapabilities**](third-party-integration/get-capabilities.md) | **GET** /api/2.0/files/thirdparty/capabilities | Get third-party provider capabilities |
| [**getCommonThirdPartyFolders**](third-party-integration/get-common-third-party-folders.md) | **GET** /api/2.0/files/thirdparty/common | Get common third-party folders |
| [**getThirdPartyAccounts**](third-party-integration/get-third-party-accounts.md) | **GET** /api/2.0/files/thirdparty | Get the third-party accounts |
| [**saveThirdParty**](third-party-integration/save-third-party.md) | **POST** /api/2.0/files/thirdparty | Connect a third-party account |
| [**saveThirdPartyBackup**](third-party-integration/save-third-party-backup.md) | **POST** /api/2.0/files/thirdparty/backup | Connect the third-party backup storage |

## Authorization

### cookieAuth
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### bearerAuth

- **Type**: HTTP Bearer Token authentication

### asc_auth_key
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### Basic

- **Type**: HTTP basic authentication

### Bearer

- **Type**: HTTP Bearer Token authentication (JWT)

### ApiKeyBearer
- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources

### OpenId

### x-signature
- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: 

