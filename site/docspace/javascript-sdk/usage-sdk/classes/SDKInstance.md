# Class: SDKInstance

Defined in: [instance/index.ts:65](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L65)

Represents an SDK instance for managing frames and communicating with DocSpace.

The `SDKInstance` class provides methods for initializing, managing, and communicating with
DocSpace frames. It handles frame creation, message passing, and various operations like
file management, user authentication, and room management.

## Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();

const instance = sdk.initFrame({
  frameId: 'docspace-frame',
  src: 'https://your-docspace-domain.com',
  width: '100%',
  height: '600px',
  mode: 'manager'
});

const userInfo = await instance.getUserInfo();
console.log('Current user:', userInfo);
```

## Constructors

### Constructor

> **new SDKInstance**(`config`): `SDKInstance`

Defined in: [instance/index.ts:73](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L73)

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

#### Returns

`SDKInstance`

## Properties

### config

> **config**: [`TFrameConfig`](../type-aliases/TFrameConfig.md)

Defined in: [instance/index.ts:71](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L71)

The iframe configuration options.

## Methods

### setIsLoaded()

> **setIsLoaded**(): `void`

Defined in: [instance/index.ts:281](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L281)

Manages the frame loading completion process.
Handles frame finalization, visual transition management, and user event coordination.
Ensures a smooth switch from initialization to working state
with animations and resource cleanup for better user experience.

#### Returns

`void`

void - This method performs side effects by updating the frame appearance
              and triggering events. It does not return values, focusing on
              state transition and user experience optimization.

#### Examples

```typescript
sdkInstance.setIsLoaded();
console.log('Frame loading completed and content is ready');
```

```typescript
try {
  await customFrameSetup();
  sdkInstance.setIsLoaded();
} catch (error) {
  console.error('Setup failed:', error);
  sdkInstance.setIsLoaded();
}
```

#### Throws

May throw an error if frame elements cannot be accessed or if style
                modifications fail due to browser security restrictions.

#### See

 - [initFrame](#initframe) Initializes the frame before the loading process completes.
 - [destroyFrame](#destroyframe) Cleans up resources when the frame is no longer needed.
 - [setConfig](#setconfig) Updates configuration parameters that affect loading behavior.
 - [onContentReady](../type-aliases/TFrameEvents.md#oncontentready) The callback triggered when the frame content is ready.

***

### initFrame()

> **initFrame**(`config`): `HTMLIFrameElement` \| `null`

Defined in: [instance/index.ts:747](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L747)

Initializes an iframe with the given configuration and appends it to the target element.

This is the core method that sets up the DocSpace iframe within your application.
It handles container creation, iframe setup, event handlers, and frame registration.
The method supports various DocSpace modes, including viewer, editor, manager, and more.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for the iframe, containing all initialization settings.

#### Returns

`HTMLIFrameElement` \| `null`

The created `HTMLIFrameElement`, or null if initialization fails (e.g., target element not found).

#### Examples

```typescript
const iframe = sdkInstance.initFrame({
  frameId: 'docspace-frame',
  src: 'https://your-docspace.com',
  mode: 'viewer',
  width: '100%',
  height: '600px',
  id: 'document-123'
});

