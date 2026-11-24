import type { FormEvent } from "react";
import { memo } from "react";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  Bot,
  Code2,
  FolderGit2,
  GitBranch,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { repositories, sourceFiles, suggestions } from "../../../const";
import type { Conversation } from "../../../store";
import SourceCard from "../../SourceCard";
import { chatStyles } from "../utils/consts";

type ChatPageProps = {
  repository: (typeof repositories)[number];
  conversation?: Conversation;
  composer: string;
  onComposerChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSourceClick: (index: number) => void;
  onSuggestion: (text: string) => void;
  onToggleSidebar: () => void;
  onToggleRepoPanel: () => void;
};

const ChatPage = memo(({
  repository,
  conversation,
  composer,
  onComposerChange,
  onSubmit,
  onSourceClick,
  onSuggestion,
  onToggleSidebar,
  onToggleRepoPanel,
}: ChatPageProps) => {
  const messages = conversation?.messages ?? [];
  const hasMessages = messages.length > 0;

  return (
    <Box component="section" sx={chatStyles.page}>
      <Box sx={chatStyles.header}>
        <Box sx={chatStyles.context}>
          <Box
            component="button"
            sx={chatStyles.menuButton}
            onClick={onToggleSidebar}
            aria-label="שיחות"
          >
            <Menu size={17} />
          </Box>
          <Box sx={chatStyles.breadcrumbs}>
            <Box component="span">מרחב עבודה</Box>
            <ArrowLeft size={13} />
            <Box component="strong" sx={{ color: "#dce2f1", fontWeight: 600 }}>{repository.name}</Box>
          </Box>
          <Box sx={chatStyles.branchLine}>
            <Box component="span" sx={chatStyles.branchChip}>
              <GitBranch size={12} /> {repository.branch}
            </Box>
            <Box component="span">שיחה · היום</Box>
          </Box>
        </Box>
        <Box component="button" sx={chatStyles.indexChip} onClick={onToggleRepoPanel}>
          <Box component="i" sx={chatStyles.statusDot} /> האינדקס מעודכן
        </Box>
        <Box
          component="button"
          sx={chatStyles.repositoryButton}
          onClick={onToggleRepoPanel}
          aria-label="פרטי ריפוזיטורי"
        >
          <FolderGit2 size={17} />
        </Box>
      </Box>

      <Box sx={chatStyles.scroll}>
        <Box sx={chatStyles.heading}>
          <Box sx={chatStyles.eyebrow}>
            <Sparkles size={14} /> תשובות המבוססות על הקוד שלך
          </Box>
          <Box component="h1" sx={chatStyles.title}>{conversation?.title ?? "שיחה חדשה"}</Box>
          <Box component="p" sx={chatStyles.headingDescription}>שאל שאלות על הריפוזיטורי וקבל תשובות עם הפניות ישירות לקוד.</Box>
        </Box>

        {hasMessages ? (
          <Box sx={chatStyles.messageList}>
            {messages.map((message, index) =>
              message.role === "user" ? (
                <Box sx={chatStyles.userMessage} key={message.id}>
                  <Box component="span">{message.text}</Box>
                  <Box component="b" sx={chatStyles.userAvatar}>EL</Box>
                </Box>
              ) : (
                <Box sx={chatStyles.assistantMessage} key={message.id}>
                  <Box sx={chatStyles.assistantLabel}>
                    <Box component="span" sx={chatStyles.miniBrand}>
                      <Code2 size={13} />
                    </Box>
                    <Box component="strong">RepoGuide</Box>
                    <Box component="small" sx={{ color: "#8994ac", fontSize: "10px" }}>· תשובה מתוך הקוד</Box>
                  </Box>
                  <Box sx={chatStyles.markdown}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  </Box>
                  {conversation?.id === "refresh-token" && index === 1 && (
                    <>
                      <SourceCard
                        file={sourceFiles[0]}
                        onClick={() => onSourceClick(0)}
                      />
                      <Box component="p" sx={chatStyles.assistantParagraph}>
                        בנוסף, נבדק מצב החשבון. אם ה-token פג תוקף או אינו תקין,
                        ה-guard דוחה את הבקשה ומחזיר שגיאת הרשאה.
                      </Box>
                      <SourceCard
                        file={sourceFiles[1]}
                        onClick={() => onSourceClick(1)}
                      />
                      <Box sx={chatStyles.sourceCount}>
                        <Box component="i" sx={chatStyles.statusDot} /> 2 מקורות · main @ 8f2c1a
                      </Box>
                    </>
                  )}
                </Box>
              ),
            )}
          </Box>
        ) : (
          <Box sx={chatStyles.welcome}>
            <Box sx={chatStyles.welcomeIcon}>
              <Bot size={25} />
            </Box>
            <Box component="h2" sx={{ margin: "13px 0 3px", color: "#e8ecf7", fontSize: "18px" }}>על מה נעבוד היום?</Box>
            <Box component="p" sx={{ margin: 0, fontSize: "12px" }}>שאל שאלה על הקוד או בחר אחת מההצעות כדי להתחיל.</Box>
          </Box>
        )}

        <Box component="form" sx={chatStyles.composer} onSubmit={onSubmit}>
          <Box
            component="textarea"
            sx={chatStyles.textarea}
            aria-label="שאל שאלה על הקוד"
            placeholder="שאל שאלה על הקוד..."
            value={composer}
            onChange={(event) => onComposerChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
            rows={2}
          />
          <Box sx={chatStyles.composerFooter}>
            <Box component="span" sx={chatStyles.composerHint}>
              <ShieldCheck size={14} /> תשובות מבוססות על קוד שאונדקס בלבד
            </Box>
            <Box
              component="button"
              sx={chatStyles.sendButton}
              type="submit"
              disabled={!composer.trim()}
              aria-label="שלח שאלה"
            >
              <Send size={16} />
            </Box>
          </Box>
        </Box>

        <Box sx={chatStyles.suggestionStrip}>
          <Box component="span" sx={{ "@media (max-width: 700px)": { width: "100%" } }}>אפשר להתחיל עם</Box>
          {suggestions.slice(0, 2).map((suggestion) => (
            <Box component="button" sx={chatStyles.suggestionButton} key={suggestion} onClick={() => onSuggestion(suggestion)}>
              {suggestion}
            </Box>
          ))}
        </Box>
        <Box component="p" sx={chatStyles.disclaimer}>
          ה-AI עלול לטעות. מומלץ לוודא את התשובות מול המקורות המקושרים.
        </Box>
      </Box>
    </Box>
  );
});

export default ChatPage;
