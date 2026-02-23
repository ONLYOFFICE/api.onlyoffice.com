---
sidebar_label: Manage document lifecycle
sidebar_position: 3
---

# Document Lifecycle Management

When working on numerous projects, files can get mismatched and messy along the way. The DocSpace MCP server can you to streamline your document lifecycle process, improving efficiency throughout the process.

## Scenario

Imagine you're part of a content team creating product marketing content for a new feature. This content passes through different stages -rough draft, reviews by multiple stakeholders before being greenlit for publishing, and subsequent archival. This tutorial walks you through managing the entire document lifecycle, including cleaning up old drafts. 

### What You'll Learn

- How to upload documents and verify their location
- How to have the AI read and reason about a document's contents
- How to update a file with a revised version
- How to promote documents between folders when they're approved
- How to clean up superseded drafts

**Tools used:** `upload_file`, `get_file_info`, `download_file_as_text`, `update_file`, `move_batch_items`, `copy_batch_items`, `delete_file`, `get_folder_content`

### Step 1: Upload Your First Draft

You have the first draft of the product marketing copy. You'll upload it to the `03 — Drafts & Work in Progress` folder inside your project room.

**For end users — try this prompt:**

```
Upload the file "launch-brief-v1.docx" to the "03 — Drafts & Work in Progress" folder in the "Meridian Corp — Website Redesign" room.
```

**For developers:** The `upload_file` tool accepts a file path and a destination folder ID. When the user specifies a folder by name, the AI first calls `get_folder_content` on the room to resolve the folder name to its ID, then calls `upload_file` with that ID as the destination.

Once uploaded, verify it landed in the right place:

```
Show me the contents of the "03 — Drafts & Work in Progress" folder.
```

---

### Step 2: Retrieve File Metadata

Confirm the file's details — its ID, creation timestamp, file size, and type.

**Try this prompt:**

```
Get the file information for "launch-brief-v1.docx".
```

The AI calls `get_file_info` and returns the file's metadata. This is particularly useful when you need to reference a specific file version or confirm who created it.

**Note the file's ID** — it will be used in subsequent operations.

---

### Step 3: Have the AI Read the Document

One of the most powerful capabilities of the DocSpace MCP server is allowing an AI agent to actually read the contents of a document for analysis, summarization, or review.

**Try this prompt:**

```
Download and read the contents of "launch-brief-v1.docx". Summarize the key sections and flag any areas that seem incomplete.
```

The AI calls `download_file_as_text`, retrieves the document text, and reasons about it directly. It might respond with something like:

> "The brief covers the project overview, target audience, and key messaging pillars. However, the 'Success Metrics' section appears to be a placeholder with no content, and the 'Timeline' section is missing entirely."

This workflow is powerful for asynchronous document review — instead of reading the whole document yourself, you can ask the AI to surface gaps and issues.

**For developers:** `download_file_as_text` returns plain text. It works best on text-based formats (DOCX, TXT, MD). For files with complex formatting, some structure may be lost in the text conversion — your agent should handle this gracefully.

---

### Step 4: Upload a Revised Version

After incorporating feedback, you have a second draft ready. Upload it alongside the first.

**Try this prompt:**

```
Upload "launch-brief-v2.docx" to the "03 — Drafts & Work in Progress" folder.
```

Alternatively, if you want to update the existing file record rather than add a new one:

```
Update the file "launch-brief-v1.docx" with the revised version "launch-brief-v2.docx".
```

This uses `update_file` to replace the file content while preserving the same file record and ID.

**When to use `upload_file` vs `update_file`:**
- Use `upload_file` when you want to keep both versions side by side (version comparison)
- Use `update_file` when you want a clean replacement and don't need to preserve the old version

---

### Step 5: Compare the Two Drafts

With both versions available, use the AI to compare them:

```
Download and compare "launch-brief-v1.docx" and "launch-brief-v2.docx". What changed between the two versions?
```

The AI will call `download_file_as_text` twice and then produce a diff summary. This is a lightweight alternative to tracked changes for teams who don't use collaborative editing features.

---

### Step 6: Promote the Approved Document

The brief has been approved by the client. Move it from the Drafts folder to the Final Deliverables folder.

**Try this prompt:**

```
Move "launch-brief-v2.docx" from "03 — Drafts & Work in Progress" to "04 — Final Deliverables" in the "Meridian Corp — Website Redesign" room.
```

The AI calls `move_batch_items` with the file ID and destination folder ID.

**If you want to keep a copy in Drafts** as a reference:

```
Copy "launch-brief-v2.docx" from "03 — Drafts & Work in Progress" to "04 — Final Deliverables".
```

This uses `copy_batch_items` instead, which leaves the original in place.

**Key distinction:**
- `move_batch_items` — removes from source, places in destination
- `copy_batch_items` — original stays in source, a copy is placed in destination

---

### Step 7: Clean Up Old Drafts

Now that the approved version is in Final Deliverables, delete the first draft to keep things tidy.

**Try this prompt:**

```
Delete "launch-brief-v1.docx" from the "03 — Drafts & Work in Progress" folder.
```

The AI calls `delete_file`. Before proceeding, the AI might ask you to confirm since deletion is irreversible. Always confirm you have the right file before saying yes.

**Final verification:**

```
Show me the contents of both the "03 — Drafts & Work in Progress" and "04 — Final Deliverables" folders.
```

You should see only `launch-brief-v2.docx` in Final Deliverables and an empty (or cleaned-up) Drafts folder.
