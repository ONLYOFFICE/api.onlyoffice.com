---
description: Embed DocSpace in a tabbed interface with multiple manager instances.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Tabbed manager UI

This example demonstrates how to embed ONLYOFFICE DocSpace in a tabbed interface, where each tab runs its own DocSpace instance in manager mode.

## Before you start

The app runs on the Vite dev server at `http://localhost:5173`. [Add this origin](/docspace/javascript-sdk/get-started/authentication-security.md#registering-allowed-embed-origins) to the **Developer Tools** section of DocSpace.

## Script execution steps

### 1. Create the project

Create a new React + TypeScript project with [Vite](https://vite.dev/) and move into it:

``` sh
npm create vite@latest docspace-tabs -- --template react-ts
cd docspace-tabs
npm install
```

The current Vite template requires Node.js 20.19+ or 22.12+.

### 2. Prepare environment variables

Create a `.env` file in the project root:

``` bash
VITE_DOCSPACE_URL={PORTAL_SRC}
VITE_DOCSPACE_USER_LOGIN=user@example.com
VITE_DOCSPACE_USER_PASSWORD_HASH=PASTE_HASH_HERE
```

- `VITE_DOCSPACE_URL` - your DocSpace portal URL (root).
- `VITE_DOCSPACE_USER_LOGIN` - user login for authentication.
- `VITE_DOCSPACE_USER_PASSWORD_HASH` - password hash generated via the SDK (see the [Create password hash](../basic-samples/create-hash.md) sample).

:::warning
Vite embeds every `VITE_*` variable into the client bundle, so anyone who opens the page can read the password hash. Use this approach for local demos only. In production, get the credentials or a token on your backend.
:::

### 3. Install Tailwind CSS (v3) and configure PostCSS

1. Install Tailwind v3 with PostCSS:

``` bash
npm i -D tailwindcss@3.4.14 postcss@8 autoprefixer@10
```

2. Create `postcss.config.js` in the project root:

``` ts
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Create `tailwind.config.js` in the project root:

``` ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

4. Replace `src/index.css` content (create the file if missing):

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root { height: 100%; margin: 0; }
```

### 4. Install the DocSpace SDK packages

Install the React wrapper and the core SDK:

``` bash
npm i @onlyoffice/docspace-react @onlyoffice/docspace-sdk-js
```
- `@onlyoffice/docspace-react` mounts the iframe, wires SDK events, and pulls in the core SDK at runtime.
- `@onlyoffice/docspace-sdk-js` is installed explicitly only to import the `SDKInstance` type. Without TypeScript, the React wrapper alone is enough.

### 5. Create the tab iframe component

Add a reusable component that embeds DocSpace and logs in on `onAppReady`. The component gets the SDK instance from the `onSetDocspaceInstance` prop of the `DocSpace` component. The config has no `src` because the component takes it from the `url` prop.

`src/components/TabDocSpace.tsx`

<details>
  <summary>Create the tab iframe component</summary>

``` tsx
import { useMemo, useRef } from "react";
import { DocSpace } from "@onlyoffice/docspace-react";
import type { SDKInstance } from "@onlyoffice/docspace-sdk-js";

type Props = {
  frameId: string;
  portalUrl: string;
  login: string;
  passwordHash: string;
  visible: boolean;
};

export default function TabDocSpace({
  frameId,
  portalUrl,
  login,
  passwordHash,
  visible,
}: Props) {
  const instance = useRef<SDKInstance | null>(null);

  async function handleAppReady() {
    try {
      const ds = instance.current;
      if (!ds) {
        console.error(`[${frameId}] SDK instance not found`);
        return;
      }
      await ds.login(login, passwordHash);
      console.log(`[${frameId}] login success`);
    } catch (e) {
      console.error(`[${frameId}] login failed`, e);
    }
  }

  // keep the config stable so switching tabs doesn't recreate the frame
  const config = useMemo(() => ({
    frameId,
    width: "100%",
    height: "100%",
    mode: "manager" as const, // all tabs use manager mode
    events: { onAppReady: handleAppReady },
  }), [frameId]);

  return (
    <div className="w-full h-full" style={{ display: visible ? "block" : "none" }}>
      <DocSpace
        url={portalUrl}
        config={config}
        onSetDocspaceInstance={(ds: SDKInstance) => { instance.current = ds; }}
      />
    </div>
  );
}
```

</details>

### 6. Render the tabs

Render a tab bar with + New Tab and per-tab close button. The active tab shows its DocSpace instance.

`src/pages/Tabs/index.tsx`

<details>
  <summary>Render the tabs</summary>

``` tsx
import { useMemo, useState } from "react";
import TabDocSpace from "../../components/TabDocSpace";

type Tab = {
  id: string;
  title: string;
  frameId: string;
};

export default function TabsPage() {
  const portal = import.meta.env.VITE_DOCSPACE_URL || "";
  const login = import.meta.env.VITE_DOCSPACE_USER_LOGIN || "";
  const passwordHash = import.meta.env.VITE_DOCSPACE_USER_PASSWORD_HASH || "";

  const initialTabs: Tab[] = useMemo(
    () => [
      { id: crypto.randomUUID(), title: "Manager #1", frameId: `frame-${crypto.randomUUID()}` },
    ],
    []
  );

  const [tabs, setTabs] = useState<Tab[]>(initialTabs);
  const [activeId, setActiveId] = useState<string>(initialTabs[0].id);

  function addTab() {
    const id = crypto.randomUUID();
    const frameId = `frame-${crypto.randomUUID()}`;
    const t: Tab = { id, title: `Manager #${tabs.length + 1}`, frameId };
    setTabs((prev) => [...prev, t]);
    setActiveId(id);
  }

  function closeTab(id: string) {
    setTabs((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      if (idx === -1) return prev;
      const next = prev.filter((t) => t.id !== id);
      if (id === activeId && next.length) {
        const neighbor = next[Math.max(0, idx - 1)];
        setActiveId(neighbor.id);
      }
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-[#f2f4f7]">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">DocSpace Tabs (Manager mode)</h1>
            <p className="text-gray-500 text-sm">Each tab is a separate DocSpace instance.</p>
          </div>
          <div className="flex items-center gap-2">
            {portal ? (
              <a
                href={portal}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded bg-[#2e66f5] text-white text-sm"
              >
                Open DocSpace
              </a>
            ) : (
              <span className="text-xs text-red-600">Set VITE_DOCSPACE_URL in .env</span>
            )}
            <button
              onClick={addTab}
              className="px-3 py-1.5 rounded bg-emerald-600 text-white text-sm"
              title="Open another manager tab"
            >
              + New Tab
            </button>
          </div>
        </div>
      </header>

      {/* Tabs bar */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-2 flex items-center gap-1">
          {tabs.map((t) => {
            const active = t.id === activeId;
            return (
              <div
                key={t.id}
                className={`flex items-center rounded-t select-none ${
                  active ? "bg-[#2e66f5] text-white" : "bg-transparent text-gray-700"
                }`}
              >
                <button
                  onClick={() => setActiveId(t.id)}
                  className={`px-3 py-2 text-sm hover:bg-opacity-90 ${
                    active ? "hover:bg-[#2556d2]" : "hover:bg-gray-100"
                  }`}
                >
                  {t.title}
                </button>
                <button
                  onClick={() => closeTab(t.id)}
                  className={`px-2 text-sm ${
                    active ? "hover:bg-[#2556d2]" : "hover:bg-gray-100"
                  }`}
                  title="Close tab"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content area */}
      <main className="max-w-6xl mx-auto px-2 py-2">
        <div className="relative w-full h-[70vh] bg-white border rounded-xl overflow-hidden">
          {tabs.map((t) => (
            <TabDocSpace
              key={t.id}
              frameId={t.frameId}
              portalUrl={portal}
              login={login}
              passwordHash={passwordHash}
              visible={t.id === activeId}
            />
          ))}
          {tabs.length === 0 && (
            <div className="w-full h-full grid place-items-center text-gray-500">
              No tabs. Click <span className="px-1 font-semibold">+ New Tab</span> to open manager.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
```

</details>

### 7. Wire the entry point

Replace `src/App.tsx`:

``` tsx
import TabsPage from "./pages/Tabs";

export default function App() {
  return <TabsPage />;
}
```

Make sure `src/main.tsx` imports `./index.css` (the Vite template does this by default).

### 8. Run the app

Start the dev server:

``` bash
npm run dev
```

Open `http://localhost:5173`. You should see a tab with DocSpace in manager mode. Click **+ New Tab** to open another DocSpace instance, and switch between tabs or close them with **✕**.
