import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export const SunEditorComponent = () => {
  return (
    <div>
      <SunEditor
        min-Height="60vh"
        height="60vh"
        width="65vw"
        setOptions={{
          buttonList: [
            ['font', 'fontSize', 'bold', 'underline', 'italic', 'strike'],
            ['list', 'align', 'formatBlock', 'table', 'image'],
            ['undo', 'redo'],
            [
              'paragraphStyle',
              'blockquote',
              'subscript',
              'superscript',
              'fontColor',
              'hiliteColor',
              'textStyle',
              'removeFormat',
              'outdent',
              'indent',
              'horizontalRule',
              'lineHeight',
              'link',
              'video',
              'audio',
              'showBlocks',
              'codeView',
              'preview',
              'print',
              'save',
              'template',
              'fullScreen',
            ],
          ],
          //   fontSize: [12, 14, 16, 18, 20],
        }}
      />
    </div>
  );
};
