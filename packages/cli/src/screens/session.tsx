import { useLocation, useNavigate, useParams } from "react-router";
import { useTheme } from "../providers/theme";
import { useEffect } from "react";

export function Session() {
  const { id } = useParams();
  const { colors } = useTheme();

  return (
    <box flexGrow={1} padding={2}>
      <text>Session {id}</text>
    </box>
  )
}
