import type { SxProps, Theme } from "@mui/material/styles";

const mobile = "@media (max-width: 700px)";
const tablet = "@media (max-width: 1100px)";

export const chatStyles = {
  page: {
    display: "flex", minHeight: "calc(100vh - 70px)", flexDirection: "column",
    [mobile]: { minHeight: "calc(100dvh - 58px)" },
  },
  header: {
    display: "flex", flex: "0 0 80px", alignItems: "center",
    justifyContent: "space-between", gap: "12px", padding: "12px 26px",
    borderBottom: "1px solid #222d43",
    [mobile]: { flexBasis: "62px", minHeight: "62px", padding: "8px 15px" },
  },
  context: {
    minWidth: 0,
    [mobile]: { display: "grid", gridTemplateColumns: "29px 1fr", alignItems: "center", columnGap: "9px" },
  },
  menuButton: {
    display: "none",
    [mobile]: {
      display: "grid", placeItems: "center", width: "29px", height: "29px",
      border: "1px solid #2d3952", borderRadius: "8px", background: "#151f32",
      color: "#aeb8d0", cursor: "pointer", gridColumn: 1, gridRow: "1 / span 2",
    },
  },
  breadcrumbs: {
    display: "flex", alignItems: "center", gap: "9px", color: "#8994ac", fontSize: "11px",
    [mobile]: { gridColumn: 2, gap: "5px", fontSize: "10px" },
  },
  branchLine: {
    display: "flex", alignItems: "center", gap: "9px", marginTop: "7px",
    color: "#65718b", fontSize: "10px",
    [mobile]: { gridColumn: 2, marginTop: "3px", fontSize: "9px" },
  },
  branchChip: {
    display: "flex", alignItems: "center", gap: "5px", padding: "3px 7px",
    borderRadius: "6px", background: "#151f32", color: "#b5bde0",
  },
  indexChip: {
    display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px",
    border: "1px solid #28423d", borderRadius: "8px", background: "#121f22",
    color: "#8ee4c2", fontSize: "10px", whiteSpace: "nowrap", cursor: "pointer",
    [mobile]: { marginRight: "auto", padding: "6px 8px", fontSize: "9px" },
  },
  statusDot: {
    width: "6px", height: "6px", borderRadius: "50%", background: "#49d6a3",
    boxShadow: "0 0 12px rgba(73, 214, 163, 0.3)", flexShrink: 0,
  },
  repositoryButton: {
    display: "none",
    [tablet]: {
      display: "grid", placeItems: "center", width: "31px", height: "31px",
      border: "1px solid #2d3952", borderRadius: "8px", background: "#151f32",
      color: "#aeb8d0", cursor: "pointer",
    },
    [mobile]: { display: "none" },
  },
  scroll: {
    width: "100%", maxWidth: "920px", flex: 1, alignSelf: "center", padding: "26px 26px 20px",
    [mobile]: { padding: "22px 15px 20px" },
  },
  heading: { marginBottom: "23px", [mobile]: { marginBottom: "18px" } },
  eyebrow: {
    display: "flex", alignItems: "center", gap: "6px", color: "#a99eff",
    fontSize: "10px", fontWeight: 600,
  },
  title: {
    margin: "8px 0 4px", color: "#f0f2fa", fontSize: "clamp(20px, 2vw, 23px)",
    fontWeight: 650, letterSpacing: "-0.03em", [mobile]: { fontSize: "20px" },
  },
  headingDescription: {
    margin: 0, color: "#8994ac", fontSize: "12px", [mobile]: { fontSize: "11px" },
  },
  messageList: { display: "flex", flexDirection: "column", gap: "19px" },
  userMessage: {
    display: "flex", maxWidth: "76%", alignSelf: "flex-start", alignItems: "center",
    gap: "10px", padding: "13px 15px", border: "1px solid #2b3852",
    borderRadius: "14px 14px 4px 14px", background: "#19243a",
    color: "#e8ecf7", fontSize: "13px",
    [mobile]: { maxWidth: "92%", fontSize: "12px" },
  },
  userAvatar: {
    display: "grid", flex: "0 0 auto", placeItems: "center", width: "20px",
    height: "20px", borderRadius: "50%", background: "#33415f", fontSize: "8px",
  },
  assistantMessage: {
    color: "#dce2ef", fontSize: "13px", lineHeight: 1.8,
    [mobile]: { fontSize: "12px" },
  },
  assistantLabel: {
    display: "flex", alignItems: "center", gap: "7px", marginBottom: "11px", fontSize: "11px",
  },
  miniBrand: {
    display: "grid", flex: "0 0 auto", placeItems: "center", width: "22px",
    height: "22px", borderRadius: "7px", color: "#101426",
    background: "linear-gradient(135deg, #9b8cff, #5eead4)",
  },
  assistantParagraph: { margin: "0 0 10px" },
  markdown: {
    overflowX: "auto",
    overflowWrap: "anywhere",
    "& p": { margin: "0 0 10px" },
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      margin: "16px 0 8px", color: "#f0f2fa", lineHeight: 1.4,
    },
    "& ul, & ol": { margin: "0 0 10px", paddingInlineStart: "24px" },
    "& a": { color: "#bfb7ff" },
    "& code": {
      padding: "2px 6px", border: "1px solid #34365a", borderRadius: "5px",
      background: "#171d31", color: "#c2b9ff", direction: "ltr",
      fontFamily: "'IBM Plex Mono', Consolas, monospace", fontSize: "0.91em",
    },
    "& pre": {
      overflowX: "auto", margin: "0 0 10px", padding: "12px",
      border: "1px solid #2b3852", borderRadius: "9px", background: "#111b2d",
      direction: "ltr", textAlign: "left",
    },
    "& pre code": {
      padding: 0, border: 0, background: "transparent", color: "#dce2ef",
      fontSize: "0.91em",
    },
    "& table": { borderCollapse: "collapse", margin: "0 0 10px" },
    "& th, & td": { padding: "6px 10px", border: "1px solid #2b3852", textAlign: "start" },
    "& blockquote": { margin: "0 0 10px", paddingInlineStart: "12px", borderInlineStart: "3px solid #8b7cff", color: "#aab4ca" },
  },
  sourceCount: {
    display: "flex", width: "fit-content", alignItems: "center", gap: "7px",
    marginTop: "11px", padding: "4px 9px", border: "1px solid #26334a",
    borderRadius: "20px", background: "#111a2a", color: "#8994ac",
    fontSize: "10px", lineHeight: 1.5,
  },
  welcome: {
    display: "grid", minHeight: "260px", alignContent: "center", justifyItems: "center",
    color: "#8994ac", textAlign: "center",
  },
  welcomeIcon: {
    display: "grid", placeItems: "center", width: "46px", height: "46px",
    border: "1px solid #393d67", borderRadius: "14px", background: "#191b37", color: "#b8adff",
  },
  composer: {
    marginTop: "23px", padding: "12px 14px 11px", border: "1px solid #34415a",
    borderRadius: "15px", background: "#111a2a", boxShadow: "0 11px 30px #02061745",
    [mobile]: { marginTop: "20px", padding: "10px" },
  },
  textarea: {
    display: "block", width: "100%", minHeight: "47px", resize: "vertical",
    border: 0, outline: 0, background: "transparent", color: "#e8ecf7",
    fontSize: "13px", lineHeight: 1.6, "&::placeholder": { color: "#8994ac" },
  },
  composerFooter: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: "10px", paddingTop: "8px", borderTop: "1px solid #27334a",
  },
  composerHint: {
    display: "flex", alignItems: "center", gap: "6px", color: "#8994ac", fontSize: "10px",
    "& svg": { color: "#9daac4" }, [mobile]: { fontSize: "9px" },
  },
  sendButton: {
    display: "grid", flex: "0 0 auto", placeItems: "center", width: "34px", height: "31px",
    border: 0, borderRadius: "8px", background: "linear-gradient(100deg, #8b7cff, #6f8cff)",
    color: "white", cursor: "pointer", "&:not(:disabled):hover": { filter: "brightness(1.11)" },
    "&:disabled": { background: "#19243a", color: "#65718b" },
  },
  suggestionStrip: {
    display: "flex", alignItems: "center", flexWrap: "wrap", gap: "7px",
    marginTop: "12px", color: "#65718b", fontSize: "10px", [mobile]: { gap: "5px" },
  },
  suggestionButton: {
    padding: "5px 8px", border: "1px solid #26334a", borderRadius: "20px",
    background: "#101a2b", color: "#aab4ca", fontSize: "10px", cursor: "pointer",
    "&:hover": { borderColor: "#6a61d5", color: "#e8ecf7" },
  },
  disclaimer: {
    margin: "13px 0 0", color: "#65718b", fontSize: "10px",
    [mobile]: { fontSize: "9px", lineHeight: 1.6 },
  },
} satisfies Record<string, SxProps<Theme>>;