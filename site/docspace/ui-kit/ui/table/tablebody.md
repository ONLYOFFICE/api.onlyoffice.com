---
description: "TableBody holds the rows of a table and, for a long list, renders only the rows in view and asks for the next page as the user scrolls.\n\nThe Table README describes it in full."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/table/table-body/TableBody.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

# TableBody

TableBody holds the rows of a table and, for a long list, renders only the rows in view and asks for the next page as the user scrolls.

The Table README describes it in full.

<ThemedImage alt="TableBody" width={1014} sources={{ light: require('./tablebody--primary-light.png').default, dark: require('./tablebody--primary-dark.png').default }} />

## Stories

### Default

Twenty rows through the virtualised body, the mode for a list that can grow long: scroll the frame and only the rows near the view stay mounted, as the counter below it shows.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./tablebody--default-light.png').default, dark: require('./tablebody--default-dark.png').default }} />

### Without React Window

The same twenty rows rendered all at once (`useReactWindow` off), which is simpler and enough for a short list that never pages.

<ThemedImage alt="Without React Window" width={1014} sources={{ light: require('./tablebody--without-react-window-light.png').default, dark: require('./tablebody--without-react-window-dark.png').default }} />

### With More Files

Five loaded rows followed by two placeholder rows, what the user sees while the next page is on its way (`hasMoreFiles`); `fetchMoreFiles` is called as the placeholders come into view.

<ThemedImage alt="With More Files" width={1014} sources={{ light: require('./tablebody--with-more-files-light.png').default, dark: require('./tablebody--with-more-files-dark.png').default }} />
