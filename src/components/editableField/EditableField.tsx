import { useState } from 'react';
import styles from './editablefield.module.css';

interface propTypes {
  width?: string;
  initValue: string;
}

function EditableField({ initValue, width }: propTypes): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(initValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      setIsEdit(false);
    }
  }

  function handlBlur(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
  }

  function handleDoubleClick(e: React.MouseEvent<HTMLDivElement>): void {
    setIsEdit(true);
  }

  return isEdit ? (
    <input
      style={{ width }}
      className={styles.in}
      type='text'
      value={value}
      onChange={handleChange}
      onKeyDown={handleSubmit}
      onBlur={handlBlur}
      placeholder='Press Enter to save'
    />
  ) : (
    <div
      style={{ width }}
      className={styles.out}
      onDoubleClick={handleDoubleClick}
      placeholder='Double Click to type'
    >
      {value}
    </div>
  );
}
export default EditableField;
