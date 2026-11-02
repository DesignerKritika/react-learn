

const subHead = React.createElement("h6", { className: "sub-head" }, '01 - Home');
const subText = React.createElement("h4", { className: "sub-text" }, 'Immediate Joiner • AI-Augmented UI Engineer • Open to New Opportunities');
const heading = React.createElement("h1", { className: "heading" }, 'Kritika Roy');
const text = React.createElement("p", { className: "bannerTxt" }, 'I craft clean, responsive and user-focused digital experiences — specializing in pixel-perfect Figma-to-code conversions, React.js components, and modern CSS architecture, supercharged with Claude Code and OpenAI Codex for rapid website generation, terminal-based workflows, and precision debugging.');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement("div", { className: "banner" },
    subHead,
    subText,
    heading,
    text
  )
);
