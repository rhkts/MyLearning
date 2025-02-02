import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeViewerPorps } from "./type";

const CodeViewer = ({ code }: CodeViewerPorps) => {
  return (
    <div>
      <SyntaxHighlighter language="tsx" style={dracula} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
