---
description: "Every component this package ships, what it is for, and how it is imported."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/components.md"
---

# Components

Every component this package ships, what it is for, and how it is imported.

Two things to read before picking one:

- **Import by subpath.** `@onlyoffice/apps-ui-kit/components/<folder>` resolves for every
  component and keeps your bundle to what you use. `components/index.ts` re-exports all 98
  folders, but `export *` carries a folder's named exports and drops its default — so nine
  components are reachable only through their subpath, and only as a default import:
  `AppLoader`, `Article`, `Dropzone`, `Navigation`, `OperationsProgressButton`,
  `PublicRoomBar`, `QuantityPicker`, `RoomType` and `Section`. The Import column below says
  which is which for every component, including the nested ones, whose names reach the barrel
  through their parent.
- **Public versus portal-internal.** A portal-internal component needs DocSpace context — a
  translation function, a portal store, a device type it is told about — and will not work in a
  standalone app. [Public and portal-internal](./installation-and-setup.md#public-and-portal-internal)
  says which is which.

New to the package? [`getting-started.md`](./installation-and-setup.md) covers the two providers, the CSS
model and the two layout rules first.

## Which one do I want

### The close calls

| You want                                     | Use                                                 | Not                                                                              |
| -------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| A dialog in the middle of the screen         | `ModalDialog`                                       | `Aside`, which is the same dialog docked to the edge                             |
| A panel sliding in from the side             | `Aside`, or `ModalDialog` with `displayType` aside  | `Section`'s info panel, which is part of the portal layout                       |
| A menu under a control                       | `DropDown` with `DropDownItem`                      | `ContextMenu`, which is the right-click menu and positions itself at the pointer |
| A line of text                               | `Text`                                              | `Heading`, which carries the heading sizes and weights                           |
| A caption above a field                      | `FieldContainer`, which draws one                   | `Label` on its own, unless the field is outside a container                      |
| A spinner while something loads              | `Loader` with an explicit `type`                    | the default `Loader`, which renders its label as text and no spinner             |
| Placeholder shapes while a list loads        | `RectangleSkeleton`, `CircleSkeleton`               | `Loader`, which says "busy" rather than "this is the shape of what is coming"    |
| A measurable percentage                      | `ProgressBar`                                       | `TopLoaderService`, whose numbers are invented by a timer                        |
| A page-wide wait with no number              | `TopLoaderService`                                  | `AppLoader`, which covers the screen and blocks nothing                          |
| A table of data with columns                 | `components/table`                                  | `Rows`, which is the portal's file list and reads children by index              |
| A grid of cards                              | `Tiles`                                             | `Rows` in a wider container                                                      |
| "Nothing here yet" in a page                 | `EmptyView`                                         | `EmptyScreenContainer`, the older portal one                                     |
| A message that goes away by itself           | `toastr` plus one mounted `Toast`                   | `StatusMessage`, which stays until you clear it                                  |
| A message that stays until the state changes | `StatusMessage`                                     | `Toast`, which is transient by design                                            |
| A banner the reader can close                | `Snackbar`, `ColumnarInfoBar`                       | `StatusMessage`, which has no close control                                      |
| An upload area with a file dialog            | `Dropzone`                                          | `DragAndDrop`, which has no dialog and no filtering                              |
| An existing element to accept dropped files  | `DragAndDrop`                                       | `Dropzone`, which draws a bordered area of its own                               |
| A search field                               | `SearchInput` — its `onChange` receives the string  | `TextInput`, whose `onChange` receives the event                                 |
| Yes or no                                    | `ToggleButton` in a wrapper with a size, `Checkbox` | `ToggleButton` alone, which has no size of its own                               |

### The prop that shows and hides it

There is no single name. Guessing wrong is silent — the prop is ignored and nothing is logged:

| Prop      | Components                                                                                |
| --------- | ----------------------------------------------------------------------------------------- |
| `visible` | `Aside`, `ModalDialog`, `Backdrop`, `Portal`, `AvatarEditorDialog`, `RoomLogoCoverDialog` |
| `isOpen`  | `HelpButton`, `LinkWithDropdown`, `Tooltip`, `CollapsibleCard`                            |
| `opened`  | `ComboBox`, `ContextMenuButton`, `MainButtonMobile`                                       |
| `open`    | `DropDown`                                                                                |

The catalogue below repeats it per component, and `check-readme` verifies each entry against the
component's real props.


### Interactive elements

| Component                                                        | Status          | Import            | Shown and hidden by | What it is for                                                                                                  |
| ---------------------------------------------------------------- | --------------- | ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| [ActionButton](../ui/interactive-elements/action-button.md)            | public          | barrel or subpath | –                   | Small tinted button for a secondary action, optionally rendered as another element.                             |
| [AddButton](../ui/interactive-elements/add-button.md)                  | public          | barrel or subpath | –                   | Square icon button with an optional label beside it, for adding one more of something.                          |
| [Button](../ui/interactive-elements/button.md)                         | public          | barrel or subpath | –                   | Labelled action button with an optional icon, a loading state and a tooltip, in a primary or secondary variant. |
| [ContextMenuButton](../ui/interactive-elements/context-menu-button.md) | public          | barrel or subpath | `opened`            | Icon that opens a menu of actions, built afresh from a callback each time it is clicked.                        |
| [DragAndDrop](../ui/interactive-elements/drag-and-drop.md)             | public          | barrel or subpath | –                   | Wrapper that turns whatever is inside it into a drop target for files, with no interface of its own.            |
| [Dropzone](../ui/interactive-elements/dropzone.md)                     | public          | barrel or subpath | –                   | Dashed upload area with a picture, a prompt and a format list, which turns into a loader while the upload runs. |
| [FloatingButton](../ui/interactive-elements/floating-button.md)        | public          | barrel or subpath | –                   | Round corner badge that shows the progress of a background operation and opens its panel.                       |
| [HelpButton](../ui/interactive-elements/help-button.md)                | public          | barrel or subpath | `isOpen`            | Info icon that opens an explanation on click, for a label that needs more than a label.                         |
| [IconButton](../ui/interactive-elements/icon-button.md)                | public          | barrel or subpath | –                   | Icon that acts as a button, with hover and pressed colours and an optional tooltip.                             |
| [ImageEditor](../ui/interactive-elements/image-editor.md)              | portal-internal | barrel or subpath | –                   | Crop window with drag, zoom and a replace control, for turning an uploaded picture into an avatar or a logo.    |
| [LinkWithDropdown](../ui/interactive-elements/link-with-dropdown.md)   | public          | barrel or subpath | `isOpen`            | Dashed link that opens a menu under itself.                                                                     |
| [MainButton](../ui/interactive-elements/main-button.md)                | public          | barrel or subpath | –                   | Accent button at the top of a side menu that opens a menu of the things a user can create.                      |
| [MainButtonMobile](../ui/interactive-elements/main-button-mobile.md)   | public          | barrel or subpath | `opened`            | Floating round button in the corner of the screen that opens a full-width sheet of actions.                     |

### Form controls

| Component                                                        | Status | Import            | Shown and hidden by | What it is for                                                                                                       |
| ---------------------------------------------------------------- | ------ | ----------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [AccessRightSelect](../ui/form-controls/access-right-select.md) | public | barrel or subpath | –                   | Drop-down for choosing an access level, with an icon, a description and a paid badge on each row.                    |
| [Calendar](../ui/form-controls/calendar.md)                     | public | barrel or subpath | –                   | Month grid for picking a day, with month and year views behind it.                                                   |
| [Checkbox](../ui/form-controls/checkbox.md)                     | public | barrel or subpath | –                   | Checkbox with a label, an indeterminate state and an optional help button.                                           |
| [ColorInput](../ui/form-controls/color-input.md)                | public | barrel or subpath | –                   | Hex field with a swatch that opens a colour picker.                                                                  |
| [ColorPicker](../ui/form-controls/color-picker.md)              | public | barrel or subpath | –                   | Saturation square with a hue strip for choosing a colour, with or without a hex field and buttons.                   |
| [ComboBox](../ui/form-controls/combobox.md)                     | public | barrel or subpath | `opened`            | Button showing the current choice, with a list of options under it.                                                  |
| [DatePicker](../ui/form-controls/date-picker.md)                | public | barrel or subpath | –                   | Button that becomes a removable chip once a date is chosen, with a calendar behind it.                               |
| [DateTimePicker](../ui/form-controls/date-time-picker.md)       | public | barrel or subpath | –                   | A date chip and a time beside it, editable in place.                                                                 |
| [EmailInput](../ui/form-controls/email-input.md)                | public | barrel or subpath | –                   | Text field that parses what is typed as an email address and colours itself when it does not parse.                  |
| [FieldContainer](../ui/form-controls/field-container.md)        | public | barrel or subpath | –                   | Layout wrapper for one form field: an optional label with a help tooltip, the control itself, and its error message. |
| [FileInput](../ui/form-controls/file-input.md)                  | public | barrel or subpath | –                   | Read-only field with a folder icon that opens the file dialog and accepts a drop.                                    |
| [FormWrapper](../ui/form-controls/form-wrapper.md)              | public | barrel or subpath | –                   | White card of a fixed width that the portal's sign-in and wizard forms sit on.                                       |
| [InputBlock](../ui/form-controls/input-block.md)                | public | barrel or subpath | –                   | Text field with an icon at the end and room for a prefix before it, inside one border.                               |
| [Label](../ui/form-controls/label.md)                           | public | barrel or subpath | –                   | Caption for a form field, with an optional required asterisk and an error colour.                                    |
| [PasswordInput](../ui/form-controls/password-input.md)          | public | barrel or subpath | –                   | Password field with a reveal eye, a strength tooltip and a generator.                                                |
| [QuantityPicker](../ui/form-controls/quantity-picker.md)        | public | barrel or subpath | –                   | Minus and plus around a number, with an optional slider and quick-add chips.                                         |
| [RadioButton](../ui/form-controls/radio-button.md)              | public | barrel or subpath | –                   | One option of a single-choice set, drawn as a labelled circle.                                                       |
| [RadioButtonGroup](../ui/form-controls/radio-button-group.md)   | public | barrel or subpath | –                   | A set of radio buttons built from an array, with the selected value handled for you.                                 |
| [SearchInput](../ui/form-controls/search-input.md)              | public | barrel or subpath | –                   | Search field with a magnifier, an optional clear button and a debounced change callback.                             |
| [Slider](../ui/form-controls/slider.md)                         | public | barrel or subpath | –                   | Range input with the kit's own track and handle.                                                                     |
| [Textarea](../ui/form-controls/textarea.md)                     | public | barrel or subpath | –                   | Multi-line text field that grows with its content, with optional line numbers, a copy button and a JSON mode.        |
| [TextInput](../ui/form-controls/text-input.md)                  | public | barrel or subpath | –                   | Controlled single-line text field in three fixed widths, with optional masking, error and warning states.            |
| [TimePicker](../ui/form-controls/time-picker.md)                | public | barrel or subpath | –                   | Two small fields, hours and minutes, that move the caret along as you type.                                          |
| [ToggleButton](../ui/form-controls/toggle-button.md)            | public | barrel or subpath | –                   | Switch for one on/off setting, with an optional label beside it.                                                     |

### Overlays

| Component                                                             | Status          | Import            | Shown and hidden by | What it is for                                                                                                            |
| --------------------------------------------------------------------- | --------------- | ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [Aside](../ui/overlays/aside.md)                                | public          | barrel or subpath | `visible`           | Panel that slides in from the side of the viewport, with a header and a scrolling body.                                   |
| [AsideHeader](../ui/overlays/aside-header.md)             | public          | barrel or subpath | –                   | Title bar of a side panel or a dialog, with a back arrow, extra icons and the close cross.                                |
| [AvatarEditorDialog](../ui/overlays/avatar-editor-dialog.md)    | portal-internal | barrel or subpath | `visible`           | Modal that frames an uploaded picture: the kit's crop window between a title and a save and cancel pair.                  |
| [Backdrop](../ui/overlays/backdrop.md)                          | public          | barrel or subpath | `visible`           | Full-screen layer behind an overlay, transparent by default, that catches the click meant to close it.                    |
| [ContextMenu](../ui/overlays/context-menu.md)                   | public          | barrel or subpath | –                   | Menu opened at the pointer through a ref, with submenus, a mobile sheet form and working keyboard navigation.             |
| [DropDown](../ui/overlays/drop-down.md)                         | public          | barrel or subpath | `open`              | Menu anchored to a control, rendered in a portal and positioned against the element you point it at.                      |
| [DropDownItem](../ui/overlays/drop-down-item.md)                | public          | barrel or subpath | –                   | One row of a dropdown menu: a label, an optional icon and badges, or a separator.                                         |
| [ModalDialog](../ui/overlays/modal-dialog.md)                   | public          | barrel or subpath | `visible`           | Dialog rendered in a portal, as a centred modal or a side panel, assembled from Header, Body, Footer and Container slots. |
| [RoomLogoCoverDialog](../ui/overlays/room-logo-cover-dialog.md) | portal-internal | barrel or subpath | `visible`           | Dialog for a room's generated logo: a colour from the palette and an optional glyph, over a live preview.                 |
| [Selector](../ui/overlays/selector.md)                          | public          | barrel or subpath | –                   | Panel for picking one or many things out of a list too long to render at once.                                            |
| [Tooltip](../ui/overlays/tooltip.md)                            | public          | barrel or subpath | `isOpen`            | Floating hint attached to one or more anchors, rendered in a portal and positioned to stay in the viewport.               |

### Data display

| Component                                                     | Status          | Import            | Shown and hidden by | What it is for                                                                                                  |
| ------------------------------------------------------------- | --------------- | ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| [Avatar](../ui/data-display/avatar.md)                      | public          | barrel or subpath | –                   | Round picture of a person or a group, falling back to initials, with an optional role badge and an edit menu.   |
| [Badge](../ui/data-display/badge.md)                        | public          | barrel or subpath | –                   | Small coloured pill for a count or a short marker, announced as a live status region.                           |
| [BaseTile](../ui/tiles/base-tile.md)           | public          | barrel or subpath | –                   | The tile shell: an icon that turns into a checkbox, a slot for the content, a three-dot menu and a lower half.  |
| [Card](../ui/data-display/card.md)                          | public          | barrel or subpath | –                   | Grey panel with an optional header row, for a block of related information.                                     |
| [CategoryItem](../ui/data-display/category-item.md)         | public          | barrel or subpath | –                   | Settings-page entry: a linked title, a line of explanation, an arrow, and an optional paid badge.               |
| [CollapsibleCard](../ui/data-display/collapsible-card.md)   | public          | barrel or subpath | `isOpen`            | Panel whose header is a button that expands and collapses the body under it.                                    |
| [FileTile](../ui/tiles/file-tile.md)           | public          | barrel or subpath | –                   | Tile for a document: a thumbnail with badges over it, and a name row with a checkbox and a menu.                |
| [FolderTile](../ui/tiles/folder-tile.md)       | public          | barrel or subpath | –                   | Tile for a folder, as a single name row or, with one flag, a tall card with a picture on top.                   |
| [Heading](../ui/data-display/heading.md)                    | public          | barrel or subpath | –                   | Section title rendered as a real heading element, sized by a preset rather than by its level.                   |
| [MCPIcon](../ui/data-display/mcp-icon.md)                   | public          | barrel or subpath | –                   | Square icon for an MCP server: its logo, or the first letter of its name on a grey tile.                        |
| [PortalLogo](../ui/data-display/portal-logo.md)             | portal-internal | barrel or subpath | –                   | The portal's white-label logo, fetched from the DocSpace server and swapped for the theme.                      |
| [QuickActions](../ui/data-display/quick-actions.md)         | public          | barrel or subpath | –                   | Horizontal strip of large icon tiles that scrolls when the tiles no longer fit.                                 |
| [RoomIcon](../ui/data-display/room-icon.md)                 | public          | barrel or subpath | –                   | Square room tile that shows the room's logo, or its initials on a colour when there is none.                    |
| [RoomLogo](../ui/data-display/room-logo.md)                 | public          | barrel or subpath | –                   | Fixed 32px glyph saying which kind of room this is, with an optional selection checkbox.                        |
| [RoomTile](../ui/tiles/room-tile.md)           | public          | barrel or subpath | –                   | Tile for a room: the logo and name on top, and the room's tags along the bottom.                                |
| [RoomType](../ui/data-display/room-type.md)                 | portal-internal | barrel or subpath | –                   | Row offering one kind of room, with its glyph, its translated name and its description.                         |
| [Row](../ui/rows/row.md)                       | public          | barrel or subpath | –                   | One row of the file list: an optional checkbox, a start element, the content and a context menu.                |
| [RowContainer](../ui/rows/row-container.md)    | public          | barrel or subpath | –                   | Scrolling list the rows go in, virtualised and paged in as the user reaches the end.                            |
| [RowContent](../ui/rows/row-content.md)        | public          | barrel or subpath | –                   | The text of a row, laid out by the position of its children rather than by named slots.                         |
| [Rows](../ui/rows/index.md)                          | public          | barrel or subpath | –                   | The file list of the DocSpace portal, in three parts: the container, the row and the row's content.             |
| [SelectedItem](../ui/data-display/selected-item.md)         | public          | barrel or subpath | –                   | Chip with a cross, for a value the user has picked and can take back.                                           |
| [Table](../ui/table/index.md)                        | public          | barrel or subpath | –                   | Columnar list with resizable, sortable and hideable columns, laid out by a CSS grid the header writes.          |
| [Tag](../ui/data-display/tag.md)                            | public          | barrel or subpath | –                   | Small outlined label for one keyword, clickable and optionally removable.                                       |
| [Tags](../ui/data-display/tags.md)                          | public          | barrel or subpath | –                   | One row of tags that keeps to its width, collapsing the rest into an overflow tag.                              |
| [TemplateTile](../ui/tiles/template-tile.md)   | public          | barrel or subpath | –                   | Tile for a room template: the name on top, and an owner and storage pair along the bottom.                      |
| [Text](../ui/data-display/text.md)                          | public          | barrel or subpath | –                   | Body text at the kit's size and weight, rendered through whichever element you name.                            |
| [TileContainer](../ui/tiles/tile-container.md) | public          | barrel or subpath | –                   | Grid that sorts the tiles it is given into rooms, templates, folders and files and gives two of them a heading. |
| [TileContent](../ui/tiles/tile-content.md)     | public          | barrel or subpath | –                   | The title slot of a tile: three nested wrappers that give the name its width and its truncation.                |
| [Tiles](../ui/tiles/index.md)                        | public          | barrel or subpath | –                   | The card view of the DocSpace listing: a sorting container, four kinds of tile and the slot their names go in.  |

### Layout

| Component                                                              | Status          | Import            | Shown and hidden by | What it is for                                                                                                   |
| ---------------------------------------------------------------------- | --------------- | ----------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [Article](../ui/layout/article.md)                             | portal-internal | barrel or subpath | –                   | DocSpace's left panel: a fixed column with a header slot, a main button, a scrolling body and the profile block. |
| [EmptyScreenContainer](../ui/layout-components/empty-screen-container.md) | public          | barrel or subpath | –                   | Centred empty state: an illustration, a heading, up to two lines of explanation and a column of actions.         |
| [EmptyView](../ui/layout-components/empty-view.md)                        | public          | barrel or subpath | –                   | Centred empty state with an icon, a title, a description and a list of things the user can do next.              |
| [ErrorContainer](../ui/layout-components/error-container.md)              | public          | barrel or subpath | –                   | Full-screen error page: an animated landscape, a heading, an explanation and one action button.                  |
| [Portal](../ui/layout/portal.md)                               | public          | barrel or subpath | `visible`           | Renders a node into another part of the document, after mount, keeping it inside the React tree.                 |
| [Scrollbar](../ui/layout/scrollbar.md)                         | public          | barrel or subpath | –                   | Scrolling region with the kit's own thin tracks, which fade out when nothing is happening.                       |
| [Section](../ui/layout/section.md)                             | portal-internal | barrel or subpath | –                   | DocSpace's page body: a sticky header and filter, a scrolling body, and the info and chat panels beside it.      |
| [SelectionArea](../ui/layout/selection-area.md)                | public          | barrel or subpath | –                   | Rubber-band selection: a dragged rectangle that reports which items it covers, frame by frame.                   |
| [ThemeProviderComponent](../ui/layout/theme-provider.md)       | public          | barrel or subpath | –                   | The older theme provider: it writes the theme onto the document and supplies the kit's theme context.            |

### Navigation

| Component                                                  | Status          | Import            | Shown and hidden by | What it is for                                                                                                       |
| ---------------------------------------------------------- | --------------- | ----------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [FilterInput](../ui/navigation/filter.md)              | portal-internal | barrel or subpath | –                   | The bar above a file listing: search, a filter panel, a sort menu, a view switch and the chips for what is in force. |
| [Link](../ui/navigation/link.md)                       | public          | barrel or subpath | –                   | Anchor styled to the kit's conventions, for navigation or for an in-place action.                                    |
| [Navigation](../ui/navigation/navigation-component.md)           | portal-internal | barrel or subpath | –                   | The file manager's header: breadcrumb title, back arrow, and the row of buttons that acts on the current folder.     |
| [NavMenu](../ui/navigation/nav-menu.md)                | public          | barrel or subpath | –                   | Sidebar navigation: groups of items, each with an optional sub-menu, a badge and a collapsed rail form.              |
| [Paging](../ui/navigation/paging.md)                   | public          | barrel or subpath | –                   | Previous and next buttons with a page selector between them and a page-size selector at the end.                     |
| [TabItem](../ui/navigation/tab-item.md)                | public          | barrel or subpath | –                   | Rounded pill that fills in when it is selected.                                                                      |
| [Tabs](../ui/navigation/tabs.md)                       | public          | barrel or subpath | –                   | Sticky tab bar that scrolls sideways and renders the selected tab's content under itself.                            |
| [TwoStateToggle](../ui/navigation/two-state-toggle.md) | portal-internal | barrel or subpath | –                   | Pill that switches the portal between its classic view and the new dashboard.                                        |

### Feedback

| Component                                                                      | Status          | Import            | Shown and hidden by | What it is for                                                                                                 |
| ------------------------------------------------------------------------------ | --------------- | ----------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| [AppLoader](../ui/status-components/app-loader.md)                                | public          | barrel or subpath | –                   | The blank first screen: a fixed sheet over the whole viewport with the kit's rombs animation on it.            |
| [CircleSkeleton](../ui/skeletons/circle.md)                               | public          | barrel or subpath | –                   | Round loading placeholder with a sweeping highlight, for an avatar or an icon that has not arrived yet.        |
| [ColumnarInfoBar](../ui/feedback/columnar-info-bar.md)                   | public          | barrel or subpath | –                   | Bar of label-and-value columns for context the reader does not have to act on.                                 |
| [InfiniteLoader](../ui/status-components/infinite-loader.md)                      | public          | barrel or subpath | –                   | Virtualised list or grid that asks for the next page as the user scrolls towards the end.                      |
| [Loader](../ui/status-components/loader.md)                                       | public          | barrel or subpath | –                   | Spinner in one of four animations, for work whose duration is unknown.                                         |
| [LoaderWrapper](../ui/status-components/loader-wrapper.md)                        | public          | barrel or subpath | –                   | Dims whatever is inside it and stops the mouse reaching it while something is loading.                         |
| [LoadingButton](../ui/feedback/loading-button.md)                        | public          | barrel or subpath | –                   | 16px progress ring with a cross in the middle, for cancelling what it is measuring.                            |
| [OperationsProgressButton](../ui/feedback/operations-progress-button.md) | portal-internal | barrel or subpath | –                   | Corner badge that reports every background operation of the portal and lists them when there is more than one. |
| [ProgressBar](../ui/status-components/progress-bar.md)                            | public          | barrel or subpath | –                   | A labelled bar for an operation whose progress you can measure, with a status or error line under it.          |
| [PublicRoomBar](../ui/feedback/public-room-bar.md)                       | public          | barrel or subpath | –                   | Grey note above a screen's content: an icon, a bold line and a paragraph, with an optional close cross.        |
| [RectangleSkeleton](../ui/skeletons/rectangle.md)                         | public          | barrel or subpath | –                   | Rectangular loading placeholder with a sweeping highlight, sized to the content it stands in for.              |
| [SnackBar](../ui/feedback/snackbar.md)                                   | public          | barrel or subpath | –                   | Full-width notification bar that sits at the top of a section until it is dismissed.                           |
| [StatusMessage](../ui/feedback/status-message.md)                        | public          | barrel or subpath | –                   | A full-width bar with a danger glyph that fades one message out before fading the next one in.                 |
| [Toast](../ui/feedback/toast.md)                                         | public          | barrel or subpath | –                   | Container the transient notifications are stacked in, driven by the imperative `toastr`.                       |
| [TopLoaderService](../ui/feedback/top-loading-indicator.md)              | public          | barrel or subpath | –                   | The thin bar at the top of the page, driven by three static calls rather than by React.                        |
