type Meta = { method: string; path: string; status: string };

export function CodePanel({
  title,
  meta,
  html,
}: {
  title?: string;
  meta?: Meta;
  html: string;
}) {
  return (
    <div className="code-panel">
      <div className="code-head">
        {meta ? (
          <>
            <span
              className="code-dot"
              style={{ background: "var(--accent)" }}
            />
            <span className="text-accent-2">{meta.method}</span>
            <span className="text-ink-2">{meta.path}</span>
            <span className="ml-auto text-accent">{meta.status}</span>
          </>
        ) : (
          <>
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="ml-2">{title}</span>
          </>
        )}
      </div>
      <pre
        className="code-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

// Lightweight, hand-tokenized snippets — small enough to ship inline.
const t = {
  tag: (s: string) => `<span class="tok-tag">${s}</span>`,
  attr: (s: string) => `<span class="tok-attr">${s}</span>`,
  str: (s: string) => `<span class="tok-str">${s}</span>`,
  num: (s: string) => `<span class="tok-num">${s}</span>`,
  com: (s: string) => `<span class="tok-com">${s}</span>`,
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

export const ditaHtml = [
  `${t.com("&lt;?xml version=\"1.0\"?&gt;")}`,
  `${t.tag("&lt;topic")} ${t.attr("id")}=${t.str("\"install-router\"")}${t.tag("&gt;")}`,
  `  ${t.tag("&lt;title&gt;")}Install the Edge Router${t.tag("&lt;/title&gt;")}`,
  `  ${t.tag("&lt;shortdesc&gt;")}Mount, cable, and power on the EdgeRouter 9200.${t.tag("&lt;/shortdesc&gt;")}`,
  `  ${t.tag("&lt;taskbody&gt;")}`,
  `    ${t.tag("&lt;steps&gt;")}`,
  `      ${t.tag("&lt;step&gt;")}${t.tag("&lt;cmd&gt;")}Rack-mount the chassis.${t.tag("&lt;/cmd&gt;")}${t.tag("&lt;/step&gt;")}`,
  `      ${t.tag("&lt;step&gt;")}${t.tag("&lt;cmd&gt;")}Connect uplink to ${t.tag("&lt;uicontrol&gt;")}WAN 1${t.tag("&lt;/uicontrol&gt;")}.${t.tag("&lt;/cmd&gt;")}${t.tag("&lt;/step&gt;")}`,
  `    ${t.tag("&lt;/steps&gt;")}`,
  `  ${t.tag("&lt;/taskbody&gt;")}`,
  `${t.tag("&lt;/topic&gt;")}`,
].join("\n");

export const jsonHtml = [
  `{`,
  `  ${t.attr("\"id\"")}: ${t.str("\"install-router\"")},`,
  `  ${t.attr("\"type\"")}: ${t.str("\"task\"")},`,
  `  ${t.attr("\"title\"")}: ${t.str("\"Install the Edge Router\"")},`,
  `  ${t.attr("\"summary\"")}: ${t.str("\"Mount, cable, and power on the EdgeRouter 9200.\"")},`,
  `  ${t.attr("\"locale\"")}: ${t.str("\"en-US\"")},`,
  `  ${t.attr("\"version\"")}: ${t.str("\"7.2.1\"")},`,
  `  ${t.attr("\"steps\"")}: [`,
  `    { ${t.attr("\"n\"")}: ${t.num("1")}, ${t.attr("\"cmd\"")}: ${t.str("\"Rack-mount the chassis.\"")} },`,
  `    { ${t.attr("\"n\"")}: ${t.num("2")}, ${t.attr("\"cmd\"")}: ${t.str("\"Connect uplink to WAN 1.\"")} }`,
  `  ],`,
  `  ${t.attr("\"channels\"")}: [${t.str("\"portal\"")}, ${t.str("\"in-product\"")}, ${t.str("\"salesforce\"")}, ${t.str("\"ai-rag\"")}]`,
  `}`,
].join("\n");

// silence unused
void esc;
