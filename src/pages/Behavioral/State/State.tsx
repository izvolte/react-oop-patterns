import React, { useState } from 'react'
import ViewMode from './ViewMode.tsx'
import EditMode from './EditMode.tsx'
import LoadingMode from './LoadingMode.tsx'

const enum EditModeEnum {
  View,
  Edit,
  Loading,
}

const State = () => {
  const [mode, setMode] = useState<EditModeEnum>(EditModeEnum.View);
  const [text, setText] = useState<string>('Click to edit');

  const handleEditClick = () => {
    setMode(EditModeEnum.Edit);
  };

  const handleSaveClick = () => {
    setMode(EditModeEnum.Loading);
    setTimeout(() => {
      setMode(EditModeEnum.View);
    }, 2000); // Симуляция задержки сохранения
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const getState = () => {
    switch (mode) {
      case EditModeEnum.View:
        return <ViewMode text={text} onEdit={handleEditClick} />
      case EditModeEnum.Edit:
        return <EditMode text={text} onSave={handleSaveClick} onChange={handleChange} />
      case EditModeEnum.Loading:
        return <LoadingMode />
      default:
        throw new Error('Invalid mode')
    }
  }

  return (
    <div>
      {getState()}
    </div>
  );
};

export default State;