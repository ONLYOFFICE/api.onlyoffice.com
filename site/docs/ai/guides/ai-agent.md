---
sidebar_position: -2
---

# AI agent (beta)

Starting from version 2.4.2, the AI plugin brings the new AI agent functionality.

The AI inline agent is a contextual assistant integrated into ONLYOFFICE editors. It is accessed via a floating panel and is currently available as a beta feature of the AI plugin.

The AI agent:

- Provides natural language interaction for executing common editing tasks without navigating menus.
- Includes a collection of simple predefined [tools](custom-ai-tools.md) adapted to common tasks for each editor.
- Maintains conversation history to support iterative refinement and multi-step requests.

## What the AI agent can do {#functions}

- **Text generation and rewriting**. Create new text or enhance existing content directly in the editor. Generate summaries, expand ideas, rephrase sentences, or adjust tone and style with natural language commands.
- **Smart formatting**. Apply formatting without searching through menus. Request formatting changes, and the editor updates the document automatically.
- **Data analysis and visualization**. Aggregate, sort, and filter data in spreadsheets, and generate visual representations from selected ranges or entire sheets. Create diagrams and slide images based on simple text descriptions.

## How to install the AI agent {#installation}

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

## How to use the AI agent {#usage}

To invoke the AI agent:

1. Press `Ctrl + /` in any editor to open the AI agent input.

   ![commentText execution](/assets/images/plugins/inline-ai-agent.png#gh-light-mode-only)![commentText execution](/assets/images/plugins/inline-ai-agent.dark.png#gh-dark-mode-only)

2. Type your request and press `Enter` to receive an immediate response.

The editor supports request history, so you can continue the conversation, giving instructions step by step.

To reset the history, press `Ctrl + Alt + /`.

To disable the agent, use `Esc`.

## How to create an AI assistant {#create-ai-assistant}

The Create AI assistant feature lets you turn any repetitive text task into a dedicated toolbar button. Define a prompt once, and reuse it across your documents.

To create a new assistant:

1. Open the **AI** tab and click **Create AI assistant**.

2. Fill in the fields:
   - **Name** — a short name for the assistant, displayed as the button label on the toolbar.
   - **Prompt** — the instruction sent to the AI when the button is clicked.
   - **Action** — the action type the assistant performs on the document (Hint, Replace, or Replace + Hint).

3. Click **Create**.

   ![Create AI assistant](/assets/images/plugins/create-ai-assistant.png#gh-light-mode-only)![Create AI assistant](/assets/images/plugins/create-ai-assistant.dark.png#gh-dark-mode-only)

The assistant appears as a new button in the **AI** tab and can be used in the document.

:::note
If the assistant cannot perform the requested action — for example, when the prompt is unrelated to text editing — a warning is displayed and the operation is stopped.
:::

## AI assistant example {#create-ai-assistant-example}

The following example shows a **Simplify** assistant created with this prompt:

:::tip
Rewrite the selected text in plain, simple language. Avoid technical jargon and keep sentences short.
:::

After selecting a text passage and clicking the **Simplify** button, click the highlighted text to open the **Proposal for replacement** panel. It shows the original text alongside the suggested simplified version. An **Explanation** section below describes why and how the text was changed. Click **Accept** to apply the changes or **Reject** to discard them.

![Simplify assistant example](/assets/images/plugins/create-ai-assistant-example.png#gh-light-mode-only)![Simplify assistant example](/assets/images/plugins/create-ai-assistant-example.dark.png#gh-dark-mode-only)
