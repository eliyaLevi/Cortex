import { memo } from "react";
import Box from "@mui/material/Box";
import { ArrowLeft, FolderGit2, RefreshCw, ShieldCheck, X } from "lucide-react";
import { repositories, suggestions } from "../../../const";
import DetailRow from "../../DetailRow";

type RepositoryPanelProps = {
  repository: (typeof repositories)[number];
  open: boolean;
  refreshing: boolean;
  refreshLabel: string;
  onRefresh: () => void;
  onClose: () => void;
  onSuggestion: (text: string) => void;
};

const RepositoryPanel = memo(({
  repository,
  open,
  refreshing,
  refreshLabel,
  onRefresh,
  onClose,
  onSuggestion,
}: RepositoryPanelProps) => {
  return (
    <Box component="aside" className={`repository-panel ${open ? "is-open" : ""}`} sx={{
      position: "relative", display: "flex", minWidth: 0, flexDirection: "column", padding: "20px 17px 14px",
      background: "#0b1220", gridColumn: 3, borderRight: "1px solid #273149",
      "@media (max-width: 1100px)": { position: "fixed", zIndex: 6, top: "70px", bottom: 0, left: 0, width: "290px", overflowY: "auto", boxShadow: "20px 0 40px #02061740", transform: open ? "translateX(0)" : "translateX(-105%)", transition: "transform 180ms ease" },
      "@media (max-width: 700px)": { top: "58px", width: "min(310px, 88vw)" },
    }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "13px", borderBottom: "1px solid #222d43" }}>
        <Box component="h2" sx={{ margin: 0, fontSize: "13px", fontWeight: 650 }}>פרטי הריפוזיטורי</Box>
        <Box
          component="button"
          className="mobile-only-icon"
          onClick={onClose}
          aria-label="סגור"
          sx={{ display: "none", "@media (max-width: 1100px)": { display: "grid", placeItems: "center", width: "31px", height: "31px", border: "1px solid #2d3952", borderRadius: "8px", background: "#151f32", color: "#aeb8d0", cursor: "pointer" } }}
        >
          <X size={17} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", margin: "16px 0" }}>
        <Box component="span" sx={{ display: "grid", flex: "0 0 auto", placeItems: "center", width: "34px", height: "34px", borderRadius: "9px", background: "#202c43", color: "#b4c0d8" }}>
          <FolderGit2 size={19} />
        </Box>
        <Box component="span" sx={{ display: "flex", minWidth: 0, flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
          <Box component="strong" sx={{ overflow: "hidden", maxWidth: "190px", fontSize: "11px", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {repository.owner} / {repository.name}
          </Box>
          <Box component="small" sx={{ color: "#8994ac", fontSize: "11px" }}>פרטי · TypeScript</Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", minHeight: "115px", flexDirection: "column", alignItems: "flex-start", gap: "8px", padding: "13px", border: "1px solid #26334a", borderRadius: "11px", background: "#101a2b" }}>
        <Box component="span" sx={{ display: "block", margin: "0 0 2px", color: "#65718b", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em" }}>סטטוס אינדקס</Box>
        <Box component="strong" sx={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px" }}>
          <Box component="i" sx={{ width: "7px", height: "7px", borderRadius: "50%", background: "#49d6a3", boxShadow: "0 0 12px rgba(73, 214, 163, 0.3)" }} /> מעודכן
        </Box>
        <Box component="span" sx={{ color: "#8994ac", fontSize: "10px" }}>
          {refreshing ? "מרענן את האינדקס..." : refreshLabel}
        </Box>
        <Box component="span" sx={{ color: "#65718b", fontSize: "10px", fontFamily: "'IBM Plex Mono', Consolas, monospace" }}>{repository.branch} · 8f2c1a7</Box>
      </Box>
      <Box
        component="button"
        className="refresh-button"
        onClick={onRefresh}
        disabled={refreshing}
        sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "35px", marginTop: "10px", border: "1px solid #34415b", borderRadius: "9px", background: "#172239", color: "#c4c0ff", fontSize: "11px", fontWeight: 650, cursor: "pointer", transition: "filter 120ms ease, transform 120ms ease", "&:hover:not(:disabled)": { background: "#202c47" }, "&:disabled": { opacity: 0.75 }, "&:active": { transform: "translateY(1px)" } }}
      >
        <RefreshCw size={15} className={refreshing ? "spin" : ""} />
        {refreshing ? "מרענן..." : "רענון האינדקס"}
      </Box>
      <Box sx={{ marginTop: "29px" }}>
        <Box sx={{ display: "block", marginBottom: "9px", color: "#65718b", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em" }}>פרטי ריפוזיטורי</Box>
        <DetailRow label="Branch ברירת מחדל" value={repository.branch} mono />
        <DetailRow label="קבצים באינדקס" value={repository.files} />
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "38px", justifyContent: "space-between", gap: "8px", borderBottom: "1px solid #202b40", color: "#8994ac", fontSize: "10px" }}>
          <Box component="span">הרשאה</Box>
          <Box component="b" sx={{ padding: "3px 8px", borderRadius: "12px", background: "#142d29", color: "#81dcc0", fontSize: "9px" }}>קריאה בלבד</Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "24px" }}>
        <Box sx={{ display: "block", marginBottom: "9px", color: "#65718b", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em" }}>שאלות מומלצות</Box>
        {suggestions.map((suggestion) => (
          <Box component="button" key={suggestion} onClick={() => onSuggestion(suggestion)} sx={{ display: "flex", width: "100%", minHeight: "40px", alignItems: "center", justifyContent: "space-between", gap: "7px", marginTop: "6px", padding: "7px 9px", border: "1px solid #222e43", borderRadius: "8px", background: "#101a2b", color: "#aab4ca", fontSize: "10px", textAlign: "right", cursor: "pointer", "&:hover": { borderColor: "#6a61d5", background: "#151f33" }, "& svg": { flex: "0 0 auto", color: "#707c94" } }}>
            <Box component="span">{suggestion}</Box>
            <ArrowLeft size={14} />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "auto", padding: "10px", border: "1px solid #26334a", borderRadius: "9px", background: "#101a2b", color: "#55d9a6" }}>
        <ShieldCheck size={16} />
        <Box component="span" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px" }}>
          <Box component="strong" sx={{ color: "#e8ecf7", fontSize: "10px" }}>מצב קריאה בלבד</Box>
          <Box component="small" sx={{ color: "#8994ac", fontSize: "9px" }}>פקודות הפרויקט לא מורצות</Box>
        </Box>
      </Box>
    </Box>
  );
});

export default RepositoryPanel;
