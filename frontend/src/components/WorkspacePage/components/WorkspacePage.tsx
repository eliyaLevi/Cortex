import type { ReactNode } from "react";
import { memo } from "react";
import Box from "@mui/material/Box";
import { Activity, FolderGit2 } from "lucide-react";
import { repositories } from "../../../const";

type WorkspacePageProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const WorkspacePage = memo(({
  title,
  description,
  icon,
}: WorkspacePageProps) => {
  return (
    <Box component="section" className="workspace-page" sx={{ width: "100%", maxWidth: "920px", alignSelf: "center", padding: "42px 32px", "@media (max-width: 700px)": { padding: "28px 17px" } }}>
      <Box sx={{ display: "grid", placeItems: "center", width: "42px", height: "42px", border: "1px solid #393d67", borderRadius: "12px", background: "#191b37", color: "#b8adff" }}>{icon}</Box>
      <Box component="h1" sx={{ margin: "16px 0 4px", color: "#f0f2fa", fontSize: "26px", fontWeight: 650, letterSpacing: "-0.03em", "@media (max-width: 700px)": { fontSize: "22px" } }}>{title}</Box>
      <Box component="p" sx={{ margin: 0, color: "#8994ac", fontSize: "12px" }}>{description}</Box>
      {title === "Repositories" ? (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "12px", marginTop: "28px", "@media (max-width: 700px)": { gridTemplateColumns: "1fr" } }}>
          {repositories.map((repository) => (
            <Box component="article" key={repository.name} sx={{ display: "grid", gridTemplateColumns: "35px 1fr", alignItems: "center", gap: "8px", columnGap: "10px", padding: "17px", border: "1px solid #293650", borderRadius: "12px", background: "#101a2b" }}>
              <Box component="span" sx={{ display: "grid", flex: "0 0 auto", placeItems: "center", width: "31px", height: "31px", borderRadius: "9px", background: "#202c43", color: "#b4c0d8", gridRow: "span 2" }}>
                <FolderGit2 size={19} />
              </Box>
              <Box>
                <Box component="h2" sx={{ margin: 0, fontSize: "13px" }}>{repository.name}</Box>
                <Box component="p" sx={{ margin: "2px 0 0", color: "#8994ac", fontSize: "10px" }}>
                  {repository.owner} · {repository.branch}
                </Box>
              </Box>
              <Box component="span" sx={{ display: "flex", alignItems: "center", gridColumn: 2, gap: "6px", color: "#8ce6c1", fontSize: "10px" }}>
                <Box component="i" sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#49d6a3", boxShadow: "0 0 12px rgba(73, 214, 163, 0.3)" }} /> מעודכן
              </Box>
              <Box component="small" sx={{ margin: "2px 0 0", color: "#8994ac", fontSize: "10px" }}>{repository.files} קבצים באינדקס</Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", padding: "17px", border: "1px solid #293650", borderRadius: "12px", background: "#101a2b", marginTop: "25px", color: "#a99eff" }}>
          <Activity size={20} />
          <Box component="strong" sx={{ color: "#e8ecf7", fontSize: "13px" }}>
            {title === "הגדרות" ? "ההעדפות שלך" : "השיחות האחרונות"}
          </Box>
          <Box component="span" sx={{ color: "#8994ac", fontSize: "11px" }}>
            {title === "הגדרות"
              ? "הגדרות נוספות יהיו זמינות לאחר חיבור לשרת."
              : "בחר שיחה מהסרגל כדי לפתוח אותה."}
          </Box>
        </Box>
      )}
    </Box>
  );
});

export default WorkspacePage;