if (iframe) {
  console.log('Frame initialized successfully');
} else {
  console.error('Failed to initialize frame - target element not found');
}
```

```typescript
const iframe = sdkInstance.initFrame({
  frameId: 'editor-frame',
  src: 'https://your-docspace.com',
  mode: 'editor',
  width: '100%',
  height: '800px',
  id: 'document-456',
  events: {
    onContentReady: () => console.log('Editor loaded'),
    onDocumentReady: () => console.log('Document ready for editing'),
    onAppError: (error) => console.error('Editor error:', error)
  }
});
```

#### Throws

May throw an error if the configuration contains invalid values or the target element cannot be accessed.

#### See

 - [setConfig](#setconfig) - Updates the configuration after initialization.
 - [getConfig](#getconfig) - Retrieves the current configuration.
 - [destroyFrame](#destroyframe) - Cleans up the frame properly.

***

### destroyFrame()

> **destroyFrame**(): `void`

Defined in: [instance/index.ts:802](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L802)

Destroys the current frame instance and performs comprehensive cleanup operations.

This method performs a complete teardown of the DocSpace frame and all associated resources,
ensuring proper memory management and preventing resource leaks in single-page applications.
It's essential for dynamic applications that create and destroy frames frequently, as well as
for implementing graceful shutdowns and transitions between different DocSpace instances.

After calling this method, the instance will no longer be functional,
and a new instance should be created if needed.

#### Returns

`void`

#### Examples

```typescript
sdkInstance.destroyFrame();
console.log('Frame destroyed and resources cleaned up');
```

```typescript
try {
  sdkInstance.destroyFrame();
  
  const newInstance = new SDKInstance({
    frameId: 'new-docspace-frame',
    src: 'https://your-docspace.com',
    mode: 'editor'
  });
  newInstance.initFrame(newInstance.getConfig());
} catch (error) {
  console.error('Failed to replace frame:', error);
}
```

#### See

 - [initFrame](#initframe) - Creates new frame instances.
 - [setConfig](#setconfig) - Updates frame configuration before cleanup.
 - [getConfig](#getconfig) - Retrieves the current configuration before destruction.

***

### setConfig()

> **setConfig**(`config`): `Promise`\<`object`\>

Defined in: [instance/index.ts:896](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L896)

Sets the configuration for the instance and applies updates to the active frame.

This method allows dynamically updating the SDK instance configuration
after initialization. Changes are merged with the existing configuration and
propagated to the active frame. This is useful for runtime adjustments like
theme changes, size updates, or mode switching.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md) = `defaultConfig`

The configuration object with properties to update. Only the provided properties will be changed.
                Defaults to `defaultConfig` if no parameter is provided.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the update result.

#### Examples

```typescript
const result = await sdkInstance.setConfig({
  theme: 'dark',
  width: '1200px',
  height: '800px'
});
console.log('Configuration updated:', result);
```

```typescript
try {
  await sdkInstance.setConfig({
    id: 'new-document-789',
    editorType: 'word'
  });
  console.log('Successfully switched to new document');
} catch (error) {
  console.error('Failed to update document:', error);
}
```

#### Throws

May throw an error if the new configuration contains invalid values or if frame update fails.

#### See

 - [getConfig](#getconfig) - Retrieves the current configuration.
 - [initFrame](#initframe) - Performs the initial frame setup.

***

### getConfig()

> **getConfig**(): [`TFrameConfig`](../type-aliases/TFrameConfig.md)

Defined in: [instance/index.ts:960](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L960)

Retrieves the current configuration object for the SDK instance.

This method returns a copy of the current configuration settings that define
how the DocSpace frame is initialized and behaves. The configuration includes
settings like frame dimensions, mode, theme, locale, event handlers, and more.
This is useful for debugging, state management, or creating new instances with
similar settings.

#### Returns

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The current configuration object containing all active settings.
  *

#### Examples

```typescript
const config = sdkInstance.getConfig();

console.log('Current mode:', config.mode);
console.log('Frame dimensions:', config.width, 'x', config.height);
console.log('Theme:', config.theme);
console.log('Locale:', config.locale);
```

```typescript
const currentConfig = sdkInstance.getConfig();
const newConfig = {
  ...currentConfig,
  frameId: 'new-frame-id',
  mode: 'editor',
  id: 'different-document-id'
};

const newInstance = new SDKInstance(newConfig);
newInstance.initFrame(newConfig);
```

```typescript
const config = sdkInstance.getConfig();

if (config.mode === 'viewer') {
  console.log('Document is in view-only mode');
} else if (config.mode === 'editor') {
  console.log('Document editing is available');
}
```

```typescript
const config = sdkInstance.getConfig();
console.log('Full configuration:', JSON.stringify(config, null, 2));

