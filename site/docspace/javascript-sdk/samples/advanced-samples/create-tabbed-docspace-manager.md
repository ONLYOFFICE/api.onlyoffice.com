# Create a Tabbed DocSpace Manager UI

This example demonstrates how to embed ONLYOFFICE DocSpace in a tabbed interface, where each tab runs its own DocSpace instance in manager mode.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Script execution steps

### 1. Create the project

Create a new React + TypeScript project and move into it:

``` sh
npx create-react-app docspace-tabs --template typescript
cd docspace-tabs
```

### 2. Prepare environment variables

Create a `.env` file in the project root:

``` bash
REACT_APP_DOCPSACE_URL=https://yourportal.onlyoffice.com
REACT_APP_DOCPSACE_USER_LOGIN=user@example.com
REACT_APP_DOCPSACE_USER_PASSWORD_HASH=PASTE_HASH_HERE
```

- `REACT_APP_DOCPSACE_URL` - your DocSpace portal URL (root).
- `REACT_APP_DOCPSACE_USER_LOGIN` - user login for authentication.
- `REACT_APP_DOCPSACE_USER_PASSWORD_HASH` - password hash generated via the SDK (see Create password hash sample).

### 3. Install Tailwind CSS (v3) and configure PostCSS

1. Install Tailwind v3 with PostCSS:

``` bash
npm i -D tailwindcss@3.4.14 postcss@8 autoprefixer@10
```

2. Create `postcss.config.js` in the project root:

``` ts
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Create `tailwind.config.js` in the project root:

``` ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
npm i @onlyoffice/docspace-sdk-js @onlyoffice/docspace-react
```
- `@onlyoffice/docspace-react` mounts the iframe and wires SDK events.
- `@onlyoffice/docspace-sdk-js` provides methods such as `login()` (see Login, Get hash settings, Create hash samples for context).

### 5. Create the tab iframe component

Add a reusable component that embeds DocSpace and logs in on `onAppReady`.

`src/components/TabDocSpace.tsx`

<details>
  <summary>Create the tab iframe component</summary>

``` tsx
import React from "react";
import { DocSpace } from "@onlyoffice/docspace-react";

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
  async function handleAppReady() {
    try {
      const ds = (window as any).DocSpace?.SDK?.frames?.[frameId];
      if (!ds) {
        console.error(`[${frameId}] frame not found`);
        return;
      }
      await ds.login(login, passwordHash);
      console.log(`[${frameId}] login success`);
    } catch (e) {
      console.error(`[${frameId}] login failed`, e);
    }
  }

  const config = {
    frameId,
    width: "100%",
    height: "100%",
    src: portalUrl,
    mode: "manager" as const, // all tabs use manager mode
    events: { onAppReady: handleAppReady },
  };

  return (
    <div className="w-full h-full" style={{ display: visible ? "block" : "none" }}>
      <DocSpace url={portalUrl} config={config} />
    </div>
  );
}
```

</details>

### 6. Render multiple modals

Render a tab bar with + New Tab and per-tab close button. The active tab shows its DocSpace instance.

`src/pages/Tabs/index.tsx`

<details>
  <summary>Render multiple modals</summary>

``` tsx
import React, { useMemo, useState } from "react";
import TabDocSpace from "../../components/TabDocSpace";

type Tab = {
  id: string;
  title: string;
  frameId: string;
};

export default function TabsPage() {
  const portal = process.env.REACT_APP_DOCPSACE_URL || "";
  const login = process.env.REACT_APP_DOCPSACE_USER_LOGIN || "";
  const passwordHash = process.env.REACT_APP_DOCPSACE_USER_PASSWORD_HASH || "";

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
              <span className="text-xs text-red-600">Set REACT_APP_DOCPSACE_URL in .env</span>
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
import React from "react";
import TabsPage from "./pages/Tabs";

export default function App() {
  return <TabsPage />;
}
```

Ensure `src/index.tsx` imports `./index.css` (default CRA does).

### 8. Run the app

Start the dev server:

``` bash
npm start
```

Open `http://localhost:3000`. You should see a modal with DocSpace. Drag it by the header and resize from the bottom-right. Click New Window to open another modal.