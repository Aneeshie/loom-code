import { useLocation, useNavigate } from "react-router";
import { useTheme } from "../providers/theme";
import { useEffect } from "react";
import { ErrorMessage } from "../components/messages/error-message";
import { SessionShell } from "../components/session-shell";
import { BotMessage, UserMessage } from "../components/messages";

export function NewSession() {
  const navigate = useNavigate();
  const location = useLocation();
  const { colors } = useTheme();

  const state = location.state as { message?: string } | null;

  useEffect(() => {
    if (!state?.message) {
      navigate("/", {replace: true})
    }

  }, [state, navigate])

  if (!state?.message) return null;

  return (
    <SessionShell onSubmit={() => {}} inputDisabled loading>
      <UserMessage message={state.message} />
      <BotMessage content="Yeah she's mean asf be careful twin!☺️" model="sonnet-5-5" />
      {/*<ErrorMessage message="this is a sample error message"/>*/}
    </SessionShell>
  )
}
