import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRef } from "react";

const Editor = ({ value, onChange }) => {

  const lastValidData = useRef(value || "");

  const countWords = (html) => {
    const text = html.replace(/<[^>]*>/g, " ");
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <div className="w-full rounded-xl border-2 border-gray-300 overflow-hidden">

      <CKEditor
        editor={ClassicEditor}
        data={value || ""}

        config={{
          toolbar: [
            "bold",
            "italic",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "undo",
            "redo"
          ],
          placeholder: "Write a professional summary..."
        }}

        onChange={(event, editor) => {

          const data = editor.getData();
          const words = countWords(data);

          if (words <= 150) {
            lastValidData.current = data;
            onChange(data);
          } else {
            editor.setData(lastValidData.current);
          }

        }}
      />

    </div>
  );
};

export default Editor;