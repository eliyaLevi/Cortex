import { memo } from "react";
import { CircleHelp, FolderGit2, History, Settings } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import ChatRoute from "./components/ChatRoute";
import MainLayout from "./components/MainLayout";
import WorkspacePage from "./components/WorkspacePage";

const AppRoutes = memo(() => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<ChatRoute />} />
        <Route path="/chat" element={<ChatRoute />} />
        <Route
          path="/repositories"
          element={
            <WorkspacePage
              title="Repositories"
              description="ניהול הריפוזיטוריז המחוברים לחשבון שלך."
              icon={<FolderGit2 />}
            />
          }
        />
        <Route
          path="/history"
          element={
            <WorkspacePage
              title="היסטוריית שיחות"
              description="כל השיחות שלך, לפי סדר העדכון האחרון."
              icon={<History />}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <WorkspacePage
              title="הגדרות"
              description="העדפות סביבת העבודה והחשבון שלך."
              icon={<Settings />}
            />
          }
        />
        <Route
          path="*"
          element={
            <WorkspacePage
              title="העמוד לא נמצא"
              description="הנתיב שביקשת לא קיים."
              icon={<CircleHelp />}
            />
          }
        />
      </Route>
    </Routes>
  );
});

export default AppRoutes;
