import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMceEditor = React.forwardRef(function TinyMceEditor(props, ref) {
    return (
        <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            onInit={(evt, editor) => (ref.current = editor)}
            initialValue={props.content}
            init={{
                plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
        />
    );
});

export default TinyMceEditor;
