import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadItemTemplateType, ItemTemplateOptions } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

const FileUploadDemo = () => {
  const [totalSize, setTotalSize] = useState(0);
  const toast = useRef(null);
  const fileUploadRef = useRef(null);
  const uploadPath = 'http://demopatch';

  const onUpload = () => {};

  const onTemplateSelect = (e: any) => {
    console.log('select e', e);
    console.log('select ORG e', e.originalEvent);

    let _totalSize = totalSize;
    let files = e.files;
    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e: { files: { size: any }[] }) => {
    let _totalSize = 0;
    e.files.forEach((file: { size: any }) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateRemove = (file: { name?: any; objectURL?: any; size?: number | undefined }) => {
    setTotalSize(totalSize);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options: {
    className: any;
    chooseButton: any;
    uploadButton: any;
    cancelButton: any;
  }) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;

    return (
      <div
        className={className}
        style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <ProgressBar
          value={value}
          style={{ width: '300px', height: '20px', marginLeft: 'auto' }}
        ></ProgressBar>
      </div>
    );
  };

  const itemTemplate = (file: any, options: ItemTemplateOptions) => {
    console.log(options);
    const asd = { name: 'asd' };
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            {options.sizeElement}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag value={123123} severity="warning" className="px-3 py-2" />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(asd)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: '5em',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-b)',
            color: 'var(--surface-d)',
          }}
        ></i>
        <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };
  const onBeforeDrop = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <div>
        <title>React Upload Component</title>
        <meta
          name="description"
          content="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations."
        />
      </div>
      <div className="content-section introduction">
        <div>
          <h1>FileUpload</h1>
          <p>
            FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto
            uploading, progress tracking and validations.
          </p>
        </div>
      </div>

      <div className="content-section implementation">
        <Toast ref={toast}></Toast>

        <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
        <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
        <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

        <div className="card">
          <h5>Advanced</h5>

          <h5>Template</h5>
          <FileUpload
            ref={fileUploadRef}
            name="demo[]"
            url={uploadPath}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            onUpload={onTemplateUpload}
            onSelect={onTemplateSelect}
            onError={onTemplateClear}
            onClear={onTemplateClear}
            headerTemplate={headerTemplate}
            itemTemplate={itemTemplate}
            emptyTemplate={emptyTemplate}
            chooseOptions={chooseOptions}
            uploadOptions={uploadOptions}
            cancelOptions={cancelOptions}
            onBeforeDrop={onBeforeDrop}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUploadDemo;
function callback() {
  throw new Error('Function not implemented.');
}
