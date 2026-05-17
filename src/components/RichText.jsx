import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function RichText({
  as: Tag = "div",
  className,
  children,
}) {
  return (
    <Tag className={className}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        allowedElements={[
          "strong",
          "em",
          "code",
          "span",
          "br",
          "a",
          "p",
          "ul",
          "ol",
          "li",
        ]}
        unwrapDisallowed
        components={{
          p: ({ children: paragraphChildren }) => <>{paragraphChildren}</>,
          strong: ({ children: strongChildren }) => <strong>{strongChildren}</strong>,
          a: ({ children: linkChildren, href }) => (
            <a href={href} target="_blank" rel="noreferrer">
              {linkChildren}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </Tag>
  );
}