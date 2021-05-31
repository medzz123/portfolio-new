import 'easymde/dist/easymde.min.css';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { EditorContainer } from './Editor.styles';

const DynamicEditor = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const Editor: NextPage = () => {
  const [value, setValue] = useState('# Initial value');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <EditorContainer>
      <div>
        <p>Hello, this page us Editor</p>
        <DynamicEditor value={value} onChange={onChange} />
      </div>
    </EditorContainer>
  );
};

export default Editor;
