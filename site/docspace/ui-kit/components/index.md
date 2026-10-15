---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/scripts/docs/sections.mjs"
---

# Components

The composites built from the UI components for the portal's screens. Of these, the providers are public; the rest need a portal.

## Overview

The groups are:

| Group | Description |
| --- | --- |
| [AI Chat](./ai-chat.md) | A conversation with the portal's AI models, about the files and rooms the user is working in. |
| [AI Settings](./ai-settings.md) | The portal's AI settings screens, from `ai-agent/settings`. |
| [Files](./files.md) | The Files section as the portal draws it: a header, the filter bar and the rows of the caller's personal folder. |
| [Rooms](./rooms.md) | The Rooms section: the active rooms the caller can see, with a header, the filter bar and the rows. |
| [Forms](./forms.md) | The Forms section: the form-filling rooms the caller can see, with a header, the filter bar and the rows. |
| [Uploader](./uploader.md) | Uploader is a file upload component that supports chunked uploads, folder uploads, and file size validation. |
| [Document Editor](./document-editor.md) | DocumentEditor wraps the \`@onlyoffice/document-editor-react\` component, embedding an ONLYOFFICE Document Server editor into the UI. |
| [Selectors](./selectors/index.md) | The portal's pickers: a panel that lists files, rooms, people, groups, AI agents or MCP servers from a portal and hands back what the user chose. |
| [Providers](./providers/index.md) | The providers an application mounts above the components. |
| [Errors](./errors/index.md) | The full-page states the portal shows when a request fails: access denied, not found, offline, unavailable, an expired link. |
