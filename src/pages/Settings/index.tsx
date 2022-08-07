import React from "react";
import { useSettings } from "../../hooks/useSettings";

const Settings = () => {
  const { settings, toggleComments } = useSettings();

  return (
    <>
      <input
        type="checkbox"
        checked={settings.isComments}
        onChange={(e) => {
          toggleComments && toggleComments(e.target.checked);
        }}
      />
      Toggle Comments {settings.isComments ? "Enabled" : "Disabled"}
    </>
  );
};

export default Settings;
