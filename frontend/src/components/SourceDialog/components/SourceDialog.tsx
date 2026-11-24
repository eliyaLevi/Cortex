import { memo } from "react";
import Box from "@mui/material/Box";
import { FileCode2, GitBranch, X } from "lucide-react";
import { sourceFiles } from "../../../const";

type SourceDialogProps = {
  index: number;
  onClose: () => void;
};

const SourceDialog = memo(({
  index,
  onClose,
}: SourceDialogProps) => {
  const file = sourceFiles[index];
  return (
    <Box className="dialog-backdrop" onMouseDown={onClose} sx={{ position: "fixed", zIndex: 10, inset: 0, display: "grid", placeItems: "center", padding: "20px", background: "rgba(2, 6, 18, 0.72)", backdropFilter: "blur(5px)" }}>
      <Box
        component="section"
        className="source-dialog"
        sx={{ width: "min(620px, 100%)", overflow: "hidden", border: "1px solid #34415a", borderRadius: "15px", background: "#101a2b", boxShadow: "0 24px 70px #0009", direction: "rtl" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="source-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Box component="header" sx={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 17px", borderBottom: "1px solid #273149" }}>
          <Box component="span" className="source-icon" sx={{ display: "grid", flex: "0 0 auto", placeItems: "center", width: "28px", height: "28px", borderRadius: "7px", background: "#19263a", color: "#a6b4d2" }}>
            <FileCode2 size={17} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box component="h2" id="source-title" sx={{ margin: 0, color: "#c7c0ff", direction: "ltr", fontFamily: "'IBM Plex Mono', Consolas, monospace", fontSize: "12px", fontWeight: 500, textAlign: "right" }}>{file.path}</Box>
            <Box component="p" sx={{ margin: "4px 0 0", color: "#8994ac", fontSize: "10px" }}>{file.lines} · main</Box>
          </Box>
          <Box component="button" onClick={onClose} aria-label="סגור" sx={{ display: "grid", placeItems: "center", border: 0, background: "transparent", color: "#8994ac", cursor: "pointer" }}>
            <X size={18} />
          </Box>
        </Box>
        <Box component="pre" sx={{ overflow: "auto", margin: 0, padding: "21px", background: "#0b1220", color: "#d5dced", direction: "ltr", font: "12px/1.85 'IBM Plex Mono', Consolas, monospace", textAlign: "left" }}>
          <Box component="code">{file.code}</Box>
        </Box>
        <Box component="footer" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 17px", color: "#8994ac", fontSize: "10px" }}>
          <Box component="span" sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <GitBranch size={14} /> 8f2c1a7
          </Box>
          <Box component="button" onClick={onClose} sx={{ display: "grid", placeItems: "center", border: 0, cursor: "pointer", padding: "6px 10px", borderRadius: "7px", background: "#202c43", color: "#dce2f1", fontSize: "10px" }}>סגור תצוגה</Box>
        </Box>
      </Box>
    </Box>
  );
});

export default SourceDialog;
