---
sidebar_label: Set up a project room
sidebar_position: 1
---

# Set up a project room

Managing projects with different moving parts can be tasking, and the DocSpace room helps to segment these projects for better management. This guide will show you how to set up a project room using the mcp server.  

## Scenario

Imagine you're a project manager with a newly commissioned project to manage a website redesign for a company called Meridian Corp. You need to set up a collaboration space in DocSpace for your team before the kickoff meeting. 
A task like this normally takes numerous clicks but with the DocSpace server, all it takes is a few natural language commands with your AI client.

### What You'll Learn

- [Create and configure a room suited to your specific project](#step-2-create-the-project-room)
- [Build a logical folder structure inside the new room for efficiency](#step-3-build-a-folder-structure)
- [Add teammates and configure their access levels to ensure security](#step-5-control-team-members-access-levels)

This tutorial uses the `get_room_types`, `create_room`, `create_folder`, `get_all_people`, `get_room_access_levels`, `set_room_security` tools. 

## Before you proceed

- Ensure to [connect your DocSpace mcp server to your mcp client of choice](../getting-started/clients.md).

### Step 1: Understand Your Room Options

Before creating a room, it's worth understanding what room types DocSpace supports to pick the right room that supports your specific needs. Different room types are designed for different workflows — some are suited for document editing, others for read-only review or public sharing. Hence, picking the wrong room type can limit collaboration features later. For active team projects, a Collaboration Room is typically the right choice.

**Try this prompt:**

```
What room types are available in DocSpace?
```

The AI will call `get_room_types` and return a list of available types (e.g., Collaboration Room, Custom Room, Public Room). Read through the descriptions and decide which type fits your project.

### Step 2: Create the Project Room

Now that you know which room type you want, create the room.

**Try this prompt:**

```
Create a new collaboration room called "Meridian Corp — Website Redesign".
```

The AI will call `create_room` and return the new room's details including its ID. **Take note of the room name** as you'll reference it in subsequent steps.

Confirm the room was created by asking:

```
Get the details of the room named "Meridian Corp — Website Redesign".
```

This calls `get_room_info` and lets you verify the room's type, creation date, and ID.

---

### Step 3: Build a Folder Structure

A well-organized folder hierarchy makes it easy for team members to find the right documents without asking around. For this project, you'll create four top-level folders.

**Try this prompt:**

```
Inside the "Meridian Corp — Website Redesign" room, create the following folders:
- "01 — Briefs & Requirements"
- "02 — Design Assets"
- "03 — Drafts & Work in Progress"
- "04 — Final Deliverables"
```

The AI will call `create_folder` multiple times in sequence. Once done, verify the structure:

```
Show me the contents of the "Meridian Corp — Website Redesign" room.
```

This calls `get_folder_content` and displays your folder tree.

:::tips
**For end users:** Prefixing folder names with numbers (01, 02, etc.) keeps them sorted in the order you want, not alphabetically.

**For developers:** The `create_folder` tool takes a `parent_id` parameter. When creating nested folders, you'll pass the ID returned from the parent folder creation as the `parent_id` for the child. Your AI agent handles this chaining automatically when you describe the nesting in natural language.
:::


### Step 4: Look Up Your Team Members

Before you can invite anyone, you need to know who's available in your DocSpace portal and what their user identifiers are.

**Try this prompt:**

```
List everyone in the DocSpace portal.
```

The AI calls `get_all_people` and returns a directory of all users with their names and IDs. Scan the list and identify the teammates you want to invite:

- **Alex Chen** — Lead Designer
- **Priya Nair** — Copywriter
- **Jordan Mills** — Client Stakeholder (review-only)

---

### Step 5: Control team members Access Levels

Before inviting people, check what access levels are available so you can assign the right permissions.

**Try this prompt:**

```
What access levels can I assign when inviting users to a room?
```

The AI calls `get_room_access_levels` and returns the available roles — typically something like Editor, Reviewer, Viewer, Form Filler, or Room Admin depending on the room type.

Plan your assignments:
- Alex Chen → **Editor** (actively working on design files)
- Priya Nair → **Editor** (writing and editing copy documents)
- Jordan Mills → **Viewer** (client, read-only access)

---

### Step 6: Invite Your Team

Now put it all together and send the invitations.

**Try this prompt:**

```
Invite the following people to the "Meridian Corp — Website Redesign" room:
- Alex Chen as an Editor
- Priya Nair as an Editor
- Jordan Mills as a Viewer
```

The AI calls `set_room_security` with the appropriate access levels for each user.

**Verify the invitations worked:**

```
Who currently has access to the "Meridian Corp — Website Redesign" room and what are their roles?
```

This calls `get_room_security_info` and displays the current member list with their access levels.

---

You've successfully set up a fully structured, secure project room through natural language alone. Your team can now start collaborating in an organized space without any manual setup through the DocSpace UI.