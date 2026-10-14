---
description: "Not Found error page (404)."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/errors/Error404.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

# Error404

Not Found error page (404). Displayed when the requested page does not exist.

### Features

- **Full-Page Display** with animated SVG decorations
- **Internationalized** with translation keys
- **Consistent Styling** built on ErrorContainer
- **Navigation Guidance**

<ThemedImage alt="Default" width={996} sources={{ light: require('./error-404--default-light.png').default, dark: require('./error-404--default-dark.png').default }} />

### Usage

```tsx
import Error404 from "@onlyoffice/apps-ui-kit/errors/Error404";

<Error404 />
```
