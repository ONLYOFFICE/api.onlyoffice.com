# Changelog

The list of changes for ONLYOFFICE DocSpace Plugins SDK.

## Version 3.0

- Added [IArticleNavigationPlugin](../usage-sdk/coding-plugin/interfaces/plugins/IArticleNavigationPlugin.md) and [IArticleNavigationItem](../usage-sdk/coding-plugin/interfaces/items/IArticleNavigationItem.md) to embed first-class navigation items in the article sidebar.
- Added the [Section](../usage-sdk/coding-plugin/enums/Section.md) enum for the `appears` property of article navigation items.
- Added the `component` property to [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md), [IArticleButtonItem](../usage-sdk/coding-plugin/interfaces/items/IArticleButtonItem.md), [IMediaViewer](../usage-sdk/coding-plugin/interfaces/components/IMediaViewer.md), and [ISettings](../usage-sdk/coding-plugin/interfaces/settings/ISettings.md), and `dialogBodyComponent` to [IModalDialog](../usage-sdk/coding-plugin/interfaces/components/IModalDialog.md), so a React component can be passed instead of a declarative [IBox](../usage-sdk/coding-plugin/interfaces/components/IBox.md) tree. See [React components](../usage-sdk/coding-plugin.md#react-components).
- Added the *@onlyoffice/docspace-plugin-sdk/react* hooks: `usePluginAPI`, `usePluginActions`, `usePluginSettings`, `useCurrentFile`, `useCurrentUser`, and `usePluginRuntime`.
- Added `PluginAPIClient` (via `usePluginAPI`) for authenticated HTTP requests to the portal.
- Deprecated `body` in `IInfoPanelItem` and `IArticleButtonItem`, `settings` in `ISettings`, `content` in `IMediaViewer`, and `dialogBody` / `dialogFooter` in `IModalDialog`. Use `component` (`dialogBodyComponent` in `IModalDialog`) instead.
- Deprecated `onLoad` on those items and components. Load data with `useEffect` inside the React component.
- Replaced Webpack with Vite in the plugin [template](../usage-sdk/creating-plugin-template.md) and [build](../usage-sdk/building-plugin.md) process.
- Raised `minDocSpaceVersion` to `"4.0.0"`. Plugins built with SDK 3.0.0 require DocSpace 4.0.0 or later.

## Version 2.0

- Separated file security into a new `FilesSecurity` enum.
- Added the `fileSecurity` and `security` properties to [IFileItem](../usage-sdk/coding-plugin/interfaces/items/IFileItem.md).
- Added the `withoutBodyPadding` and `withoutHeaderMargin` properties to [IModalDialog](../usage-sdk/coding-plugin/interfaces/components/IModalDialog.md).
- Added the `updateCreateDialogModal` action to [Actions](../usage-sdk/coding-plugin/enums/Actions.md).
- Added the `isAutoFocusOnError`, `errorText`, `onError`, `onChange`, `isCloseAfterCreate`, and `isCreateDisabled` properties to [ICreateDialog](../usage-sdk/coding-plugin/interfaces/components/ICreateDialog.md).
- Added the `itemSecurity` property to [IContextMenuItem](../usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md).
