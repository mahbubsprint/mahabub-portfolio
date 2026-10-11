import { ReactNode } from "react";

interface Props {
  title: string;
  cmd: string;
  children: ReactNode;
}

export default function MacWindow({ title, cmd, children }: Props) {
  return (
    <div className="mac-window">
      <div className="mac-titlebar">
        <span className="mac-dot mac-red" />
        <span className="mac-dot mac-yellow" />
        <span className="mac-dot mac-green" />
        <span className="mac-title">{title}</span>
      </div>
      <div className="mac-body">{children}</div>
      <div className="mac-footer">
        <span className="mac-prompt">~</span>
        <span className="mac-cmd">echo <span className="mac-str">&quot;{cmd}&quot;</span></span>
      </div>
    </div>
  );
}
