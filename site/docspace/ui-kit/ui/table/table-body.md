---
description: "TableBody holds the rows of a table and, for a long list, renders only the rows in view and asks for the next page as the user scrolls."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/table-body/TableBody.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

# TableBody

TableBody holds the rows of a table and, for a long list, renders only the rows in view and asks for the next page as the user scrolls.

The Table README describes it in full.

<ThemedImage alt="TableBody" width={1014} sources={{ light: require('./table-body--primary-light.png').default, dark: require('./table-body--primary-dark.png').default }} />

## Stories

### Default

Twenty rows through the virtualised body, the mode for a list that can grow long: scroll the frame and only the rows near the view stay mounted, as the counter below it shows.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./table-body--default-light.png').default, dark: require('./table-body--default-dark.png').default }} />

### Without React Window

The same twenty rows rendered all at once (`useReactWindow` off), which is simpler and enough for a short list that never pages.

<ThemedImage alt="Without React Window" width={1014} sources={{ light: require('./table-body--without-react-window-light.png').default, dark: require('./table-body--without-react-window-dark.png').default }} />

### With More Files

Five loaded rows followed by two placeholder rows, what the user sees while the next page is on its way (`hasMoreFiles`); `fetchMoreFiles` is called as the placeholders come into view.

<ThemedImage alt="With More Files" width={1014} sources={{ light: require('./table-body--with-more-files-light.png').default, dark: require('./table-body--with-more-files-dark.png').default }} />