if (!config.src) {
  console.error('Missing source URL in configuration');
}
```

#### See

 - [setConfig](#setconfig) - Updates the configuration settings.
 - [initFrame](#initframe) - Performs the initial configuration setup.

***

### getFolderInfo()

> **getFolderInfo**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1003](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1003)

Retrieves comprehensive information about the current or specified folder.

This method provides detailed metadata about a folder, including its contents, permissions,
sharing settings, and hierarchical position. It's essential for building detailed folder
views, property dialogs, and administrative interfaces. The returned information includes
both folder-specific data and aggregated statistics about contained items.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing comprehensive folder information, including id, title, path, parent information, file/folder counts, total size, permissions, sharing status, creation/modification dates, and access metadata.

#### Examples

```javascript
const folderInfo = await docSpace.getFolderInfo();
console.log('Folder:', folderInfo.title);
console.log('Path:', folderInfo.path);
console.log('Files:', folderInfo.fileCount);
console.log('Subfolders:', folderInfo.folderCount);
console.log('Total Size:', formatBytes(folderInfo.totalSize));
```

```javascript
try {
  const info = await docSpace.getFolderInfo();
  
  const canCreate = info.permissions.includes('create');
  const canEdit = info.permissions.includes('edit');
  
  console.log(`Folder: ${info.title}`);
  console.log(`Permissions: Create=${canCreate}, Edit=${canEdit}`);
} catch (error) {
  console.error('Failed to load folder info:', error);
}
```

#### See

 - [getFolders](#getfolders) - Retrieves information for multiple folders.
 - [getFiles](#getfiles) - Gets the contents of a folder.
 - [createFolder](#createfolder) - Creates subfolders within the specified folder.

***

### getSelection()

> **getSelection**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1052](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1052)

Retrieves the current user selection for context-aware operations and bulk actions.

This method returns detailed information about all currently selected items in the
DocSpace interface, enabling applications to perform context-sensitive operations,
bulk actions, and intelligent user interface updates. The selection includes both
files and folders, with comprehensive metadata for each selected item.

#### Returns

`Promise`\<`object`\>

A promise that resolves to the current selection object, containing selected items and metadata.

#### Examples

```typescript
const selection = await docSpace.getSelection();
console.log('Current selection:', selection);

if (selection.items && selection.items.length > 0) {
  const files = selection.items.filter(item => item.type === 'file');
  const folders = selection.items.filter(item => item.type === 'folder');
  console.log(`Selected: ${files.length} files, ${folders.length} folders`);
}
```

```typescript
try {
  const selection = await docSpace.getSelection();
  
  if (!selection.items?.length) {
    console.log('No items selected');
    return;
  }
  
  const canDelete = selection.items.every(item => item.permissions.canDelete);
  console.log('Can delete all selected items:', canDelete);
} catch (error) {
  console.error('Failed to get selection:', error);
}
```

#### Throws

Throws an error if unable to retrieve the current selection state.

#### See

 - [getList](#getlist) - Retrieves all available items in the current context.
 - [openModal](#openmodal) - Opens modals using the selected items as context.
 - [setListView](#setlistview) - Optimizes the view mode based on selection patterns.

***

### getFiles()

> **getFiles**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1091](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1091)

Retrieves a list of files from the current context with comprehensive metadata.

This method fetches all files accessible in the current context, providing detailed
information about each file, including metadata, permissions, and modification history.
It's essential for building file browsers, dashboards, and file management interfaces.
The returned data respects user permissions and access controls.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing an array of file objects. Each file includes properties like id, title, type, extension, size, modified date, permissions, and access metadata.

#### Examples

```javascript
const files = await docSpace.getFiles();
console.log(`Found ${files.length} files`);

files.forEach(file => {
  console.log(`${file.title} (${file.type}) - Modified: ${file.modified}`);
});
```

```javascript
const allFiles = await docSpace.getFiles();

const documents = allFiles.filter(file =>
  ['docx', 'doc', 'pdf'].includes(file.extension.toLowerCase())
);

console.log(`Found ${documents.length} document files`);
```

#### See

 - [getFolders](#getfolders) - Retrieves information about folders.
 - [getList](#getlist) - Provides a combined listing of files and folders.
 - [createFile](#createfile) - Creates new files.

***

### getFolders()

> **getFolders**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1130](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1130)

Retrieves a list of folders from the current context with detailed information.

This method fetches all folders accessible in the current context, providing comprehensive
information about folder structure, permissions, and contents. It's crucial for building
navigation interfaces, folder browsers, and organizational tools. The method respects
user access permissions and returns only the folders the user can view.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing an array of folder objects. Each folder includes properties like id, title, parent id, number of files, number of folders, size, permissions, creation date, and sharing status.

#### Examples

```javascript
const folders = await docSpace.getFolders();
console.log(`Found ${folders.length} folders`);

folders.forEach(folder => {
  console.log(`${folder.title} - Files: ${folder.fileCount}, Subfolders: ${folder.folderCount}`);
});
```

```javascript
const folders = await docSpace.getFolders();

const editableFolders = folders.filter(folder => folder.permissions.edit);
const sharedFolders = folders.filter(folder => folder.shared);

