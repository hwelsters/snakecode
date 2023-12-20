import { tags as t } from "@lezer/highlight";
import { createTheme } from "@uiw/codemirror-themes";

const theme = createTheme({
  theme: "light",
  settings: {
    background: "#fff",
    foreground: "#202225",
    selection: "#8a91991a",
    selectionMatch: "#8a91991a",
    lineHighlight: "#8a91991a",
    gutterBackground: "#fff",
    gutterForeground: "#40444b",
  },
  styles: [
    { tag: t.comment, color: "#15ad75" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#15ad75" },
    { tag: t.number, color: "#15ad75" },
    { tag: t.bool, color: "#15ad75" },
    { tag: t.null, color: "#15ad75" },
    { tag: t.keyword, color: "#15ad75" },
    { tag: t.operator, color: "#15ad75" },
    { tag: t.className, color: "#15ad75" },
    { tag: t.definition(t.typeName), color: "#15ad75" },
    { tag: t.typeName, color: "#15ad75" },
    { tag: t.angleBracket, color: "#15ad75" },
    { tag: t.tagName, color: "#15ad75" },
    { tag: t.attributeName, color: "#15ad75" },
  ],
});

export default theme;
