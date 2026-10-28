---
sidebar_position: -12
description: Generate a Next.js integration example with ONLYOFFICE Create App and connect it to your ONLYOFFICE Docs server.
tags: ["Docs", "Integration", "Node.js", "React"]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create App integration

[ONLYOFFICE Create App](https://www.npmjs.com/package/@onlyoffice/create-app) is a command-line tool that generates a ready-to-run integration example with a single command, the same way `create-next-app` generates a Next.js site. The generated project is a small file manager built with Next.js, React, and TypeScript that lists files, opens them in ONLYOFFICE Docs, and saves them back through the callback handler. Generate it to see a complete integration working, then use its code as the starting point for your own.

The generated app can:

- upload, download, and delete files;
- create blank documents, spreadsheets, presentations, and PDF forms from the [ONLYOFFICE document templates](https://github.com/ONLYOFFICE/document-templates);
- open each file in the editor or, for formats that can only be viewed, in the viewer;
- sign the editor configuration with JWT and verify JWT in the callback;
- save edited documents back to disk.

The source code of the tool and the app is in the [create-app](https://github.com/ONLYOFFICE/create-app) repository.

:::warning
This example is for testing only. It has no authentication, opens every file as a single demo user, and serves files to anyone who requests them, so anyone who can reach it can read and change its files. Do not run it on a public server, and do not use it in production as is.
:::

## Prerequisites

- **ONLYOFFICE Docs**: version 9.3 or later, [self-hosted](https://www.onlyoffice.com/download?from=api#docs-developer) or [cloud](https://www.onlyoffice.com/docs-registration?from=api). Create App does not install ONLYOFFICE Docs. ONLYOFFICE Docs must be able to reach the computer where the app runs.
- **Node.js**: version 20.12 or later, see the [official website](https://nodejs.org/en/download/).

To try the app locally, you can start ONLYOFFICE Docs in [Docker](https://docs.docker.com/get-started/get-docker/):

```sh
docker run -i -t -d -p 80:80 --restart=always \
  -e JWT_SECRET=developer-only-not-a-real-secret \
  -e ALLOW_PRIVATE_IP_ADDRESS=true \
  onlyoffice/documentserver
```

- `JWT_SECRET`: the [secret key](/docs/docs-api/additional-api/signature/signature.md) of ONLYOFFICE Docs. The generated app uses the same value by default.
- `ALLOW_PRIVATE_IP_ADDRESS`: allows ONLYOFFICE Docs to download files from private IP addresses, such as the LAN address of your computer. By default, ONLYOFFICE Docs refuses such requests.

## Step 1. Create the project

Run Create App with the name of the project folder. Choose the command for your package manager:

<Tabs>
  <TabItem value="npx" label="npx" default>
    ```sh
    npx @onlyoffice/create-app my-docs-app
    ```
  </TabItem>
  <TabItem value="npm" label="npm">
    ```sh
    npm init @onlyoffice/app my-docs-app
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```sh
    pnpm create @onlyoffice/app my-docs-app
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```sh
    yarn create @onlyoffice/app my-docs-app
    ```
  </TabItem>
</Tabs>

If npm asks whether to install the `@onlyoffice/create-app` package, confirm with `y`. If you omit the folder name, the tool asks for it. The folder must be empty or not exist yet.

Then go to the project folder:

```sh
cd my-docs-app
```

The tool copies the app into the folder, creates the `.env` file from `.env.example`, and installs the dependencies. It does not create a Git repository.

The tool accepts the following options:

- `--skip-install`: do not install the dependencies.
- `--use-npm`, `--use-pnpm`, `--use-yarn`, `--use-bun`: install the dependencies with the specified package manager. By default, the tool uses the package manager that ran it.
- `-v`, `--version`: print the version of the tool.
- `-h`, `--help`: show the help.

## Step 2. Configure the connection

Open the `.env` file and edit the following variables:

```ini
DOCUMENT_SERVER_URL=http://localhost/
DOCUMENT_SERVER_JWT_SECRET=developer-only-not-a-real-secret
APP_URL=http://localhost:3000
```

- `DOCUMENT_SERVER_URL`: the address of ONLYOFFICE Docs as the browser sees it. The browser loads the editors from this address.
- `DOCUMENT_SERVER_JWT_SECRET`: must match the [secret key](/docs/docs-api/additional-api/signature/signature.md) of ONLYOFFICE Docs. If ONLYOFFICE Docs runs in Docker, use the value of the `JWT_SECRET` container variable. Leave it empty only if JWT is disabled in ONLYOFFICE Docs.
- `APP_URL`: the address at which ONLYOFFICE Docs reaches the app to download files and send the callback. `http://localhost:3000` works only when both run on the same computer without containers. If ONLYOFFICE Docs runs in Docker or on another computer, where `localhost` points somewhere else, use the LAN address of your computer, for example, `http://192.168.1.10:3000`.

The following variables are optional:

- `DOCUMENT_SERVER_INTERNAL_URL`: the address of ONLYOFFICE Docs as the app server sees it. Set it only if it differs from `DOCUMENT_SERVER_URL`, for example, inside a Docker network.
- `DOCUMENT_SERVER_JWT_HEADER`: the HTTP header in which ONLYOFFICE Docs sends the token. The default value is `Authorization`.
- `DOCS_LANG`: the editor interface language, for example, `en-US`, `de-DE`, or `zh-CN`.
- `DEMO_USER_ID` and `DEMO_USER_NAME`: the user who opens the editor.
- `STORAGE_DIR`: the folder where the app stores files. The default value is `storage`. You can set a relative or absolute path.
- `ALLOWED_DEV_ORIGINS`: additional host names, separated by commas, that can open the development server. The host of `APP_URL` is always allowed.

After you change `.env`, restart the app. With `npm start`, the app reads the settings once and keeps them until it stops. The development server reads `ALLOWED_DEV_ORIGINS` only when it starts.

If you want to experiment with the editor configuration, modify the [parameters](/docs/docs-api/usage-api/advanced-parameters.md) in the `src/lib/editor-config.ts` file.

## Step 3. Run the app

```sh
npm start
```

This command builds the app and starts it on port 3000. To start the development server with hot reload instead, run `npm run dev`.

On the first start, the app downloads the blank documents for new files from the [document-templates](https://github.com/ONLYOFFICE/document-templates) repository into the `document-templates/new` folder, so it needs an Internet connection once. To download them again, run `npm run fetch-templates`. To change what new files look like, replace the downloaded files.

Open the `APP_URL` address in your browser, for example, `http://localhost:3000` or `http://192.168.1.10:3000`. Keep the terminal running while you use the app. You will see the file manager, where you can upload a file or create a new document, spreadsheet, presentation, or PDF form, and then click it to open it in the editor.

## How the app works

The app follows the standard integration flow described in [How it works](/docs/docs-api/get-started/how-it-works/how-it-works.md):

1. The browser opens the editor page of the app and requests the editor configuration from `/api/editor-config`. The app builds the [configuration](/docs/docs-api/usage-api/config/config.md) and signs it with JWT.
2. The browser loads the editors from ONLYOFFICE Docs and opens the file with the [React component](/docs/docs-api/get-started/frontend-frameworks/react.md).
3. ONLYOFFICE Docs downloads the file from the [`document.url`](/docs/docs-api/usage-api/config/document/document.md#url) address, `/api/files/<file>/download`.
4. When the last user closes the editor, ONLYOFFICE Docs sends a request to the [callback handler](/docs/docs-api/usage-api/callback-handler.md), `/api/callback`. The app verifies the token, downloads the edited file from ONLYOFFICE Docs, and replaces the stored file.

The app asks ONLYOFFICE Docs which formats it supports (`GET /meta/formats`). Formats with the `edit` or `lossy-edit` action open in the editor, and formats with only the `view` action open in the viewer. The app does not accept uploads of unsupported formats.

The app generates the [`document.key`](/docs/docs-api/usage-api/config/document/document.md#key) from the file name, size, and modification time. The key stays the same while the file is unchanged, so all users who open it co-edit one document, and changes after each save. This way, the app needs no database.

The integration code is in the following files:

| File | Purpose |
| ---- | ------- |
| `src/app/api/editor-config/route.ts` | Returns the signed editor configuration to the browser. |
| `src/lib/editor-config.ts` | Builds the editor configuration. |
| `src/lib/jwt.ts` | Signs and verifies JWT. |
| `src/lib/document-key.ts` | Generates the document key. |
| `src/lib/formats.ts` | Requests the supported formats and decides whether to open a file for editing or viewing. |
| `src/components/Editor.tsx` | Opens the editor with the React component. |
| `src/app/api/callback/route.ts` | Handles the callback and saves the edited file. |
| `src/app/api/files/[name]/download/route.ts` | Returns files to ONLYOFFICE Docs and to the user. |
| `src/app/api/files/` | Uploads, creates, and deletes files. |
| `src/lib/storage.ts` | Stores files on disk. It writes each file to a temporary file and then renames it, so ONLYOFFICE Docs never downloads a half-written file. |
| `src/lib/env.ts` | Reads and validates the settings from `.env`. |
| `scripts/fetch-templates.mjs` | Downloads the blank documents. |

The app stores files on the local disk and edits them in place without version history. Force saving is disabled, so ONLYOFFICE Docs saves a document after the last user closes it.

## Troubleshooting

- **The document security token is not correctly formed**: `DOCUMENT_SERVER_JWT_SECRET` is empty or does not match the secret of ONLYOFFICE Docs.
- **Download failed**: ONLYOFFICE Docs cannot reach the app. Set `APP_URL` in `.env` to an address that ONLYOFFICE Docs can resolve. If it is a private IP address, start ONLYOFFICE Docs with `ALLOW_PRIVATE_IP_ADDRESS=true`.
- **The editor does not load**: the browser cannot reach ONLYOFFICE Docs. Check that `DOCUMENT_SERVER_URL` opens in the browser.
- **The page opens, but its buttons do not work**: you opened the development server by an address that is not allowed. Add its host name to `ALLOWED_DEV_ORIGINS` in `.env`, or run the app with `npm start`.
- **New files cannot be created**: the blank documents were not downloaded. Check the Internet connection and run `npm run fetch-templates`.

To report a problem or suggest an improvement, open an issue in the [create-app](https://github.com/ONLYOFFICE/create-app/issues) repository or contact us at support@onlyoffice.com.
