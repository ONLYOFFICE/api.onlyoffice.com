export type DocSpaceMode =
  | "manager"
  | "editor"
  | "viewer"
  | "room-selector"
  | "file-selector"
  | "frame"
  | "system"
  | "public-room";

export const MODE_LABELS: Record<DocSpaceMode, string> = {
  manager: "Manager",
  editor: "Editor",
  viewer: "Viewer",
  "room-selector": "Room selector",
  "file-selector": "File selector",
  frame: "Frame",
  system: "System",
  "public-room": "Public room",
};

export const DEFAULT_SCRIPTS: Record<DocSpaceMode, string> = {
  manager: `const config = {
    src: "https://your-docspace.com",
    mode: "manager",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    showHeader: true,
    showTitle: true,
    showMenu: false,
    showFilter: true,
    disableActionButton: false, // Requires user with appropriate permissions
    infoPanelVisible: true, // Requires user with appropriate permissions
    init: true,
    filter: {
        count: 100,
        page: 1,
        sortorder: "descending",
        sortby: "DateAndTime",
        search: ""
    }
};

DocSpace.SDK.initManager(config);`,

  editor: `const config = {
    src: "https://your-docspace.com",
    mode: "editor",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    init: false,
    id: 3730262 // Replace with your file ID
};

DocSpace.SDK.initEditor(config);`,

  viewer: `const config = {
    src: "https://your-docspace.com",
    mode: "viewer",
    editorType: "embedded",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    init: false,
    id: 3730260 // Replace with your file ID
};

DocSpace.SDK.initViewer(config);`,

  "room-selector": `const config = {
    src: "https://your-docspace.com",
    mode: "room-selector",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    init: true,
    showSelectorCancel: true,
    showSelectorHeader: true,
    withSearch: true,
    acceptButtonLabel: "Select",
    cancelButtonLabel: "Cancel",
    isButtonMode: false,

    events: {
        onSelectCallback: null,
        onCloseCallback: null,
        onAppReady: null,
        onAppError: null
    }
};

DocSpace.SDK.initRoomSelector(config);`,

  "file-selector": `const config = {
    src: "https://your-docspace.com",
    mode: "file-selector",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    init: true,
    showSelectorCancel: true,
    showSelectorHeader: true,
    withSearch: true,
    acceptButtonLabel: "Select",
    cancelButtonLabel: "Cancel",
    withSubtitle: true,
    filterParam: "ALL",
    isButtonMode: false,

    events: {
        onSelectCallback: null,
        onCloseCallback: null,
        onAppReady: null,
        onAppError: null
    }
};

DocSpace.SDK.initFileSelector(config);`,

  frame: `const config = {
    src: "https://your-docspace.com",
    mode: "manager",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    init: true
};

DocSpace.SDK.initFrame(config);`,

  system: `const config = {
    src: "https://your-docspace.com",
    mode: "system",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    init: true,
    events: {
        onAppReady: null,
        onAppError: null
    }
};

DocSpace.SDK.initSystem(config);`,

  "public-room": `const config = {
    src: "https://your-docspace.com",
    mode: "public-room",
    width: "100%",
    height: "100%",
    frameId: "ds-frame",
    showHeader: true,
    showTitle: true,
    showMenu: false,
    showFilter: true,
    disableActionButton: false,
    infoPanelVisible: false,
    init: true,
    filter: {
        count: 100,
        page: 1,
        sortorder: "descending",
        sortby: "DateAndTime",
        search: "",
        withSubfolders: false
    },
    id: 2613800, // Replace with your room ID
    requestToken: "ZjIrNGhZM2tDbmFnbzRHMmxKODE4Umx5SHdXOUx4OXVpc3BpaTlyN1ZIOD0_IjEzZmQ4MmRkLTVkNTAtNDM0ZC1iZTE0LWM2M2ZkNDJkMDFhNCI", // Replace with your request token
    rootPath: "/rooms/share"
};

DocSpace.SDK.init(config);`,
};
