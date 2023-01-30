import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  min-width: fit-content;
  height: 100%;
  overflow: auto; 
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Inter", 
    sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
a {
  color: inherit; 
  text-decoration: inherit; 
}

`;
