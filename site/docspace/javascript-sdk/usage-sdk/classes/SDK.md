# Class: SDK

Defined in: [sdk/index.ts:49](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L49)

The SDK class is responsible for managing multiple `SDKInstance` objects.
It provides methods to initialize instances with different configurations for various DocSpace modes.

## Remarks

- If an instance with the same `frameId` already exists, it will be reinitialized.
- Otherwise, a new instance is created, initialized, and added to the list of instances.
- All configuration properties, except `frameId` and `src`, have sensible defaults.

## Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.init({
  frameId: 'my-docspace',
  src: 'https://your-docspace.com'
});
```

## Constructors

### Constructor

> **new SDK**(): `SDK`

#### Returns

`SDK`

## Properties

### frames

> **frames**: `Record`\<`string`, [`SDKInstance`](SDKInstance.md)\> = `{}`

Defined in: [sdk/index.ts:54](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L54)

Maps frame IDs to their corresponding `SDKInstance` objects.
Used to track and manage multiple SDK instances across different frames.

## Methods

### init()

> **init**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:209](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L209)

Initializes an SDK instance with the provided configuration.

This is the core initialization method that creates or reinitializes SDK instances.
If an instance with the same `frameId` already exists, it reinitializes that instance.
Otherwise, it creates a new instance, initializes it, and adds it to the list of instances.
This method provides the foundation for all DocSpace integrations.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for the SDK instance. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.init({
  frameId: 'main-docspace',
  src: 'https://your-docspace.com'
});

console.log('DocSpace initialized with ID:', instance.config.frameId);
```

```typescript
import { SDK, SDKMode, Theme, ManagerViewMode, FilterSortBy, FilterSortOrder } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const managerInstance = sdk.init({
  frameId: 'file-manager',
  src: 'https://your-docspace.com',
  mode: SDKMode.Manager,
  width: '1200px',
  height: '800px',
  theme: Theme.Dark,
  viewAs: ManagerViewMode.Table,
  showFilter: true,
  showMenu: true,
  viewTableColumns: 'Name,Size,Type,Modified Date,Author',
  filter: {
    count: '50',
    sortBy: FilterSortBy.Name,
    sortOrder: FilterSortOrder.Ascending,
    withSubfolders: true
  },
  events: {
    onAppReady: () => {
      console.log('File manager ready');
    },
    onContentReady: () => {
      console.log('Content loaded successfully');
    }
  }
});
```

```typescript
import { SDK, SDKMode, EditorType, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const editorInstance = sdk.init({
  frameId: 'document-editor',
  src: 'https://your-docspace.com',
  mode: SDKMode.Editor,
  id: 'document-123',
  width: '100%',
  height: '100vh',
  theme: Theme.System,
  editorType: EditorType.Desktop,
  editorCustomization: {
    customer: {
      name: 'Your Company',
      logo: 'https://your-company.com/logo.png'
    },
    features: {
      spellcheck: true,
      chat: true,
      comments: true
    },
    goback: {
      url: '/documents',
      text: 'Back to Documents'
    }
  },
  events: {
    onAppReady: () => {
      console.log('Editor initialized');
    },
    onEditorCloseCallback: () => {
      console.log('Editor close requested');
    },
    onAppError: (error) => {
      console.error('Editor error:', error);
    }
  }
});
```

```typescript
import { SDK, SDKMode, SelectorFilterType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();

const manager = sdk.init({
  frameId: 'main-manager',
  src: 'https://your-docspace.com',
  mode: SDKMode.Manager,
  showHeader: true,
  showMenu: true,
  withBreadCrumbs: true
});

const selector = sdk.init({
  frameId: 'file-selector',
  src: 'https://your-docspace.com',
  mode: SDKMode.FileSelector,
  selectorType: SelectorFilterType.All,
  showSelectorHeader: true,
  showSelectorCancel: true,
  acceptButtonLabel: 'Select Files',
  cancelButtonLabel: 'Cancel',
  width: '800px',
  height: '600px'
});

console.log('Active instances:', Object.keys(sdk.frames));
```

