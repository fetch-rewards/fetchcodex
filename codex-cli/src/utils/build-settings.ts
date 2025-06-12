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
    `
      IF you make a change to the codebase, run the build script, output its results to the user, and then output a summary of its results to the user. Never run any pre commit hooks.
      To build the project, use the \`shell\` tool with the following command:

      \`\`\`bash
      {"cmd": ["bash", "run_build.sh"], "workdir": "..."}
      \`\`\`

      **Tips & Details:**
      - **Error handling:** It uses \`set -e\`, so it will exit immediately on any error. On failure, it prints “💥 BUILD FAILED!” and exits with status 1.
      - **Logs:** Build output is captured to \`/tmp/build_output.txt\`. If the build fails or the status is unclear, inspect this file for detailed logs.
      - **Success criteria:** Looks for “✅ Build succeeded” in the log to confirm a successful build; otherwise it flags a failure or unclear status.
    ` +
    "IF the user requests a TEST, OUTPUT: Testing is disabled at this time. To change your settings, type /buildsettings. THEN, immediately terminate the task execution with no further actions. USER:",
  "build-and-test":
    `
      IF you make a change to the codebase, run the build script, output its results to the user, and then output a summary of its results to the user. Never run any pre commit hooks.
      To build the project, use the \`shell\` tool with the following command:

      \`\`\`bash
      {"cmd": ["bash", "run_build.sh"], "workdir": "..."}
      \`\`\`

      **Tips & Details:**
      - **Error handling:** It uses \`set -e\`, so it will exit immediately on any error. On failure, it prints “💥 BUILD FAILED!” and exits with status 1.
      - **Logs:** Build output is captured to \`/tmp/build_output.txt\`. If the build fails or the status is unclear, inspect this file for detailed logs.
      - **Success criteria:** Looks for “✅ Build succeeded” in the log to confirm a successful build; otherwise it flags a failure or unclear status.
    ` +
    `
      ALSO, IF you make a change to the codebase, run the test script, output its results to the user, and then output a summary of its results to the user. Never run any pre commit hooks.
      To run tests, use the \`shell\` tool with the following command:

      \`\`\`bash
      {"cmd": ["bash", "run_tests.sh", "-test-files", "[\\"path/to/test/file\\", \\"path/to/test/file\\"]"], "workdir": "..."}
      \`\`\`

      **Tips & Details:**
      - **\`-test-files\` argument:** Pass a JSON-encoded array of paths to test files. If you omit it, the script will exit with a usage error.
      - **Error handling:** Also uses \`set -e\`. On any test failure, it prints “💥 SOME TESTS FAILED!” and exits with status 1.
      - **Logs:** Complete test output is written to \`/tmp/test_output.txt\`. Review this log to see passed/failed test counts and failure details.
      - **Success criteria:** After running tests, the script reports the number of failed tests; zero failures prints “🎉 ALL TESTS PASSED!”.
      USER:
      `,
};