console.log(`Editable: ${editableFolders.length}`);
console.log(`Shared: ${sharedFolders.length}`);
```

#### See

 - [getFiles](#getfiles) - Retrieves information about files.
 - [getFolderInfo](#getfolderinfo) - Provides detailed information for a single folder.
 - [createFolder](#createfolder) - Creates new folders.

***

### getList()

> **getList**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1170](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1170)

Retrieves a combined list of files and folders from the current context.

This method provides a unified view of all files and folders in the current location,
making it ideal for building comprehensive file browsers, search interfaces, and
content management systems. The returned list includes mixed content types with
a consistent metadata structure, allowing unified handling and display.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing an array of mixed file and folder objects. Each item includes common properties like id, title, type ('file' or 'folder'), modified date, and type-specific metadata such as file size and extension or folder contents.

#### Examples

```javascript
const items = await docSpace.getList();

const files = items.filter(item => item.type === 'file');
const folders = items.filter(item => item.type === 'folder');

console.log(`Total items: ${items.length}`);
console.log(`Files: ${files.length}, Folders: ${folders.length}`);
```

```javascript
const allItems = await docSpace.getList();

const searchResults = allItems.filter(item =>
  item.title.toLowerCase().includes('report')
);

console.log(`Found ${searchResults.length} items matching 'report'`);
```

#### See

 - [getFiles](#getfiles) - Retrieves a files-only listing.
 - [getFolders](#getfolders) - Retrieves a folders-only listing.
 - [getFolderInfo](#getfolderinfo) - Provides information about the current folder.

***

### getRooms()

> **getRooms**(`filter`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1215](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1215)

Retrieves a list of rooms based on the provided filter criteria.

This method allows fetching rooms from DocSpace with various filtering options,
including search terms, sorting, pagination, and room type filtering. It's essential
for building room browsers, dashboards, and selection interfaces.

#### Parameters

##### filter

[`TFrameFilter`](../type-aliases/TFrameFilter.md)

The criteria used to filter and sort the rooms.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the filtered rooms and metadata.

#### Examples

```typescript
const roomsResult = await sdkInstance.getRooms({
  page: 1,
  pageSize: 20
});

console.log('Total rooms:', roomsResult.total);
console.log('Rooms:', roomsResult.rooms);
```

```typescript
const searchResults = await sdkInstance.getRooms({
  filterValue: 'project',
  roomType: 'collaboration',
  tags: ['development', 'frontend'],
  page: 1,
  pageSize: 50,
  sortBy: 'title',
  sortOrder: 'asc'
});

console.log('Matching rooms:', searchResults.rooms.length);
```

#### Throws

May throw an error if the filter parameters are invalid or if the user lacks permission to access rooms.

#### See

 - [createRoom](#createroom) - Creates new rooms.
 - [addTagsToRoom](#addtagstoroom) - Adds tags to existing rooms.
 - [removeTagsFromRoom](#removetagsfromroom) - Removes tags from rooms.

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1260](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1260)

Retrieves comprehensive information about the current user profile and session details.

This method fetches detailed information about the currently authenticated user,
including profile data, permissions, preferences, and session metadata. The
information is essential for personalizing user interfaces, implementing role-based
access controls, and displaying user-specific content and capabilities.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing comprehensive user information and session data.

#### Examples

```typescript
const userInfo = await docSpace.getUserInfo();
console.log('User information:', userInfo);
console.log('User name:', userInfo.displayName);
console.log('Email:', userInfo.email);
console.log('Role:', userInfo.role);
console.log('Status:', userInfo.isOnline ? 'Online' : 'Offline');
```

```typescript
try {
  const userInfo = await docSpace.getUserInfo();
  
  const isAdmin = userInfo.role === 'admin';
  const canManage = userInfo.role === 'manager' || isAdmin;
  
  console.log('User permissions:', { isAdmin, canManage });
  
  document.documentElement.setAttribute('data-theme', userInfo.theme || 'light');
} catch (error) {
  console.error('Failed to load user info:', error);
}
```

#### Throws

Throws an error if the user is not authenticated or user information cannot be retrieved.

#### See

 - [login](#login) - Authenticates users before retrieving their information.
 - [logout](#logout) - Terminates user sessions and clears user data.
 - [setConfig](#setconfig) - Updates user preferences and configuration settings.

***

### getHashSettings()

> **getHashSettings**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1307](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1307)

Retrieves the server's current password hashing configuration.

This method fetches the cryptographic settings required for secure password hashing.
These settings should be used with the `createHash()` method to ensure compatibility
with the server's security requirements.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing hash algorithm settings.

#### Examples

```typescript
const hashSettings = await sdkInstance.getHashSettings();
console.log('Hash algorithm:', hashSettings.algorithm);
console.log('Salt length:', hashSettings.saltLength);
console.log('Iterations:', hashSettings.iterations);

