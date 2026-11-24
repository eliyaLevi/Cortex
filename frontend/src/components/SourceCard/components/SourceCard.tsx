import { memo } from "react";
import Box from "@mui/material/Box";
import { ArrowLeft, FileCode2 } from "lucide-react";
import { sourceFiles } from "../../../const";

type SourceCardProps = {
  file: (typeof sourceFiles)[number];
  onClick: () => void;
};

const SourceCard = memo(({
  file,
  onClick,
}: SourceCardProps) => {
  return (
    <Box component="button" className="source-card" onClick={onClick} sx={{
      display: "flex", alignItems: "center", width: "min(590px, 100%)", minHeight: "54px",
      gap: "10px", margin: "13px 0 17px auto", padding: "8px 11px", border: "1px solid #2b3852",
      borderRadius: "9px", background: "#111b2d", textAlign: "right", cursor: "pointer",
      transition: "border-color 120ms ease, background 120ms ease",
      "&:hover": { borderColor: "#746be4", background: "#151f33" },
      "@media (max-width: 700px)": { marginTop: "10px", marginBottom: "12px" },
    }}>
      <Box component="span" sx={{ display: "grid", flex: "0 0 auto", placeItems: "center", width: "28px", height: "28px", borderRadius: "7px", background: "#19263a", color: "#a6b4d2" }}>
        <FileCode2 size={16} />
      </Box>
      <Box component="span" sx={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start", gap: "1px" }}>
        <Box component="strong" sx={{ color: "#bfb7ff", direction: "ltr", fontFamily: "'IBM Plex Mono', Consolas, monospace", fontSize: "10px", fontWeight: 500, "@media (max-width: 700px)": { maxWidth: "min(65vw, 300px)", overflow: "hidden", textOverflow: "ellipsis" } }}>{file.path}</Box>
        <Box component="small" sx={{ color: "#8994ac", fontSize: "10px" }}>{file.lines}</Box>
      </Box>
      <Box component="span" sx={{ display: "flex", color: "#74819a" }}><ArrowLeft size={14} /></Box>
    </Box>
  );
});

export default SourceCard;