```typescript
import { SDK, SDKMode } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();

let instance = sdk.init({
  frameId: 'dynamic-frame',
  src: 'https://your-docspace.com',
  mode: SDKMode.Viewer,
  id: 'document-456'
});

instance = sdk.init({
  frameId: 'dynamic-frame',
  src: 'https://your-docspace.com',
  mode: SDKMode.Editor,
  id: 'document-789'
});

console.log('Frame reinitialized in editor mode');
```

***

### initFrame()

> **initFrame**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:333](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L333)

Initializes the frame with the given configuration.

This is a convenience wrapper around the main `init` method that creates or reinitializes
a DocSpace frame with the specified configuration. It is equivalent to calling `init` directly,
but provides a more explicit method name for frame initialization use cases.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for the frame. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const frame = sdk.initFrame({
  frameId: 'main-docspace-frame',
  src: 'https://your-docspace.com'
});

console.log('Frame ready:', frame.config.frameId);
```

```typescript
import { SDK, Theme, ManagerViewMode } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const customFrame = sdk.initFrame({
  frameId: 'custom-styled-frame',
  src: 'https://your-docspace.com',
  width: '1024px',
  height: '768px',
  theme: Theme.Dark,
  viewAs: ManagerViewMode.Tile,
  showHeader: true,
  showMenu: true,
  buttonColor: '#ff6b35'
});
```

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();

const frame = sdk.initFrame({
  frameId: 'event-driven-frame',
  src: 'https://your-docspace.com',
  width: '100%',
  height: '800px',
  checkCSP: true,
  events: {
    onAppReady: () => {
      console.log('Frame application ready');
    },
    onContentReady: () => {
      console.log('Frame content loaded');
    },
    onAppError: (error) => {
      console.error('Frame error:', error);
    },
    onAuthSuccess: (data) => {
      console.log('Authentication successful:', data);
    },
    onNoAccess: () => {
      console.warn('Access denied to requested resource');
    }
  }
});
```

```typescript
import { SDK, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();

try {
  const secureFrame = sdk.initFrame({
    frameId: 'secure-frame',
    src: 'https://your-docspace.com',
    requestToken: 'your-auth-token-here',
    width: '100%',
    height: '100vh',
    theme: Theme.System,
    locale: 'en-US',
    checkCSP: true,
    showSignOut: false,
    events: {
      onAppReady: () => {
        console.log('Secure frame initialized successfully');
      },
      onAuthSuccess: (data) => {
        console.log('Token authentication successful');
      },
      onAppError: (error) => {
        console.error('Security or initialization error:', error);
      }
    }
  });
} catch (error) {
  console.error('Failed to initialize secure frame:', error);
}
```

***

### initManager()

> **initManager**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:464](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L464)

Initializes the manager with the provided configuration.

The manager mode provides a full-featured file management interface for DocSpace,
allowing users to browse, organize, upload, and manage files and folders.
This mode is ideal for creating file management dashboards and administrative interfaces.
Manager mode is the default SDK mode.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for initializing the manager. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const manager = sdk.initManager({
  frameId: 'file-manager',
  src: 'https://your-docspace.com'
});

