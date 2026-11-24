import { memo } from "react";
import Box from "@mui/material/Box";

type DetailRowProps = {
  label: string;
  value: string;
  mono?: boolean;
};

const DetailRow = memo(({
  label,
  value,
  mono = false,
}: DetailRowProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", minHeight: "38px", justifyContent: "space-between", gap: "8px", borderBottom: "1px solid #202b40", color: "#8994ac", fontSize: "10px" }}>
      <Box component="span">{label}</Box>
      <Box component="strong" sx={{ color: "#e8ecf7", fontSize: "10px", fontWeight: 500, ...(mono && { fontFamily: "'IBM Plex Mono', Consolas, monospace" }) }}>{value}</Box>
    </Box>
  );
});

export default DetailRow;

