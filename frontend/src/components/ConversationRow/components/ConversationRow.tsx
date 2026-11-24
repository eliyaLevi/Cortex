import { memo } from "react";
import Box from "@mui/material/Box";
import { MessageSquareText } from "lucide-react";
import type { Conversation } from "../../../store";

type ConversationRowProps = {
  conversation: Conversation;
  active: boolean;
  onClick: () => void;
};

const ConversationRow = memo(({
  conversation,
  active,
  onClick,
}: ConversationRowProps) => {
  return (
    <Box
      component="button"
      className={`conversation-row ${active ? "active" : ""}`}
      sx={{
        display: "flex", width: "calc(100% + 10px)", minHeight: "45px", alignItems: "center",
        gap: "9px", marginRight: "-5px", padding: "6px 9px", border: 0, borderRadius: "8px",
        background: active ? "#182239" : "transparent", color: active ? "#a6b0c7" : "#65718b",
        textAlign: "right", cursor: "pointer", position: active ? "relative" : undefined,
        ...(active && { "&::after": { position: "absolute", top: 0, right: 0, width: "2px", height: "100%", borderRadius: "2px", background: "#8b7cff", content: '""' } }),
      }}
      onClick={onClick}
    >
      <MessageSquareText size={15} />
      <Box component="span" sx={{ display: "flex", minWidth: 0, flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
        <Box component="strong" sx={{ maxWidth: "195px", overflow: "hidden", color: "inherit", fontSize: "11px", fontWeight: 500, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{conversation.title}</Box>
        <Box component="small" sx={{ color: "#65718b", fontSize: "10px" }}>{conversation.time}</Box>
      </Box>
    </Box>
  );
});

export default ConversationRow;
