---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/scripts/docs/sections.mjs"
---

# Layout

The page's plumbing: portals, scroll areas, the selection rectangle and the theme wrapper.

## Overview

The following components are available:

| Component | Description |
| --- | --- |
| [`Article`](./article.md) | DocSpace's left panel: a fixed column with a header slot, a main button, a scrolling body and the profile block. |
| [`Portal`](./portal.md) | Renders a node into another part of the document, after mount, keeping it inside the React tree. |
| [`Scrollbar`](./scrollbar.md) | Scrolling region with the kit's own thin tracks, which fade out when nothing is happening. |
| [`Section`](./section.md) | DocSpace's page body: a sticky header and filter, a scrolling body, and the info and chat panels beside it. |
| [`SelectionArea`](./selection-area.md) | Rubber-band selection: a dragged rectangle that reports which items it covers, frame by frame. |
| [`ThemeProviderComponent`](./theme-provider.md) | The older theme provider: it writes the theme onto the document and supplies the kit's theme context. |
