/**
 * BuildSettings options for controlling build/test behavior in interactive CLI.
 */
export const BUILD_SETTINGS_OPTIONS = [
  "disabled",
  "build",
  "build-and-test",
] as const;

/**
 * Type for build settings values.
 */
export type BuildSettings = (typeof BUILD_SETTINGS_OPTIONS)[number];

/**
 * Human-readable labels for build settings options.
 */
export const BUILD_SETTINGS_LABELS: Record<BuildSettings, string> = {
  "disabled": "Disabled",
  "build": "Build",
  "build-and-test": "Build + Test",
};

/**
 * Preface instructions for build settings. These are prepended to each prompt when
 * build settings are enabled. Replace placeholders with concrete instructions.
 */
export const BUILD_SETTINGS_PREFACES: Record<BuildSettings, string> = {
  "disabled":
    "IF the user requests a BUILD or TEST, OUTPUT: Build and testing are disabled at this time. To change your settings, type /buildsettings. THEN immediately terminate the task exeuction with no further actions. USER:",
  "build":
    "IF the user requests a BUILD, run the build script by executing `bash ./build.sh`, waiting for it to finish, then output a summary of its results to the user." +
    "IF the output mentions failure, determine why and inform the user. NO custom scripts or shell commands, ONLY PERFORM LISTED ACTIONS." +
    "IF the user requests a TEST, OUTPUT: Testing is disabled at this time. To change your settings, type /buildsettings. THEN, immediately terminate the task execution with no further actions. USER:",
  "build-and-test":
    "IF the user requests a BUILD, run the build script by executing `bash ./build.sh`, then output its results to the user, THEN immediately terminate the task execution with no further actions. " +
    "IF the user requests a TEST, run the test script by executing `bash ./test.sh`, then output its results to the user, THEN immediately terminate the task execution with no further actions. USER:",
};
