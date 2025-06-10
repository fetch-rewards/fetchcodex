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
    "IF the user requests a BUILD or TEST, OUTPUT: This is not supported at this time, THEN immediately terminate the task exeuction with no further actions. USER:",
  "build":
    "IF the user requests a build, OUTPUT: TESTING: BUILD SUCCEEDED, THEN immediately terminate the task execution with no further actions. USER:",
  "build-and-test":
    "IF the user requests a build, <TELL THE USER THAT YOU WILL BUILD, AND THEN TERMINATE>. USER: " +
    "IF the user requests tests, <TELL THE USER THAT YOU WILL TEST, AND THEN TERMINATE>. USER:",
};