const passwordHash = await sdkInstance.createHash('userPassword123', hashSettings);

await sdkInstance.login('user@example.com', passwordHash.hash);
```

```typescript
async function authenticateUser(email: string, password: string) {
  try {
    const hashSettings = await sdkInstance.getHashSettings();

    const hashResult = await sdkInstance.createHash(password, hashSettings);

    const loginResult = await sdkInstance.login(email, hashResult.hash);

    return loginResult;
  } catch (error) {
    console.error('Authentication failed:', error.message);
    throw error;
  }
}
```

#### Throws

Throws an error if the hash settings cannot be retrieved from the server.

#### See

 - [createHash](#createhash) - Creates password hashes using these settings.
 - [login](#login) - Authenticates users with hashed passwords.

***

### openModal()

> **openModal**(`type`, `options`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1356](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1356)

Opens a modal dialog of the specified type with comprehensive configuration options.

This method provides a unified interface for opening various types of modal dialogs
within DocSpace, including file operations, room management, user settings, and
administrative functions. Modals are displayed as overlay windows that maintain
context with the parent application while providing focused interfaces for
specific tasks.

#### Parameters

##### type

`string`

The type of modal to open (e.g., "upload", "share", "properties", "settings").

##### options

`object`

A configuration object containing modal-specific options and event handlers.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the result of the modal operation.

#### Examples

```typescript
const result = await docSpace.openModal('upload', {
  folderId: 'documents-folder-123',
  allowedExtensions: ['.pdf', '.docx', '.xlsx'],
  multiple: true
});
console.log('Upload completed:', result.uploadedFiles.length, 'files');
```

```typescript
try {
  const shareResult = await docSpace.openModal('share', {
    itemId: 'room-456',
    itemType: 'room',
    shareMode: 'collaborate',
    permissions: {
      canEdit: true,
      canDownload: true
    }
  });
  console.log('Share completed:', shareResult.sharedWith);
} catch (error) {
  console.error('Share failed:', error);
}
```

#### Throws

Throws an error if the modal type is not supported or the configuration is invalid.

#### See

 - [getSelection](#getselection) - Retrieves currently selected items to use with modals.
 - [setConfig](#setconfig) - Configures global modal behavior and appearance.

***

### createFile()

> **createFile**(`folderId`, `title`, `templateId`, `formId`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1404](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1404)

Creates a new file in the specified folder using templates and forms.

This method allows programmatically creating different file types in DocSpace,
including documents, spreadsheets, presentations, and custom forms. It is possible to specify
templates for consistent formatting and associate forms for structured data collection.
The created file will inherit permissions from the parent folder.

#### Parameters

##### folderId

`string`

The ID of the folder where the file will be created. Must be a valid folder ID with write access.

##### title

`string`

The title of the new file. Used as the filename with the appropriate extension based on the template type.

##### templateId

`string`

The ID of the template for the new file. Determines file type and initial content structure.

##### formId

`string`

The ID of the form associated with the new file. Use an empty string if no form is needed.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object representing the created file with properties like id, title, type, and creation date.

#### Examples

```javascript
const file = await docSpace.createFile(
  "folder123",
  "Project Proposal",
  "template456",
  "form789"
);
console.log('Created file:', file.title, 'ID:', file.id);
```

```javascript
try {
  const document = await docSpace.createFile(
    "documents-folder-id",
    "Meeting Notes",
    "document-template-id",
    ""
  );
  console.log('Document created successfully:', document.id);
} catch (error) {
  console.error('File creation failed:', error.message);
}
```

#### See

 - [createFolder](#createfolder) - Creates folders to organize files.
 - [getFiles](#getfiles) - Retrieves created files.
 - [initFrame](#initframe) - Opens files in editor mode.

***

### createFolder()

> **createFolder**(`parentFolderId`, `title`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1456](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1456)

Creates a new folder within the specified parent folder for content organization.

This method allows programmatically creating folders to organize files and other folders
in a hierarchical structure. Created folders inherit permissions from the parent folder
and can be used to establish project structures, departmental organization, or any
custom file management system. The operation respects DocSpace access controls.

#### Parameters

##### parentFolderId

`string`

The ID of the parent folder where the new folder will be created. Must be a valid folder ID with write permissions.

##### title

`string`

The title of the new folder. Should be unique within the parent folder and follow naming conventions.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the details of the created folder, including id, title, creation date, and access permissions.

#### Examples

```javascript
const projectFolder = await docSpace.createFolder(
  "root-folder-id",
  "Project Alpha"
);
console.log('Created folder:', projectFolder.title, 'ID:', projectFolder.id);
```

```javascript
try {
  const newFolder = await docSpace.createFolder(
    "parent-folder-id",
    "Marketing Materials"
  );
  console.log('Folder created successfully:', newFolder.id);
} catch (error) {
  console.error('Folder creation failed:', error.message);
}
```

#### See

 - [createFile](#createfile) - Creates files within folders.
 - [getFolders](#getfolders) - Retrieves folder lists.
 - [getFolderInfo](#getfolderinfo) - Provides detailed folder information.

***

### createRoom()

> **createRoom**(`title`, `roomType`, `quota?`, `tags?`, `color?`, `cover?`, `indexing?`, `denyDownload?`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1512](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1512)

Creates a new room with the specified parameters and configuration.

This method allows programmatically creating different types of rooms in DocSpace,
including collaboration rooms, public rooms, and custom rooms. It is possible to configure
room properties like quotas, tags, branding, and access permissions during creation.

#### Parameters

##### title

`string`

The display name/title for the new room.

##### roomType

The type of room to create (collaboration, public, custom, etc.).

`string` | `number`

##### quota?

`number`

Optional storage quota limit for the room in bytes.

##### tags?

`string`[]

Optional array of tags to categorize and organize the room.

##### color?

`string`

Optional hex color code for the room's branding theme.

##### cover?

`string`

Optional cover image URL or file path for the room.

##### indexing?

`boolean`

Optional flag to enable ordisable search indexing (VDR rooms only).

##### denyDownload?

`boolean`

Optional flag to prevent file downloads (VDR rooms only).

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the created room's details.

#### Examples

```typescript
const room = await sdkInstance.createRoom(
  'Project Alpha Team',
  'collaboration'
);

