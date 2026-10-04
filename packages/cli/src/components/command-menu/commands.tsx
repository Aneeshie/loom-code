import type { Command } from "./types"
export const COMMANDS : Command[]= [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
    action: (ctx) => {
      ctx.toast.showToast({message: "Starting new conversation..."})
    }
  },
  {
    name: "logout",
    description: "Log out of the current account",
    value: "/logout",
    action: (ctx) => {
      ctx.toast.showToast({message: "Logging out..."})
    }
  },
  {
    name: "upgrade",
    description: "Upgrade your plan",
    value: "/upgrade",
    action: (ctx) => {
      ctx.toast.showToast({message: "Upgrading your plan..."})
    }
  },
  {
    name: "theme",
    description: "Change the application theme",
    value: "/theme",
    action: (ctx) => {
      ctx.toast.showToast({message: "Changing theme..."})
    }
  },
  {
    name: "login",
    description: "Log in to your account",
    value: "/login",
    action: (ctx) => {
      ctx.toast.showToast({message: "Logging in..."})
    }
  },
  {
    name: "sessions",
    description: "View and manage sessions",
    value: "/sessions",
    action: (ctx) => {
      ctx.toast.showToast({message: "Loading sessions..."})
    }
  },
  {
    name: "models",
    description: "View and select available models",
    value: "/models",
    action: (ctx) => {
      ctx.toast.showToast({message: "Loading models..."})
    }
  },
  {
    name: "switch agents",
    description: "Switch between available agents",
    value: "/switch-agents",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Mode",
        children: <text>Agent selection coming soon....</text>
      })
    }
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.toast.showToast({message: "Exiting application..."})
      ctx.exit()
    }
  }
]
