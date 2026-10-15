---
description: "A conversation with the portal's AI models, about the files and rooms the user is working in."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/ai-agent/ai-chat-panel/AiChatPanel.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# AI Chat

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

A conversation with the portal's AI models, about the files and rooms the user is working in.
Every section of ONLYOFFICE Apps mounts the same chat; what changes between them is a handful
of props — which chips it suggests, whether the model can be changed, whether the user may
write at all.

<ThemedImage alt="Default" width={458} sources={{ light: require('./ai-chat--default-light.png').default, dark: require('./ai-chat--default-dark.png').default }} />

### Putting it on a screen

There is no `AiChatPanel` component to render. `useAiChatPanel()` returns the panel content
and the state to place it by, and the host decides where it goes — in the DocSpace client, the
info panel beside a section.

```tsx
import { observer } from "mobx-react";

import AiAgentProviders from "@onlyoffice/apps-ui-kit/ai-agent/providers";
import {
  useAiChatPanel,
  useOpenAiChat,
} from "@onlyoffice/apps-ui-kit/ai-agent/ai-chat-panel";

const ChatPanel = observer(() => {
  const { chatPanelContent, isChatPanelVisible, isChatPanelFullscreen, chatPanelWidth } =
    useAiChatPanel();

  if (!isChatPanelVisible) return null;
  return (
    <aside style={{ width: isChatPanelFullscreen ? "100%" : chatPanelWidth }}>
      {chatPanelContent}
    </aside>
  );
});

// Anywhere below the providers: an "Ask AI" action, a deep link.
const AskAiButton = () => <button onClick={useOpenAiChat()}>Ask AI</button>;

<AiAgentProviders locale="en" isAvailable>
  <AskAiButton />
  <ChatPanel />
</AiAgentProviders>;
```

Three things a host has to get right:

- **Everything sits inside `AiAgentProviders`**, which mounts the store the hook reads; without it the hook throws. Consumers are `observer`s, or the visibility flags stop updating.
- **Offering AI is the host's decision.** `useIsAiChatAvailable()` is `canUseAi && isAvailable`: whether the session may reach AI at all, and whether this view offers it. Check it before showing a way into the chat.
- **The surface is the host's.** The panel content has no background or edge of its own; the frame on this page draws both from `--info-panel-background` and `--info-panel-border-color`, as the client's info panel does.

`@onlyoffice/ai-chat` is an optional peer dependency: importing anything under `ai-agent/`
without it fails at build time, naming the missing package.

## Scenarios

### Suggestions for the section

Chips on the empty chat put a ready prompt into the composer. The host passes a
`SuggestionSet` — `default` for an empty composer, `singleFile` once a file is attached,
`multipleFiles` for more — and the provider switches between them itself, since only it sees
what is attached.

<ThemedImage alt="With Suggestions" width={458} sources={{ light: require('./ai-chat--with-suggestions-light.png').default, dark: require('./ai-chat--with-suggestions-dark.png').default }} />

### A fixed model, not shown

`hideProfilePicker` removes the picker and its label altogether, for a chat that always talks
to one assistant.

<ThemedImage alt="Without Model Picker" width={458} sources={{ light: require('./ai-chat--without-model-picker-light.png').default, dark: require('./ai-chat--without-model-picker-dark.png').default }} />

### Read-only access

`composerDisabled` locks the composer while the history stays readable, and `composerHeader`
says why, above it.

<ThemedImage alt="Read Only" width={458} sources={{ light: require('./ai-chat--read-only-light.png').default, dark: require('./ai-chat--read-only-dark.png').default }} />

### No AI model configured yet

When the portal has no usable model, the chat opens on a screen that says so. It takes both
`aiReady: false` and `noAccessProps` — who the user is, and the handlers behind the screen's
buttons; a button is drawn only when its handler is passed.

On a cloud portal an admin can activate AI on the spot — `onActivateAI` with a linked card,
`onTopUpAndActivateAI` without one:

<ThemedImage alt="Not Configured" width={458} sources={{ light: require('./ai-chat--not-configured-light.png').default, dark: require('./ai-chat--not-configured-dark.png').default }} />

On a server installation (`standalone`) an admin is sent to connect a provider, through
`goToAISettings`:

<ThemedImage alt="Not Configured On Server" width={458} sources={{ light: require('./ai-chat--not-configured-on-server-light.png').default, dark: require('./ai-chat--not-configured-on-server-dark.png').default }} />

Anyone else is told to ask their administrator:

<ThemedImage alt="Not Configured For User" width={458} sources={{ light: require('./ai-chat--not-configured-for-user-light.png').default, dark: require('./ai-chat--not-configured-for-user-dark.png').default }} />

A host with no settings page to send the user to — the embedded sdk layouts — leaves both out
and gets the chat widget's own setup screen, which configures a model in place.

### Right to left

`locale` sets the widget's own strings, and the page's direction mirrors the layout. The texts
the kit passes in — the welcome line, the placeholder — come from the host's translations; this
Storybook loads English only, so those stay in English.

The example is on [its own page](./ai-chat.md) rather than
here: the kit sets the direction on the whole document, so a right-to-left block on this page
would turn every other block with it.

## What renders in Storybook

The chat follows the **API Config** toolbar, like billing and the selectors. With a portal
picked there (or `.env` filled in), every `/api/2.0/ai` request goes to that portal with
`Authorization: Bearer <key>`, through the `serverApi` prop of `AiAgentProviders`, and the chat
runs as the key's owner — their threads, their models. The portal's AI service has to accept
the Storybook origin, which it does once `core:cors` allows it.

With nothing configured, the chat talks to the demo portal instead, under a **Demo data**
banner: a mock service worker answers it from `.storybook/mocks/`, in `pnpm storybook` and the
static build alike. It has three made-up models, two past threads, and a streamed reply that
echoes the prompt; everything is kept in memory until the page reloads, and nothing reaches a
model. **Connect a portal** on the banner opens the API Config form.

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `locale`? | `string` | Language of the chat widget; also sets its direction. Default: `en`. |
| `canUseAi`? | `boolean` | Whether the session may reach the AI API at all. Default: `true`. |
| `isAvailable`? | `boolean` | Whether this view offers AI. Default: `false`. |
| `aiReady`? | `boolean` | Whether the portal has a usable AI profile; false with noAccessProps shows the not-configured screen. |
| `noAccessProps`? | `-` | Wiring for the not-configured screen: who the user is and where its buttons lead. |

</APITable>
