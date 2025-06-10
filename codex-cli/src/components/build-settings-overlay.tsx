import TypeaheadOverlay from "./typeahead-overlay.js";
import {
  BUILD_SETTINGS_OPTIONS,
  BUILD_SETTINGS_LABELS,
  type BuildSettings,
} from "../utils/build-settings.js";
import { Text } from "ink";
import React from "react";

type Props = {
  /** Current build settings value */
  currentSetting: BuildSettings;
  /** Callback when a new setting is selected */
  onSelect: (setting: BuildSettings) => void;
  /** Callback when the overlay is closed without selection */
  onExit: () => void;
};

/**
 * Overlay to switch between build settings (disabled, build, build-and-test).
 */
export default function BuildSettingsOverlay({
  currentSetting,
  onSelect,
  onExit,
}: Props): JSX.Element {
  const items = React.useMemo(
    () =>
      BUILD_SETTINGS_OPTIONS.map((value) => ({
        label: BUILD_SETTINGS_LABELS[value],
        value,
      })),
    [],
  );

  return (
    <TypeaheadOverlay
      title="Set build settings"
      description={
        <Text>
          Current:{" "}
          <Text color="greenBright">
            {BUILD_SETTINGS_LABELS[currentSetting]}
          </Text>
        </Text>
      }
      initialItems={items}
      currentValue={currentSetting}
      onSelect={onSelect}
      onExit={onExit}
    />
  );
}
