
import { FormatBold, FormatItalic, FormatUnderlined, FormatColorFill, ArrowDropDown, FormatListBulleted, Image } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

function MenuEdit() {
  const [formats, setFormats] = useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBold />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalic />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlined />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list">
        <FormatListBulleted />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" >
        <FormatColorFill />
        <ArrowDropDown />
      </ToggleButton>
      <ToggleButton value="image" aria-label="image">
        <Image />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default MenuEdit;