console.log('Created room:', room.id);
console.log('Room URL:', room.url);
```

```typescript
const projectRoom = await sdkInstance.createRoom(
  'Q1 Marketing Campaign',
  'collaboration',
  5368709120,
  ['marketing', 'q1-2024', 'campaign'],
  '#FF6B35',
  'https://example.com/covers/marketing-cover.jpg'
);

console.log('Room created with quota:', projectRoom.quota);
console.log('Room tags:', projectRoom.tags);
```

#### Throws

Throws an error if room creation fails due to permissions, quota limits, or invalid parameters.

#### See

 - [getRooms](#getrooms) - Retrieves existing rooms.
 - [addTagsToRoom](#addtagstoroom) - Adds tags to the created room.
 - [createFolder](#createfolder) - Creates folders within the room.

***

### setListView()

> **setListView**(`viewType`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1577](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1577)

Dynamically changes the list view display mode for enhanced user experience.

This method allows applications to programmatically switch between different
view modes to optimize content presentation based on user preferences, screen
size, or content type. View changes are applied immediately and persist for
the user session, providing responsive and adaptive interfaces.

#### Parameters

##### viewType

`string`

The view mode to apply: "row" (compact list), "table" (detailed grid), or "tile" (preview cards).

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object indicating the result of the view change operation.

#### Examples

```typescript
await docSpace.setListView('table');
console.log('View changed to table mode');
```

```typescript
const screenWidth = window.innerWidth;
let optimalView;

if (screenWidth < 768) {
  optimalView = 'row';
} else if (screenWidth < 1200) {
  optimalView = 'table';
} else {
  optimalView = 'tile';
}

try {
  await docSpace.setListView(optimalView);
  console.log('View optimized for screen size:', optimalView);
} catch (error) {
  console.error('Failed to change view:', error);
}
```

#### Throws

Throws an error if the view type is not supported or the operation fails.

#### See

 - [getList](#getlist) - Retrieves content displayed in the current view mode.
 - [getConfig](#getconfig) - Gets the current view configuration and defaults.
 - [setConfig](#setconfig) - Updates global default view preferences.

***

### createHash()

> **createHash**(`password`, `hashSettings`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1605](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1605)

Creates a hash for the given password using the specified hash settings.

This method is typically used before authentication to create a secure hash
of the user's password that can be safely transmitted and stored.

#### Parameters

##### password

`string`

The plaintext password to be hashed.

##### hashSettings

`object`

A configuration object for the hash function, containing algorithm settings.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the generated password hash.

#### Example

```typescript
const hashSettings = await sdkInstance.getHashSettings();

