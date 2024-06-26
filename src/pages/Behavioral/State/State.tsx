import React, { useState } from 'react'
import ViewMode from './ViewMode.tsx'
import EditMode from './EditMode.tsx'
import LoadingMode from './LoadingMode.tsx'

enum EditModeEnum {
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

  return (
    <div>
      {mode === EditModeEnum.View ? (
        <ViewMode text={text} onEdit={handleEditClick} />
      ) : null}
      {mode === EditModeEnum.Edit ? (
        <EditMode text={text} onSave={handleSaveClick} onChange={handleChange} />
      ) : null}
      {mode === EditModeEnum.Loading ? <LoadingMode /> : null}
    </div>
  );
};

export default State;