import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import plugins from 'suneditor/src/plugins';

export const SunEditorComponent = () => {
  return (
    <div>
      <SunEditor
        setOptions={{
          buttonList: [
            [
              'font',
              'bold',
              'underline',
              'italic',
              'strike',
              'list',
              'align',
              'fontSize',
              'formatBlock',
              'table',
              'image',
            ],
          ],
        }}
      />
    </div>
  );
};