const hashResult = await sdkInstance.createHash('userPassword123', hashSettings);
console.log('Password hash:', hashResult.hash);

await sdkInstance.login('user@example.com', hashResult.hash);
```

#### Throws

Throws an error if the password is empty or the hash settings are invalid.

#### See

 - [getHashSettings](#gethashsettings) - Retrieves the current hash settings.
 - [login](#login) - Uses the generated hash for authentication.

***

### login()

> **login**(`email`, `passwordHash`, `password?`, `session?`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1655](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1655)

Authenticates a user with the provided credentials.

This method supports both password hash and plaintext password authentication.
For security reasons, it is recommended to use password hashing via the `createHash()` method.

#### Parameters

##### email

`string`

The user's email address used for authentication.

##### passwordHash

`string`

The hashed password (recommended) obtained from the `createHash()` method.

##### password?

`string`

Optional plaintext password (not recommended for production).

##### session?

`boolean`

Optional flag to create a persistent session. The default value is `false`.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the authentication result and user data.

#### Examples

```typescript
const hashSettings = await sdkInstance.getHashSettings();
const hashResult = await sdkInstance.createHash('userPassword123', hashSettings);

const loginResult = await sdkInstance.login(
  'user@example.com',
  hashResult.hash,
  undefined,
  true
);

console.log('Login successful:', loginResult.success);
console.log('User data:', loginResult.user);
```

```typescript
const loginResult = await sdkInstance.login(
  'user@example.com',
  '',
  'userPassword123',
  false
);
```

#### Throws

Throws an error if authentication fails or credentials are invalid.

#### See

 - [createHash](#createhash) - Creates secure password hashes.
 - [getHashSettings](#gethashsettings) - Retrieves hash configuration.
 - [logout](#logout) - Ends the user session.

***

### logout()

> **logout**(): `Promise`\<`object`\>

Defined in: [instance/index.ts:1694](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1694)

Ends the current user session and logs out the user.

This method clears the user's authentication state and session data,
effectively signing them out of the DocSpace application.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the logout confirmation.

#### Example

```typescript
const logoutResult = await sdkInstance.logout();
console.log('Logout successful:', logoutResult.success);

try {
  await sdkInstance.logout();
  console.log('User has been logged out successfully');
  window.location.href = '/login';
} catch (error) {
  console.error('Logout failed:', error.message);
}
```

#### Throws

Throws an error if the logout operation fails.

#### See

[login](#login) - Authenticates a user and starts a session.

***

### createTag()

> **createTag**(`name`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1732](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1732)

Creates a new tag with the specified name.

Tags provide a powerful way to organize and categorize content across the DocSpace portal.
They can be used for project management, content categorization, workflow organization,
and creating custom filtering systems for better content discovery.

#### Parameters

##### name

`string`

The name of the tag to be created. It should be descriptive and unique.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object representing the created tag with its ID and metadata.

#### Examples

```typescript
const tag = await sdkInstance.createTag('Project Alpha');
console.log('Tag created:', tag.name, 'with ID:', tag.id);
```

```typescript
const tagNames = ['High Priority', 'Marketing', 'Review'];

