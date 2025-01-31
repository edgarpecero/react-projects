import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { APIKEY } from '../App';

const TinyMceForm = () => {
  const editorRef = useRef<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log('Form content:', content);
      alert(`Submitted content: ${content}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      Form editor:
      <form onSubmit={handleSubmit}>
        <Editor
          apiKey={APIKEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Enter your content here.</p>"
          init={{
            height: 300,
            menubar: false,
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TinyMceForm;