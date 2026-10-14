---
description: "Unauthorized error page (401)."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/errors/Error401.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

# Error401

Unauthorized error page (401). Displayed when the user is not authenticated.

### Features

- **Full-Page Display** with animated SVG decorations
- **Internationalized**
- **Consistent Styling** built on ErrorContainer
- **Auto-Redirect Support**

<ThemedImage alt="Default" width={996} sources={{ light: require('./error-401--default-light.png').default, dark: require('./error-401--default-dark.png').default }} />

### Usage

```tsx
import { Error401 } from "@onlyoffice/apps-ui-kit/errors";

<Error401 />
```
