import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Sounds from "../../utils/sounds";

const SoundHandler = (props) => {
  const [sound, setSound] = useState(Sounds.DEFAULT);

  const handleChange = (event) => {
    setSound(event.target.value);
  };

  return (
    <FormControl sx={{ m: 10, minWidth: "25%" }} size="small">
      <InputLabel id="sound-menu">Alarm Sound</InputLabel>
      <Select
        labelId="sound-menu-select"
        id="sound-menu-select"
        value={sound}
        label="Alarm Sound"
        onChange={handleChange}
      >
        <MenuItem value={Sounds.DEFAULT}>Default</MenuItem>
        <MenuItem value={Sounds.ALIEN}>Alien</MenuItem>
        <MenuItem value={Sounds.NATURE}>Nature</MenuItem>
        <MenuItem value={Sounds.MILITARY}>Military</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SoundHandler;