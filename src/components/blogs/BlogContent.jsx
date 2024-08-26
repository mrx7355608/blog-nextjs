"use client";

import { useEffect } from "react";
import parse from "html-react-parser";

import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function BlogContent({ content }) {
    useEffect(() => Prism.highlightAll(), []);
    return <div className="no-tw-base">{parse(content)}</div>;
}
