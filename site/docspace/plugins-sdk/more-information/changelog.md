# Changelog

The list of changes for ONLYOFFICE DocSpace Plugins SDK.

## Version 3.0

For migration instructions, see [Updating a plugin to SDK 3.0.0](migration.md#updating-a-plugin-to-sdk-300).

- Added [IArticleNavigationPlugin](../usage-sdk/coding-plugin/interfaces/plugins/IArticleNavigationPlugin.md) and [IArticleNavigationItem](../usage-sdk/coding-plugin/interfaces/items/IArticleNavigationItem.md) to embed first-class navigation items in the article sidebar.
- Added the [Section](../usage-sdk/coding-plugin/enums/Section.md) enum for the `appears` property of article navigation items.
- Added the `component` property to [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md), [IArticleButtonItem](../usage-sdk/coding-plugin/interfaces/items/IArticleButtonItem.md), [IMediaViewer](../usage-sdk/coding-plugin/interfaces/components/IMediaViewer.md), and [ISettings](../usage-sdk/coding-plugin/interfaces/settings/ISettings.md), and `dialogBodyComponent` to [IModalDialog](../usage-sdk/coding-plugin/interfaces/components/IModalDialog.md), so a React component can be passed instead of a declarative [IBox](../usage-sdk/coding-plugin/interfaces/components/IBox.md) tree. See [React components](../usage-sdk/coding-plugin.md#react-components).
- Added the *@onlyoffice/docspace-plugin-sdk/react* hooks: `usePluginAPI`, `usePluginActions`, `usePluginSettings`, `useCurrentFile`, `useCurrentUser`, and `usePluginRuntime`.
- Added [`PluginAPIClient`](../usage-sdk/coding-plugin/react/api.md#pluginapiclient) (via `usePluginAPI`) for authenticated HTTP requests to the portal, and [`PluginApiError`](../usage-sdk/coding-plugin/react/api.md#pluginapierror) / `isPluginApiError` for failed requests.
- Deprecated `body` in `IInfoPanelItem` and `IArticleButtonItem`, `settings` in `ISettings`, `content` in `IMediaViewer`, and `dialogBody` / `dialogFooter` in `IModalDialog`. Use `component` (`dialogBodyComponent` in `IModalDialog`) instead.
- Deprecated `onLoad` on those items and components. Load data with `useEffect` inside the React component.
- Replaced Webpack with Vite in the plugin [template](../usage-sdk/creating-plugin-template.md) and [build](../usage-sdk/building-plugin.md) process.
- Raised `minDocSpaceVersion` to `"4.0.0"`. Plugins built with SDK 3.0.0 require DocSpace 4.0.0 or later.

## Version 2.1.1

- Added markdown documentation generation with TypeDoc
- Added LLM instructions for DocSpace Plugin SDK development

## Version 2.1.0

- Removed `type: "module"` from *package.json*
- Updated Webpack config in template (add `"..."` to minimizer array to save default minimizers)
- Converted const enums to regular enums
- Added `Promise<void>` return type to plugin methods `onClick` ([IFileItem](../usage-sdk/coding-plugin/interfaces/items/IFileItem.md), [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md), [IMainButtonItem](../usage-sdk/coding-plugin/interfaces/items/IMainButtonItem.md), [IProfileMenuItem](../usage-sdk/coding-plugin/interfaces/items/IProfileMenuItem.md))
- Made `onLoad` prop optional in [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md)
- Made `onClick` prop optional in [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)
- Switched from yarn to npm in `npx create-docspace-plugin`
- **DEPRECATED** `onClick` in [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md) is now deprecated in favor of `onItemClick`
- **DEPRECATED** `onClick` in [IMainButtonItem](../usage-sdk/coding-plugin/interfaces/items/IMainButtonItem.md) is now deprecated in favor of `onItemClick`
- Added `onItemClick` callback to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md) to support both string and number identifiers
- Added `onItemClick` callback to [IMainButtonItem](../usage-sdk/coding-plugin/interfaces/items/IMainButtonItem.md) to support both string and number identifiers
- Added `PluginLocale` enum
- Added `language`, `setLanguage`, `getLanguage` properties to [IPlugin](../usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md)
- Added `isHeaderVisible` property to [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md)
- Added support for CSS files
- Added `className` property to components ([IBox](../usage-sdk/coding-plugin/interfaces/components/IBox.md), [IButton](../usage-sdk/coding-plugin/interfaces/components/IButton.md), [ICheckbox](../usage-sdk/coding-plugin/interfaces/components/ICheckbox.md), IComboBox, [IFrame](../usage-sdk/coding-plugin/interfaces/components/IFrame.md), [IImage](../usage-sdk/coding-plugin/interfaces/components/IImage.md), [IInput](../usage-sdk/coding-plugin/interfaces/components/IInput.md), ILabel, ISkeleton, IText, [ITextArea](../usage-sdk/coding-plugin/interfaces/components/ITextArea.md), [IToggleButton](../usage-sdk/coding-plugin/interfaces/components/IToggleButton.md))
- Added `id` property to [IBox](../usage-sdk/coding-plugin/interfaces/components/IBox.md)
- Added `onGroupClick`, `isGroupAction` properties to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)
- Added `items` property to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)
- Added selector components (Base, Files, Groups, People, Room), enums (SelectorType, RoomSearchArea, RoomsType), and actions (`showSelector`, `updateSelector`, `closeSelector`)
- Added [IFloatingOperationsButton](../usage-sdk/coding-plugin/interfaces/components/IFloatingOperationsButton.md) component with progress tracking functionality and actions (`addFloatingOperationsButton`, `updateFloatingOperationsButton`, `removeFloatingOperationsButton`)
- Added [IPostMessagePlugin](../usage-sdk/coding-plugin/interfaces/plugins/IPostMessagePlugin.md), [IPostMessageCallbackMessage](../usage-sdk/coding-plugin/interfaces/utils.md) util
- Added `navigate`, `openInfoPanel` actions to [Actions](../usage-sdk/coding-plugin/enums/Actions.md)
- Added [IArticleButtonPlugin](../usage-sdk/coding-plugin/interfaces/plugins/IArticleButtonPlugin.md), [IArticleButtonItem](../usage-sdk/coding-plugin/interfaces/items/IArticleButtonItem.md)
- Added IconButton component
- Added ILink component
- Added [IMediaViewer](../usage-sdk/coding-plugin/interfaces/components/IMediaViewer.md) component, actions (`showMediaViewer`, `updateMediaViewer`, `closeMediaViewer`)
- Added `placement` property to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)
- Added `itemId` property to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)
- Fixed `onClick` id type in [IMainButtonItem](../usage-sdk/coding-plugin/interfaces/items/IMainButtonItem.md), [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)

## Version 2.0

- Separated file security into a new `FilesSecurity` enum.
- Added the `fileSecurity` and `security` properties to [IFileItem](../usage-sdk/coding-plugin/interfaces/items/IFileItem.md).
- Added the `withoutBodyPadding` and `withoutHeaderMargin` properties to [IModalDialog](../usage-sdk/coding-plugin/interfaces/components/IModalDialog.md).
- Added the `updateCreateDialogModal` action to [Actions](../usage-sdk/coding-plugin/enums/Actions.md).
- Added the `isAutoFocusOnError`, `errorText`, `onError`, `onChange`, `isCloseAfterCreate`, and `isCreateDisabled` properties to [ICreateDialog](../usage-sdk/coding-plugin/interfaces/components/ICreateDialog.md).
- Added the `itemSecurity` property to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md).
