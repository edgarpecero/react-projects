import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { APIKEY } from '../App';

const TinyMceEditor = () => {
  const editorRef = useRef<any>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const [content, setContent] = useState('<p>NEW VALUES</p>');

  const handleEditorChange = (content: string, editor: any) => {
    console.log('Content was updated:', content);
  };

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log('Editor content:', content);
      alert(content);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      Normal editor:
      <Editor
        apiKey={APIKEY}
        value={content}
        onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue="<p>This is the initial content of the editor.</p>"
        disabled={isDisabled}
        init={{
          height: 500,
          menubar: true,
          language: 'es',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
        }}
        onEditorChange={handleEditorChange}
      />

      <button onClick={handleSave}>Save Content</button>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? 'Enable Editor' : 'Disable Editor'}
      </button>
    </div>
  );
};

export default TinyMceEditor;