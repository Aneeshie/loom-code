import type { Command } from "./types";

export const COMMANDS : Command[]= [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new"
  },
  {
    name: "logout",
    description: "Log out of the current account",
    value: "/logout"
  },
  {
    name: "upgrade",
    description: "Upgrade your plan",
    value: "/upgrade"
  },
  {
    name: "theme",
    description: "Change the application theme",
    value: "/theme"
  },
  {
    name: "login",
    description: "Log in to your account",
    value: "/login"
  },
  {
    name: "sessions",
    description: "View and manage sessions",
    value: "/sessions"
  },
  {
    name: "models",
    description: "View and select available models",
    value: "/models"
  },
  {
    name: "switch agents",
    description: "Switch between available agents",
    value: "/switch-agents"
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit()
    }
  }
]
