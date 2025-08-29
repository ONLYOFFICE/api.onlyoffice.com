---
sidebar_position: -1
---


# AI agent (beta)

Starting from version 2.4.2, the AI plugin brings the new AI agent functionality.

The AI inline agent is a contextual assistant integrated into ONLYOFFICE editors. It is accessed via a floating panel and is currently available as a beta feature of the AI plugin.

The AI agent:

- Provides natural language interaction for executing common editing tasks without navigating menus.
- Includes a collection of simple predefined functions adapted to common tasks for each editor.
- Maintains conversation history to support iterative refinement and multi-step requests.

## What the AI agent can do {#functions}

- **Text generation and rewriting**. Create new text or enhance existing content directly in the editor. Generate summaries, expand ideas, rephrase sentences, or adjust tone and style with natural language commands.
- **Smart formatting**. Apply formatting without searching through menus. Request formatting changes, and the editor updates the document automatically.
- **Data analysis and visualization**. Aggregate, sort, and filter data in spreadsheets, and generate visual representations from selected ranges or entire sheets. Create diagrams and slide images based on simple text descriptions.

## How to install the AI agent (#installation)

To install the AI agent, follow the steps below:

1. Go to the **Plugins** tab and open **Plugin Manager**. Find the **AI plugin** and click **Install** or **Update** if the plugin is already installed.

   ![AI plugin](/assets/images/plugins/install-ai-plugin.png#gh-light-mode-only)![AI plugin](/assets/images/plugins/install-ai-plugin.dark.png#gh-dark-mode-only)

2. Click the **Background Plugins** button and activate the **AI** switch.

    ![Activate AI](/assets/images/plugins/activate-ai.png#gh-light-mode-only)![Activate AI](/assets/images/plugins/activate-ai.dark.png#gh-dark-mode-only)

3. Find a new **AI** tab in the top toolbar of ONLYOFFICE editors.
4. Click **Settings** to open the configuration window.
5. Select **Edit AI models** and click ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only).
6. Choose an AI provider from the list or add new AI models by entering your API keys.
7. In the row of icons, select what the model is used for: *Text*, *Images*, *Embeddings*, *Audio Processing*, *Content Moderation*, *Realtime Tasks*, *Coding Help*, *Visual Analysis*.
8. Click **OK** to save your settings and complete the connection process.

    ![AI settings](/assets/images/plugins/ai-settings.png#gh-light-mode-only)![AI settings](/assets/images/plugins/ai-settings.dark.png#gh-dark-mode-only)

9. Go back to the **Settings** and set the model for the **Chatbot**.

The AI agent is now installed and ready to start.

## How to use the AI agent (#usage)

To invoke the AI agent:

1. Press `Ctrl + /` in any editor to open the AI Agent input.
2. Type your request and press `Enter` to receive an immediate response.

The editor supports request history, so you can continue the conversation, giving instructions step by step.

To reset the history, press `Ctrl + Alt + /`.

To disable the agent, use `Esc`.
