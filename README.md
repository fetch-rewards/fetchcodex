# 🚀 Fetch Codex

<div align="center">
  <img src=".github/demo.gif" alt="Fetch Codex Demo" width="600"/>
  
  *Your AI pair programmer that actually understands iOS development*
</div>

## 🎯 What's This?

Fetch Codex is a powerful fork of [OpenAI's Codex CLI](https://github.com/openai/codex) that brings the magic of AI-assisted development specifically to iOS engineers. We've taken the already impressive Codex and supercharged it with iOS-specific capabilities.

## 🛠️ Features

- 🤖 AI-powered unit testing
- 🧪 Access to build scripts

## 🚀 Getting Started

1. Delete any current installations of the Codex CLI
   - If you used npm you can see your globally installed packages by running `npm ls -g --depth=0`
   - If codex is located under /opt/homebrew/lib, remove it by running `rm -f /opt/homebrew/bin/codex && npm uninstall -g @openai/codex`
2. Clone the fetchcodex repository to a familiar location
   - `git clone https://github.com/fetch-rewards/fetchcodex.git`
3. Navigate to the codex-cli folder in the FetchCodex repository
   - `cd path/to/fetchcodex/codex-cli`
4. Install FetchCodex
   - `npm link`
5. Run the codex command in any terminal 😍

_Please use ChatGPT if you encounter any errors or issues_

## 🙏 Acknowledgments

- [OpenAI Codex](https://github.com/openai/codex) - The original project that inspired this fork
- The very cool iOS developers who've contributed to this project

---

<div align="center">
  <sub>Built with ❤️ by the Fetch iOS interns + Rita</sub>
</div>
