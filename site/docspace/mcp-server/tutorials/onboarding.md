---
sidebar_label: Onboard a distributed team
sidebar_position: 2
---

# Onboard a distributed team

Managing distributed remote teams require careful and strict access to company files to ensure efficiency and security. 

## Scenario

Your company has just hired five new remote employees across three time zones — two developers, two technical writers, and one customer success manager. Each person needs access to different rooms with different roles. You need to onboard all four efficiently without introducing security gaps or granting anyone more access then necessary. You'll do this entirely through your AI assistant:

## What you'll learn

- [How to audit which rooms exist and who currently has access](#step-2-audit-current-access)
- [How to match new employees to the right rooms and roles](#step-4-define-who-has-access)
- [How to bulk-invite across multiple rooms efficiently](#step-5-execute-the-invitations)
- [How to verify changes were applied correctly](#step-6-verify-all-invitations)

**Tools used:** `get_rooms_folder`, `get_room_info`, `get_room_security_info`, `get_all_people`, `get_room_access_levels`, `set_room_security`

### Step 1: Survey Your Existing Rooms

Before inviting anyone, you need a clear picture of what rooms currently exist in your DocSpace.

```
Show me the Rooms folder — I want to see all existing rooms.
```

The AI calls `get_rooms_folder` and returns the top-level rooms directory. You should see your existing rooms like:

- "Engineering — Core Platform"
- "Content & Marketing Hub"
- "Client Success — Shared Resources"

If the list is long, you can ask for details on specific rooms:

```
Get the details of the "Engineering — Core Platform" room.
```

### Step 2: Audit Current Access

Before adding new team members, it's good practice to audit who already has access to each room. This helps you spot stale permissions (old contractors, former employees), review these existing permissions and plan the new invitations.

**Try this prompt to know who has access for each room:**

```
Who has access to the "insert room name" room right now?
```

Each call to `get_room_security_info` returns the full member list with roles. Note any access that looks outdated.

If you spot a former contractor/employee still listed in any of these rooms, you can remove them in this step:

```
Remove user "freelancer@example.com" from the "Engineering — Core Platform" room.
```

### Step 3: Look Up the New Hires

Find the new employees in your DocSpace portal.

**Try this prompt:**

```
List all people in the DocSpace portal and tell me which ones were recently added.
```

The AI calls `get_all_people` and returns the full directory. Identify your five new hires:

- **Sam Rivera** — Developer
- **Yuki Tanaka** — Content Writer
- **Aisha Okafor** — Content Writer
- **Marcus Webb** — Client Success Manager

### Step 4: Define who has access

Before issuing invitations and assigning permissions, know what each team member can/can't access. 

Here is the access plan for this scenario:

| **Person** | **Role** | **Room** | **Access Level** |
|---|---|---|---|
| June Taylor | Developer | Engineering — Core Platform | Editor |
| Yuki Tanaka | Content Writer | Content & Marketing Hub | Editor |
| Aisha Okafor | Content Writer | Content & Marketing Hub | Editor |
| Marcus Webb | Client Success Manager | Client Success — Shared Resources | Editor |
| Marcus Webb | Client Success Manager | Content & Marketing Hub | Viewer |

Note that Marcus gets access to two rooms — Editor in his primary room and Viewer in the content room so he can reference materials without editing them.


### Step 5: Execute the Invitations

Now send all the invitations. You can do this room by room:

**Prompt for Engineering room:**

```
Invite June Taylor to "Engineering — Core Platform" room as Editors.
```

**Prompt for Content room:**

```
Invite Yuki Tanaka and Aisha Okafor to the "Content & Marketing Hub" room as Editors. Also invite Marcus Webb as a Viewer.
```

**Prompt for Client Success room:**

```
Invite Marcus Webb to the "Client Success — Shared Resources" room as an Editor.
```

Each call uses `set_room_security` under the hood. The AI resolves the user names to IDs automatically using the data it retrieved from `get_all_people`.


### Step 6: Verify All Invitations

Run a final audit on all three rooms to confirm everything is correct with this prompt:

```
Summarize who has access to each of these rooms and their roles: "Engineering — Core Platform", "Content & Marketing Hub", and "Client Success — Shared Resources".
```

The AI will call `get_room_security_info` for each room and return a consolidated summary. Cross-check against your access plan above.

**Common issues to watch for:**

- Inviting a user twice (duplicate invite)
- Assigning a team member to the wrong access level
- A user missing from a room they should be in

If you find any issues, correct them immediately. For example, this prompt changes the access level for Marcus Webb: 

```
Change Marcus Webb's role in "Content & Marketing Hub" from Editor to Viewer.
```