console.log('File manager initialized');
```

```typescript
import { SDK, ManagerViewMode, FilterSortBy, FilterSortOrder, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const projectManager = sdk.initManager({
  frameId: 'project-files',
  src: 'https://your-docspace.com',
  id: 'project-folder-123',
  width: '1200px',
  height: '700px',
  theme: Theme.Dark,
  viewAs: ManagerViewMode.Table,
  showFilter: true,
  showMenu: true,
  viewTableColumns: 'Name,Size,Type,Modified Date,Author,Tags',
  filter: {
    count: '50',
    sortBy: FilterSortBy.Name,
    sortOrder: FilterSortOrder.Ascending,
    withSubfolders: true,
    search: 'project'
  },
  withSearch: true,
  withBreadCrumbs: true
});
```

```typescript
import { SDK, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const teamManager = sdk.initManager({
  frameId: 'team-workspace',
  src: 'https://your-docspace.com',
  width: '100%',
  height: '800px',
  theme: Theme.System,
  locale: 'en-US',
  showHeader: true,
  showMenu: true,
  showSignOut: false,
  showSettings: true,
  infoPanelVisible: true,
  events: {
    onAppReady: () => {
      console.log('Team workspace ready');
    },
    onContentReady: () => {
      console.log('Team workspace content loaded');
    },
    onSelectCallback: (data) => {
      console.log('Item selected:', data);
    },
    onDownload: (data) => {
      console.log('Download initiated:', data);
    },
    onAppError: (error) => {
      console.error('Team workspace error:', error);
    }
  }
});
```

```typescript
import { SDK, ManagerViewMode, HeaderBannerDisplaying } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const adminManager = sdk.initManager({
  frameId: 'admin-panel',
  src: 'https://your-docspace.com',
  requestToken: 'admin-auth-token',
  width: '1400px',
  height: '900px',
  viewAs: ManagerViewMode.Tile,
  showHeader: true,
  showHeaderBanner: HeaderBannerDisplaying.Info,
  showMenu: true,
  showFilter: true,
  showSettings: true,
  showSignOut: true,
  buttonColor: '#e74c3c',
  destroyText: 'Admin panel session has ended',
  events: {
    onAppReady: () => {
      console.log('Admin panel ready');
    },
    onContentReady: () => {
      console.log('Admin content loaded');
    },
    onAuthSuccess: (data) => {
      console.log('Admin authentication successful');
    },
    onSignOut: () => {
      console.log('Admin signed out');
    },
    onAppError: (error) => {
      console.error('Admin panel error:', error);
    }
  }
});
```

***

### initViewer()

> **initViewer**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:595](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L595)

Initializes the viewer with the provided configuration.

The viewer mode provides a read-only interface for viewing documents, presentations,
and other files in DocSpace. This mode is perfect for document preview functionality,
content review, and read-only document sharing scenarios.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for the viewer. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const viewer = sdk.initViewer({
  frameId: 'document-viewer',
  src: 'https://your-docspace.com',
  id: 'document-123'
});

console.log('Document viewer initialized');
```

```typescript
import { SDK, EditorType, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const presentationViewer = sdk.initViewer({
  frameId: 'presentation-display',
  src: 'https://your-docspace.com',
  id: 'presentation-456',
  width: '1024px',
  height: '768px',
  theme: Theme.Dark,
  locale: 'en-US',
  editorType: EditorType.Desktop,
  showTitle: true,
  events: {
    onAppReady: () => {
      console.log('Presentation viewer ready');
    },
    onContentReady: () => {
      console.log('Presentation content rendered');
    },
    onAppError: (error) => {
      console.error('Viewer error:', error);
    }
  }
});
```

```typescript
import { SDK, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const publicViewer = sdk.initViewer({
  frameId: 'public-document',
  src: 'https://your-docspace.com',
  id: 'shared-document-789',
  requestToken: 'public-access-token-xyz',
  width: '100%',
  height: '700px',
  theme: Theme.System,
  showTitle: true,
  showHeader: false,
  noLoader: false,
  destroyText: 'Document viewer has been closed',
  events: {
    onAppReady: () => {
      console.log('Public viewer ready');
    },
    onContentReady: () => {
      console.log('Public document loaded');
    },
    onNoAccess: () => {
      console.warn('Access denied to public document');
    },
    onNotFound: () => {
      console.warn('Public document not found');
    }
  }
});
```

```typescript
import { SDK, EditorType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const controlledViewer = sdk.initViewer({
  frameId: 'controlled-viewer',
  src: 'https://your-docspace.com',
  id: 'protected-document-101',
  width: '900px',
  height: '800px',
  editorType: EditorType.Embedded,
  editorCustomization: {
    anonymous: {
      request: false,
      label: 'Guest Viewer'
    },
    goback: {
      text: 'Close Viewer',
      url: '/documents'
    },
    customer: {
      name: 'Document Portal',
      logo: 'https://example.com/logo.png'
    }
  },
  events: {
    onAppReady: () => {
      console.log('Controlled viewer ready');
    },
    onEditorCloseCallback: () => {
      console.log('Viewer close requested');
      window.location.href = '/documents';
    },
    onAppError: (error) => {
      console.error('Controlled viewer error:', error);
    }
  }
});
```

***

### initEditor()

> **initEditor**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:764](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L764)

Initializes the editor with the given configuration.

The editor mode provides full document editing capabilities, allowing users to create,
modify, and collaborate on documents in real-time. This mode supports various document
types, including text documents, spreadsheets, and presentations with collaborative features.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for the editor. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const editor = sdk.initEditor({
  frameId: 'document-editor',
  src: 'https://your-docspace.com',
  id: 'document-123'
});

console.log('Document editor initialized');
```

```typescript
import { SDK, EditorType, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const collaborativeEditor = sdk.initEditor({
  frameId: 'team-editor',
  src: 'https://your-docspace.com',
  id: 'team-document-456',
  width: '1200px',
  height: '900px',
  editorType: EditorType.Desktop,
  theme: Theme.System,
  locale: 'en-US',
  editorCustomization: {
    customer: {
      name: 'Your Company',
      logo: 'https://your-company.com/logo.png'
    },
    features: {
      spellcheck: true,
      comments: true,
      chat: true,
      review: true
    },
    goback: {
      text: 'Back to Documents',
      url: '/documents'
    }
  },
  events: {
    onAppReady: () => {
      console.log('Collaborative editor ready');
    },
    onContentReady: () => {
      console.log('Document loaded for editing');
    },
    onEditorCloseCallback: () => {
      console.log('Editor close requested');
    },
    onAppError: (error) => {
      console.error('Editor error:', error);
    }
  }
});
```

```typescript
import { SDK, EditorType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const restrictedEditor = sdk.initEditor({
  frameId: 'restricted-editor',
  src: 'https://your-docspace.com',
  id: 'sensitive-document-789',
  requestToken: 'restricted-access-token',
  width: '1000px',
  height: '700px',
  editorType: EditorType.Embedded,
  editorCustomization: {
    toolbar: {
      file: {
        print: false,
        download: false
      },
      plugins: {
        autostart: [],
        pluginsData: []
      }
    },
    anonymous: {
      request: false,
      label: 'Restricted Editor'
    },
    goback: {
      url: '/documents',
      text: 'Back to Documents'
    }
  },
  events: {
    onAppReady: () => {
      console.log('Restricted editor ready');
    },
    onEditorCloseCallback: () => {
      console.log('Editor close requested');
      window.location.href = '/documents';
    },
    onAppError: (error) => {
      console.error('Restricted editor error:', error);
    }
  }
});
```

```typescript
import { SDK, EditorType, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const mobileEditor = sdk.initEditor({
  frameId: 'mobile-editor',
  src: 'https://your-docspace.com',
  id: 'mobile-document-101',
  width: '100%',
  height: '100vh',
  editorType: EditorType.Mobile,
  theme: Theme.System,
  locale: navigator.language,
  editorCustomization: {
    mobile: {
      forceView: false,
      standardView: false
    },
    features: {
      zoom: true,
      spellcheck: true
    },
    customer: {
      name: 'Mobile App',
      logo: 'https://example.com/mobile-logo.png'
    }
  },
  events: {
    onAppReady: () => {
      console.log('Mobile editor ready');
      document.body.style.overflow = 'hidden';
    },
    onContentReady: () => {
      console.log('Mobile document loaded');
    },
    onEditorCloseCallback: () => {
      console.log('Mobile editor closing');
      document.body.style.overflow = 'auto';
    },
    onAppError: (error) => {
      console.error('Mobile editor error:', error);
    }
  }
});
```

***

### initRoomSelector()

> **initRoomSelector**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:906](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L906)

Initializes the room selector with the provided configuration.

The room selector mode provides a specialized interface for browsing and selecting
rooms within DocSpace. This is ideal for applications that need users to choose
specific rooms for file operations, integrations, or access control.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for initializing the room selector. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const roomSelector = sdk.initRoomSelector({
  frameId: 'room-selector',
  src: 'https://your-docspace.com'
});

console.log('Room selector initialized');
```

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const customRoomSelector = sdk.initRoomSelector({
  frameId: 'project-room-selector',
  src: 'https://your-docspace.com',
  width: '800px',
  height: '500px',
  roomType: 'collaboration',
  acceptButtonLabel: 'Select Project Room',
  cancelButtonLabel: 'Cancel Selection',
  showSelectorHeader: true,
  showSelectorCancel: true,
  withSearch: true,
  buttonColor: '#2196f3',
  events: {
    onSelectCallback: (data) => {
      console.log('Room selected:', data);
      handleRoomSelection(data);
    },
    onCloseCallback: () => {
      console.log('Room selector closed');
    },
    onAppError: (error) => {
      console.error('Room selector error:', error);
    }
  }
});

function handleRoomSelection(roomData) {
  console.log('Selected room ID:', roomData.id);
  console.log('Selected room name:', roomData.name);
}
```

```typescript
import { SDK, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const uploadRoomSelector = sdk.initRoomSelector({
  frameId: 'upload-destination',
  src: 'https://your-docspace.com',
  width: '700px',
  height: '450px',
  theme: Theme.System,
  locale: 'en-US',
  acceptButtonLabel: 'Upload Here',
  cancelButtonLabel: 'Cancel Upload',
  showSelectorHeader: true,
  showSelectorCancel: true,
  withSearch: true,
  events: {
    onAppReady: () => {
      console.log('Upload room selector ready');
    },
    onSelectCallback: (roomData) => {
      console.log('Upload destination selected:', roomData);
      initiateFileUpload(roomData.id, roomData.name);
    },
    onCloseCallback: () => {
      console.log('Upload cancelled by user');
    }
  }
});

function initiateFileUpload(roomId, roomName) {
  console.log(`Starting upload to room: ${roomName} (ID: ${roomId})`);
}
```

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const accessControlRoomSelector = sdk.initRoomSelector({
  frameId: 'access-room-selector',
  src: 'https://your-docspace.com',
  requestToken: 'admin-access-token',
  width: '900px',
  height: '600px',
  roomType: 'custom',
  acceptButtonLabel: 'Grant Access',
  cancelButtonLabel: 'Deny Access',
  showSelectorHeader: true,
  showSelectorCancel: true,
  withSearch: true,
  destroyText: 'Access control selector closed',
  events: {
    onAppReady: () => {
      console.log('Access control room selector ready');
    },
    onSelectCallback: (roomData) => {
      console.log('Access granted to room:', roomData);
      grantUserAccess(roomData.id, roomData.permissions);
    },
    onCloseCallback: () => {
      console.log('Access control cancelled');
    },
    onAuthSuccess: (data) => {
      console.log('Admin authentication successful');
    },
    onAppError: (error) => {
      console.error('Access control error:', error);
    }
  }
});

function grantUserAccess(roomId, permissions) {
  console.log('Granting access to room:', roomId, 'with permissions:', permissions);
}
```

***

### initFileSelector()

> **initFileSelector**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:1061](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L1061)

Initializes the file selector with the given configuration.

The file selector mode provides a specialized interface for browsing and selecting
files and folders within DocSpace. This is perfect for integration scenarios where
users need to pick specific files for operations, attachments, or imports.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for the file selector. Only `frameId` and `src` are required.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Examples

```typescript
import { SDK, SelectorFilterType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const fileSelector = sdk.initFileSelector({
  frameId: 'file-selector',
  src: 'https://your-docspace.com'
});

console.log('File selector initialized');
```

```typescript
import { SDK, SelectorFilterType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const documentSelector = sdk.initFileSelector({
  frameId: 'document-picker',
  src: 'https://your-docspace.com',
  width: '900px',
  height: '600px',
  selectorType: SelectorFilterType.UserOnly,
  acceptButtonLabel: 'Attach Document',
  cancelButtonLabel: 'Cancel Attachment',
  showSelectorHeader: true,
  showSelectorCancel: true,
  withSearch: true,
  withBreadCrumbs: true,
  withSubtitle: true,
  buttonColor: '#4caf50',
  events: {
    onAppReady: () => {
      console.log('Document selector ready');
    },
    onSelectCallback: (fileData) => {
      console.log('Document selected for attachment:', fileData);
      attachFileToForm(fileData);
    },
    onCloseCallback: () => {
      console.log('Document selection cancelled');
    }
  }
});

function attachFileToForm(fileData) {
  console.log('Attaching file:', fileData.name, 'ID:', fileData.id);
}
```

```typescript
import { SDK, Theme } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const imageSelector = sdk.initFileSelector({
  frameId: 'image-gallery-selector',
  src: 'https://your-docspace.com',
  width: '1000px',
  height: '700px',
  id: 'media-folder-123',
  theme: Theme.Dark,
  locale: 'en-US',
  acceptButtonLabel: 'Select Image',
  cancelButtonLabel: 'Cancel Selection',
  showSelectorHeader: true,
  showSelectorCancel: true,
  withSearch: true,
  withBreadCrumbs: true,
  withSubtitle: true,
  filterParam: 'image',
  events: {
    onAppReady: () => {
      console.log('Image selector ready');
    },
    onSelectCallback: (imageData) => {
      console.log('Image selected:', imageData);
      addImageToGallery(imageData);
    },
    onCloseCallback: () => {
      console.log('Image selection cancelled');
    },
    onAppError: (error) => {
      console.error('Image selector error:', error);
    }
  }
});

function addImageToGallery(imageData) {
  console.log('Adding image to gallery:', imageData.name);
}
```

```typescript
import { SDK, SelectorFilterType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const batchFileSelector = sdk.initFileSelector({
  frameId: 'batch-file-selector',
  src: 'https://your-docspace.com',
  requestToken: 'batch-operation-token',
  width: '1200px',
  height: '800px',
  selectorType: SelectorFilterType.All,
  acceptButtonLabel: 'Process Selected Files',
  cancelButtonLabel: 'Cancel Batch Operation',
  showSelectorHeader: true,
  showSelectorCancel: true,
  withSearch: true,
  withBreadCrumbs: true,
  destroyText: 'Batch file selector closed',
  events: {
    onAppReady: () => {
      console.log('Batch file selector ready');
    },
    onSelectCallback: (selectedFiles) => {
      console.log('Files selected for batch processing:', selectedFiles);
      const files = Array.isArray(selectedFiles) ? selectedFiles : [selectedFiles];
      processBatchFiles(files);
    },
    onCloseCallback: () => {
      console.log('Batch operation cancelled');
    },
    onAuthSuccess: (data) => {
      console.log('Batch operation authentication successful');
    },
    onAppError: (error) => {
      console.error('Batch file selector error:', error);
    }
  }
});

function processBatchFiles(files) {
  console.log(`Processing ${files.length} files in batch operation`);
  files.forEach((file, index) => {
    console.log(`Processing file ${index + 1}:`, file.name);
  });
}
```

***

### initSystem()

> **initSystem**(`config`): [`SDKInstance`](SDKInstance.md)

Defined in: [sdk/index.ts:1089](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/sdk/index.ts#L1089)

Initializes the system with the provided configuration.

The system mode provides administrative and system-level functionality for DocSpace.
This mode is typically used for system configuration, user management, and administrative
tasks that require elevated permissions and system-wide access.

#### Parameters

##### config

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The configuration object for initializing the system.

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized SDK instance.

#### Example

```typescript
const sdk = new SDK();
const systemPanel = sdk.initSystem({
  frameId: 'system-panel',
  src: 'https://your-docspace.com',
  width: '100%',
  height: '800px',
  theme: 'auto'
});

console.log('System panel initialized');
```
