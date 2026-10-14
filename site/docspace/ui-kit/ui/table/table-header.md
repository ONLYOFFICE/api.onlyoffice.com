---
description: "TableHeader is the row of column titles at the top of a table; it also decides the width of every column and writes them onto the table's grid."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/table-header/TableHeader.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

# TableHeader

TableHeader is the row of column titles at the top of a table; it also decides the width of every column and writes them onto the table's grid.

The Table README describes it in full.

<ThemedImage alt="TableHeader" width={1014} sources={{ light: require('./table-header--primary-light.png').default, dark: require('./table-header--primary-dark.png').default }} />

## Stories

### Default

The header of a four-column list, sorted by Name: drag the handles between the titles to resize the columns, hover a title to see its arrow, and click the cog to choose columns. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./table-header--default-light.png').default, dark: require('./table-header--default-dark.png').default }} />

### Without Settings

The same header without the cog, for a table whose columns are fixed (`showSettings` off).

<ThemedImage alt="Without Settings" width={1014} sources={{ light: require('./table-header--without-settings-light.png').default, dark: require('./table-header--without-settings-dark.png').default }} />

### Without Sorting

The same header for a list in a fixed order: no arrows, and a click on a title does nothing (`sortingVisible` off).

<ThemedImage alt="Without Sorting" width={1014} sources={{ light: require('./table-header--without-sorting-light.png').default, dark: require('./table-header--without-sorting-dark.png').default }} />

### Right To Left

In a right-to-left interface the first column starts at the right edge and the cog sits at the left; dragging a handle to the left widens the column on its right.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./table-header--right-to-left-light.png').default, dark: require('./table-header--right-to-left-dark.png').default }} />
