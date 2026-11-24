import { FormEvent, memo, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import Box from "@mui/material/Box";
import {
  Check,
  ChevronDown,
  FolderGit2,
  History,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  X,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import type ChatPage from "../../ChatPage";
import ConversationRow from "../../ConversationRow";
import Header from "../../Header";
import RepositoryPanel from "../../RepositoryPanel";
import SourceDialog from "../../SourceDialog";
import { repositories } from "../../../const";
import { useChatStore } from "../../../store";
import { layoutStyles } from "../utils/consts";

export type ChatPageContext = ComponentProps<typeof ChatPage>;

const MainLayout = memo(() => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [repoPanelOpen, setRepoPanelOpen] = useState(false);
  const [selectedRepository, setSelectedRepository] = useState(0);
  const [repoMenuOpen, setRepoMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [composer, setComposer] = useState("");
  const [sourceOpen, setSourceOpen] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshLabel, setRefreshLabel] = useState("אונדקס לפני 12 דקות");
  const navigate = useNavigate();
  const conversations = useChatStore((state) => state.conversations);
  const activeConversationId = useChatStore(
    (state) => state.activeConversationId,
  );
  const createConversation = useChatStore((state) => state.createConversation);
  const selectConversation = useChatStore((state) => state.selectConversation);
  const sendMessage = useChatStore((state) => state.sendMessage);
  const activeConversation = conversations.find(
    (conversation) => conversation.id === activeConversationId,
  );
  const filteredConversations = useMemo(
    () =>
      conversations.filter((conversation) =>
        conversation.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [conversations, search],
  );
  const selectedRepo = repositories[selectedRepository];

  function startConversation() {
    createConversation();
    setComposer("");
    setSidebarOpen(false);
    navigate("/");
  }

  function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = composer.trim();
    if (!text) return;
    sendMessage(text);
    setComposer("");
  }

  function refreshIndex() {
    setRefreshing(true);
    window.setTimeout(() => {
      setRefreshing(false);
      setRefreshLabel("עודכן ממש עכשיו");
    }, 850);
  }

  return (
    <Box className="app-shell" dir="rtl" sx={layoutStyles.shell}>
      <Header />
      <Box className="workspace" sx={layoutStyles.workspace}>
        <Box
          component="aside"
          className={`conversation-sidebar ${sidebarOpen ? "is-open" : ""}`}
          sx={layoutStyles.sidebar}
        >
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Box
              component="button"
              className="repo-picker"
              sx={layoutStyles.picker}
              onClick={() => setRepoMenuOpen((open) => !open)}
              aria-expanded={repoMenuOpen}
            >
              <Box component="span" sx={layoutStyles.repoMark}>
                <FolderGit2 size={16} />
              </Box>
              <Box component="span" sx={layoutStyles.pickerCopy}>
                <Box component="strong" sx={{ fontSize: "12px", fontWeight: 600 }}>{selectedRepo.name}</Box>
                <Box component="small" sx={{ color: "#8994ac", fontSize: "11px" }}>ארגון {selectedRepo.owner}</Box>
              </Box>
              <ChevronDown size={15} className="muted-icon" />
            </Box>
            {repoMenuOpen && (
              <Box sx={layoutStyles.repoMenu}>
                {repositories.map((repository, index) => (
                  <Box
                    component="button"
                    className="repo-menu-item"
                    sx={layoutStyles.repoMenuItem}
                    key={repository.name}
                    onClick={() => {
                      setSelectedRepository(index);
                      setRepoMenuOpen(false);
                    }}
                  >
                    <FolderGit2 size={15} />
                    <Box component="span" sx={{ flex: 1 }}>{repository.name}</Box>
                    {selectedRepository === index && <Check size={14} />}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          <Box component="button" className="new-chat-button" sx={layoutStyles.newChat} onClick={startConversation}>
            <Plus size={17} />
            שיחה חדשה
          </Box>

          <Box component="label" sx={layoutStyles.search}>
            <Search size={16} />
            <Box
              component="input"
              sx={layoutStyles.searchInput}
              aria-label="חיפוש בשיחות"
              placeholder="חיפוש בשיחות"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search && (
              <Box
                component="button"
                sx={layoutStyles.clearSearch}
                onClick={() => setSearch("")}
                aria-label="נקה חיפוש"
              >
                <X size={14} />
              </Box>
            )}
          </Box>

          <Box sx={layoutStyles.list}>
            <Box sx={layoutStyles.label}>שיחות אחרונות</Box>
            {filteredConversations.map((conversation) => (
              <ConversationRow
                conversation={conversation}
                active={conversation.id === activeConversationId}
                key={conversation.id}
                onClick={() => {
                  selectConversation(conversation.id);
                  setSidebarOpen(false);
                  navigate("/");
                }}
              />
            ))}
            {filteredConversations.length === 0 && (
              <Box component="p" sx={{ color: "#8994ac", fontSize: "12px", textAlign: "center" }}>לא נמצאו שיחות מתאימות</Box>
            )}
          </Box>

          <Box component="nav" className="side-nav" aria-label="ניווט ראשי" sx={layoutStyles.nav}>
            <NavLink to="/history">
              <History size={16} /> היסטוריה
            </NavLink>
            <NavLink to="/repositories">
              <FolderGit2 size={16} /> Repositories
            </NavLink>
            <NavLink to="/settings">
              <Settings size={16} /> הגדרות
            </NavLink>
          </Box>

          <Box component="button" className="account-row" sx={layoutStyles.account}>
            <Box component="span" sx={layoutStyles.avatar}>EL</Box>
            <Box component="span" sx={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start", gap: 0, fontSize: "11px" }}>
              <Box component="strong" sx={{ fontWeight: 600 }}>Eli</Box>
              <Box component="small" sx={{ color: "#8994ac", fontSize: "11px" }}>חשבון אישי</Box>
            </Box>
            <MoreHorizontal size={17} className="muted-icon" />
          </Box>
        </Box>

        <Box component="main" className="main-panel" sx={layoutStyles.main}>
          <Box sx={{ display: "none" }}>
            <Box component="button" onClick={() => setSidebarOpen(true)} aria-label="פתח שיחות">
              <Menu />
            </Box>
            <Box component="span">{selectedRepo.name}</Box>
            <Box
              component="button"
              onClick={() => setRepoPanelOpen(true)}
              aria-label="פרטי ריפוזיטורי"
            >
              <FolderGit2 />
            </Box>
          </Box>
          <Outlet
            context={{
              repository: selectedRepo,
              conversation: activeConversation,
              composer,
              onComposerChange: setComposer,
              onSubmit: submitMessage,
              onSourceClick: setSourceOpen,
              onSuggestion: setComposer,
              onToggleSidebar: () => setSidebarOpen(true),
              onToggleRepoPanel: () => {
                if (window.matchMedia("(max-width: 1100px)").matches) {
                  setRepoPanelOpen(true);
                }
              },
            } satisfies ChatPageContext}
          />
        </Box>

        <RepositoryPanel
          repository={selectedRepo}
          open={repoPanelOpen}
          refreshing={refreshing}
          refreshLabel={refreshLabel}
          onRefresh={refreshIndex}
          onClose={() => setRepoPanelOpen(false)}
          onSuggestion={(text) => {
            setComposer(text);
            navigate("/");
          }}
        />
      </Box>
      {(sidebarOpen || repoPanelOpen) && (
        <Box
          component="button"
          className="mobile-scrim"
          sx={layoutStyles.scrim}
          onClick={() => {
            setSidebarOpen(false);
            setRepoPanelOpen(false);
          }}
          aria-label="סגור חלונית"
        />
      )}
      {sourceOpen !== null && (
        <SourceDialog index={sourceOpen} onClose={() => setSourceOpen(null)} />
      )}
    </Box>
  );
});

export default MainLayout;
