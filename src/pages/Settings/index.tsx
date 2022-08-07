import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { useSettings } from "../../hooks/useSettings";

const Settings = () => {
  const { settings, toggleComments } = useSettings();

  return (
    <>
      <Typography variant="overline" display="block" gutterBottom>
        Comments
        <Switch
          checked={settings.isComments}
          onChange={(e) => {
            toggleComments && toggleComments(e.target.checked);
          }}
        />
      </Typography>
    </>
  );
};

export default Settings;
