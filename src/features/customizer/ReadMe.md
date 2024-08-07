# Customizer Feature Documentation

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)

---

## Overview

The "Customizer" is a specialized feature designed to facilitate pre-development customization for prospective clients. It operates as a floating sidebar within a demo site, offering a range of selectable options for modifying common website sections such as headers and footers. Users must first enter a valid "Access Code" to enable the customization options; this serves as a gatekeeping mechanism to regulate access to the feature. After making their selections, users can generate a configuration by clicking the "Generate" button. This action does two things: it produces a JSON object encapsulating their preferences, and sends this configuration directly to our web development department via email at `admin@dealerclick.com`. The feature also supports application-wide color theme customization, rounding out the user's ability to fully personalize their future website.

---

## Requirements

- React >= 18.x
- Theme UI >= 0.15.x
- Gatsby >= 5.x

---

## Architecture

The Customizer feature will be built as a React component that utilizes the Theme UI library for styling and react state management.

### Components

- **CustomizerSidebar**: The main component that houses the customization options.
- **ThemeSelector**: A component for selecting the color theme.
- **SectionSelector**: A component for selecting different versions of page sections (header, footer, etc.)

### Data Flow

1. The user interacts with the CustomizerSidebar to select different options.
2. The selections trigger state changes using React's state management.
3. These state changes are propagated to the relevant components, causing an immediate re-render with the new styles.

---

## Development Guidelines

- **Code Structure**: Follow the project's existing folder and component structure.
- **State Management**: Use React's built-in state management for handling user selections.
- **Styling**: Use Theme UI for applying styles based on the user's selection.
- **Documentation**: Document your code sufficiently to ensure that anyone can pick up where you left off.
- **Commit Convention**: Use conventional commits for your git messages.

## Testing

- Unit tests should be written using Jest and React Testing Library.
- All new code should maintain or improve the existing code coverage percentage.
