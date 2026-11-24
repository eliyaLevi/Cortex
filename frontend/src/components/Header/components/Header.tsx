import { memo } from "react";
import Box from "@mui/material/Box";
import { ChevronDown, Code2 } from "lucide-react";
import { repositories } from "../../../const";

const Header = memo(() => {
  return (
    <Box component="header" className="topbar" sx={{ display: "flex", zIndex: 4, flex: "0 0 70px", alignItems: "center", gap: "20px", minHeight: "70px", padding: "0 24px", borderBottom: "1px solid #273149", background: "rgba(12, 19, 34, 0.94)", "@media (max-width: 700px)": { flexBasis: "58px", minHeight: "58px", gap: "11px", padding: "0 13px" } }}>
      <Box className="brand-group" sx={{ display: "flex", alignItems: "center", gap: "11px", minWidth: "190px", "@media (max-width: 700px)": { minWidth: 0, gap: "8px" } }}>
        <Box className="brand-icon" sx={{ display: "grid", placeItems: "center", flex: "0 0 auto", width: "38px", height: "38px", borderRadius: "12px", color: "#101426", background: "linear-gradient(135deg, #9b8cff, #5eead4)", "@media (max-width: 700px)": { width: "33px", height: "33px", borderRadius: "10px" } }}>
          <Code2 size={20} />
        </Box>
        <Box className="brand-copy" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px" }}>
          <Box component="strong" sx={{ fontSize: "15px", letterSpacing: "-0.02em", "@media (max-width: 700px)": { fontSize: "13px" } }}>RepoGuide</Box>
          <Box component="small" sx={{ color: "#8994ac", fontSize: "11px", "@media (max-width: 700px)": { display: "none" } }}>עוזר קוד חכם</Box>
        </Box>
      </Box>
      <Box className="topbar-divider" sx={{ width: "1px", height: "29px", background: "#263148", "@media (max-width: 700px)": { display: "none" } }} />
      <Box className="workspace-identity" sx={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", "@media (max-width: 700px)": { display: "none" } }}>
        <Box component="span" className="avatar avatar-small" sx={{ display: "grid", flex: "0 0 auto", placeItems: "center", width: "27px", height: "27px", borderRadius: "8px", background: "#26324b", color: "#e8ecf7", fontSize: "10px", fontWeight: 700 }}>EL</Box>
        <Box component="span" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
          <Box component="strong" sx={{ fontWeight: 600 }}>מרחב אישי</Box>
          <Box component="small" sx={{ color: "#8994ac", fontSize: "11px" }}>{repositories.length} ריפוזיטוריז מחוברים</Box>
        </Box>
      </Box>
      <Box className="topbar-spacer" sx={{ flex: 1 }} />
      <Box component="span" className="github-status" sx={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", border: "1px solid #20523e", borderRadius: "20px", background: "#102820", color: "#8ce6c1", fontSize: "11px", "@media (max-width: 700px)": { gap: "6px", padding: "5px 8px", fontSize: "9px" } }}>
        <Box component="i" sx={{ width: "7px", height: "7px", borderRadius: "50%", background: "#49d6a3", boxShadow: "0 0 12px rgba(73, 214, 163, 0.3)" }} /> GitHub מחובר
      </Box>
      <Box component="button" className="top-avatar" aria-label="חשבון" sx={{ display: "flex", alignItems: "center", gap: "7px", padding: "4px 0 4px 5px", border: 0, background: "none", color: "#98a3ba", cursor: "pointer", "@media (max-width: 700px)": { display: "none" } }}>
        <Box component="span" sx={{ display: "grid", flex: "0 0 auto", placeItems: "center", width: "34px", height: "34px", borderRadius: "50%", background: "#293451", color: "#e8ecf7", fontSize: "10px", fontWeight: 700 }}>EL</Box>
        <ChevronDown size={14} />
      </Box>
    </Box>
  );
});

export default Header;