for (const tagName of tagNames) {
  try {
    const tag = await sdkInstance.createTag(tagName);
    console.log(`Created tag: ${tagName}`);
  } catch (error) {
    console.error(`Failed to create tag ${tagName}:`, error);
  }
}
```

#### Throws

May throw an error if thetag name is invalid, already exists, or user lacks permission to create tags.

#### See

 - [addTagsToRoom](#addtagstoroom) - Applies created tags to rooms.
 - [removeTagsFromRoom](#removetagsfromroom) - Removes tags from rooms.

***

### addTagsToRoom()

> **addTagsToRoom**(`roomId`, `tags`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1765](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1765)

Adds tags to a specified room for organization and categorization.

This method allows applying multiple tags to a room simultaneously, helping organize
rooms by project, department, priority, or any custom categorization system. Tags improve
discoverability and enable advanced filtering and search capabilities.

#### Parameters

##### roomId

`string`

The unique identifier of the room to which tags will be added.

##### tags

`string`[]

An array of tag names to be added to the room. Tags should already exist or will be created automatically.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the result of the operation and updated room metadata.

#### Examples

```typescript
await sdkInstance.addTagsToRoom('room-123', ['Project Alpha', 'High Priority']);
console.log('Tags added successfully to project room');
```

```typescript
const projectTags = ['Engineering', 'Development', 'Q1-2024'];
const result = await sdkInstance.addTagsToRoom('room-456', projectTags);
console.log('Room organized with tags:', projectTags);
```

#### Throws

May throw an error if the room ID is invalid, tags do not exist, or the user lacks permission to modify the room tags.

#### See

 - [createTag](#createtag) - Creates new tags before applying them.
 - [removeTagsFromRoom](#removetagsfromroom) - Removes tags from rooms.
 - [getRooms](#getrooms) - Retrieves rooms with their current tags.

***

### removeTagsFromRoom()

> **removeTagsFromRoom**(`roomId`, `tags`): `Promise`\<`object`\>

Defined in: [instance/index.ts:1809](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1809)

Removes specified tags from a room for organization and categorization cleanup.

This method allows removing multiple tags from a room simultaneously, helping maintain
clean and accurate room categorization. It is essential for tag management workflows, project
status updates, archive cleanup, and removing outdated or incorrect categorizations. The
operation is atomic: either all specified tags are removed or none are affected.

#### Parameters

##### roomId

`string`

The unique identifier of the room from which tags will be removed.

##### tags

`string`[]

An array of tag names to be removed from the room. Only existing tags will be processed.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the result of the operation and updated room metadata.

#### Examples

```typescript
const result = await sdkInstance.removeTagsFromRoom(
  'room-456',
  ['In-Progress', 'Review-Pending', 'Draft']
);
console.log('Tags removed successfully:', result);
```

```typescript
const archivedRooms = await sdkInstance.getRooms({ tags: ['Archived'] });
const tagsToRemove = ['Active', 'In-Progress', 'Urgent'];

for (const room of archivedRooms.rooms) {
  await sdkInstance.removeTagsFromRoom(room.id, tagsToRemove);
  console.log(`Cleaned up tags for: ${room.title}`);
}
```

#### Throws

May throw an error if the room ID is invalid, tags do not exist in the room, or the user lacks permission to modify room tags.

#### See

 - [addTagsToRoom](#addtagstoroom) - Adds tags to a room.
 - [createTag](#createtag) - Creates new tags before applying them.
 - [getRooms](#getrooms) - Retrieves rooms along with their current tags.

***

### executeInEditor()

> **executeInEditor**(`callback`, `data?`): `void`

Defined in: [instance/index.ts:1867](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/instance/index.ts#L1867)

Executes custom functions within the editor context for advanced document manipulation.

This method allows applications to run custom code directly within the document editor
environment, enabling advanced programmatic operations, content manipulation, automation
tasks, and integration with external systems. The callback function receives the editor
instance and optional data, providing full access to editor APIs and document content.

#### Parameters

##### callback

(`instance`, `data?`) => `void`

The function to be executed within the editor context. Receives the editor instance and optional data.

##### data?

`object`

Optional object providing context or configuration for the callback.

#### Returns

`void`

#### Examples

```typescript
const templateData = {
  customerName: 'Acme Corporation',
  projectName: 'Digital Transformation',
  startDate: new Date().toLocaleDateString()
};

docSpace.executeInEditor((editorInstance, data) => {
  editorInstance.insertText(`
    PROJECT PROPOSAL
    Client: ${data.customerName}
    Project: ${data.projectName}
    Date: ${data.startDate}
  `);
}, templateData);
```

```typescript
docSpace.executeInEditor((editorInstance, data) => {
  const documentContent = editorInstance.getDocumentContent();
  
  if (data.checkSpelling) {
    const spellCheckResults = editorInstance.runSpellCheck();
    spellCheckResults.forEach(issue => {
      if (issue.confidence > 0.8) {
        editorInstance.replaceText(issue.position, issue.suggestion);
      }
    });
  }
  
  editorInstance.saveDocument();
}, { checkSpelling: true });
```

#### Throws

Throws an error if the editor context is not available or callback execution fails.

#### See

 - [SDK.initEditor](SDK.md#initeditor) - Initializes the editor before executing custom functions.
 - [getSelection](#getselection) - Retrieves the selected content to operate on within the editor.
