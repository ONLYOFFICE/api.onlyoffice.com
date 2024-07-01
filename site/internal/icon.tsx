import * as rich32 from "@onlyoffice/ui-icons/rich/32.tsx"
import * as rich64 from "@onlyoffice/ui-icons/rich/64.tsx"
import {type JSX, h} from "preact"

type InternalIcon = typeof rich32.DesktopEditorsIcon
type InternalIconProperties = Parameters<InternalIcon>[0]

export interface IconProperties extends InternalIconProperties {
  src: "rich32" | "rich64"
  name: string
}

export function Icon(p: IconProperties): JSX.Element {
  const {src, name, ...props} = p

  const s = icons[src]
  if (!s) {
    throw new Error(`The icon set '${src}' does not exist.`)
  }

  const I = s[name]
  if (!I) {
    throw new Error(`The icon '${name}' does not exist in the '${src}' icon set.`)
  }

  return <I {...props} />
}

const icons: Record<IconProperties["src"], Record<string, InternalIcon>> = {
  rich32: {
    "desktop-editors": rich32.DesktopEditorsIcon,
    "docs-api": rich32.DocsApiIcon,
    "docspace-api": rich32.DocspaceApiIcon,
    "document-builder": rich32.DocumentBuilderIcon,
    "javascript-sdk": rich32.JavascriptSdkIcon,
    "office-api": rich32.OfficeApiIcon,
    "plugins": rich32.PluginsIcon,
    "self-hosted": rich32.SelfHostedIcon,
    "workspace-api": rich32.WorkspaceApiIcon
  },
  rich64: {
    "desktop-editors": rich64.DesktopEditorsIcon,
    "docs-api": rich64.DocsApiIcon,
    "docspace-api": rich64.DocspaceApiIcon,
    "document-builder": rich64.DocumentBuilderIcon,
    "javascript-sdk": rich64.JavascriptSdkIcon,
    "office-api": rich64.OfficeApiIcon,
    "plugins": rich64.PluginsIcon,
    "self-hosted": rich64.SelfHostedIcon,
    "workspace-api": rich64.WorkspaceApiIcon
  }
}
