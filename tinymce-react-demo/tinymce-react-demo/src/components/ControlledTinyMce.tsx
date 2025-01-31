import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { APIKEY } from '../App';

const ControlledTinyMce = () => {
  const [content, setContent] = useState('<p>This is controlled content.</p>');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      Controlled editor:
      <Editor
        apiKey={APIKEY}
        value={content}
        onEditorChange={(newContent) => setContent(newContent)}
        init={{
          height: 300,
          menubar: false,
        }}
      />
    </div>
  );
};

export default ControlledTinyMce;