import type { SxProps, Theme } from "@mui/material/styles";

const mobile = "@media (max-width: 700px)";
const tablet = "@media (max-width: 1100px)";

export const layoutStyles = {
  shell: {
    display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", overflow: "hidden",
    background: "radial-gradient(ellipse at 50% -35%, rgba(86, 100, 177, 0.12), transparent 55%), #080d18",
  },
  workspace: {
    display: "grid", flex: 1, gridTemplateColumns: "minmax(255px, 300px) minmax(420px, 1fr) minmax(245px, 260px)",
    minHeight: "calc(100vh - 70px)", direction: "rtl",
    [tablet]: { gridTemplateColumns: "minmax(230px, 270px) minmax(400px, 1fr)" },
    [mobile]: { display: "block", minHeight: "calc(100dvh - 58px)" },
  },
  sidebar: {
    position: "relative", display: "flex", minWidth: 0, flexDirection: "column", padding: "20px 17px 14px",
    background: "#0b1220", gridColumn: 1, borderLeft: "1px solid #273149",
    [mobile]: { position: "fixed", zIndex: 7, top: "58px", right: 0, bottom: 0, width: "min(310px, 88vw)", overflowY: "auto", boxShadow: "-20px 0 40px #02061740", transition: "transform 180ms ease", transform: "translateX(105%)", "&.is-open": { transform: "translateX(0)" } },
  },
  picker: {
    display: "flex", alignItems: "center", width: "100%", minHeight: "43px", gap: "9px",
    padding: "6px 10px", border: "1px solid #27334b", borderRadius: "10px", background: "#121c2e",
    textAlign: "right", cursor: "pointer",
  },
  repoMark: { display: "grid", flex: "0 0 auto", placeItems: "center", width: "31px", height: "31px", borderRadius: "9px", background: "#202c43", color: "#b4c0d8" },
  pickerCopy: { display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start", gap: 0 },
  repoMenu: { position: "absolute", top: "calc(100% + 7px)", right: 0, left: 0, overflow: "hidden", padding: "5px", border: "1px solid #303d56", borderRadius: "11px", background: "#111a2a", boxShadow: "0 18px 35px #02061780" },
  repoMenuItem: { display: "flex", width: "100%", alignItems: "center", gap: "9px", padding: "9px", border: 0, borderRadius: "7px", background: "transparent", color: "#c8d0e0", fontSize: "12px", textAlign: "right", cursor: "pointer", "&:hover": { background: "#1a263b" } },
  newChat: { display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "38px", marginTop: "15px", border: 0, borderRadius: "9px", background: "linear-gradient(100deg, #8b7cff, #6f8cff)", color: "white", fontSize: "12px", fontWeight: 650, cursor: "pointer", transition: "filter 120ms ease, transform 120ms ease", "&:hover": { filter: "brightness(1.11)" }, "&:active": { transform: "translateY(1px)" } },
  search: { display: "flex", alignItems: "center", gap: "8px", height: "37px", marginTop: "15px", padding: "0 10px", border: "1px solid #253149", borderRadius: "8px", background: "#0d1728", color: "#77839b", "&:focus-within": { borderColor: "#685fd0" } },
  searchInput: { width: "100%", minWidth: 0, border: 0, outline: 0, background: "transparent", color: "#e8ecf7", fontSize: "12px", "&::placeholder": { color: "#8994ac" } },
  clearSearch: { display: "grid", placeItems: "center", padding: "2px", border: 0, background: "none", color: "#8994ac", cursor: "pointer" },
  list: { flex: 1, minHeight: "80px", marginTop: "27px" },
  label: { display: "block", marginBottom: "10px", color: "#65718b", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em" },
  nav: {
    display: "flex", flexDirection: "column", gap: "3px", paddingTop: "14px", borderTop: "1px solid #273149",
    "& a": { display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px", borderRadius: "8px", color: "#8994ac", fontSize: "12px", textDecoration: "none", transition: "background 120ms ease, color 120ms ease" },
    "& a:hover, & a.active": { background: "#151f32", color: "#dce2f1" },
  },
  account: { display: "flex", alignItems: "center", gap: "9px", marginTop: "10px", padding: "12px 3px 0", border: 0, borderTop: "1px solid #273149", background: "none", textAlign: "right" },
  avatar: { display: "grid", flex: "0 0 auto", placeItems: "center", width: "30px", height: "30px", borderRadius: "50%", background: "#26324b", color: "#e8ecf7", fontSize: "9px", fontWeight: 700 },
  main: { gridColumn: 2, display: "flex", minWidth: 0, minHeight: "calc(100vh - 70px)", flexDirection: "column", background: "#0d1423", [mobile]: { minHeight: "calc(100dvh - 58px)" } },
  scrim: { display: "none", [mobile]: { position: "fixed", zIndex: 5, inset: "58px 0 0", display: "block", border: 0, background: "rgba(2, 6, 18, 0.58)" } },
} satisfies Record<string, SxProps<Theme>>;