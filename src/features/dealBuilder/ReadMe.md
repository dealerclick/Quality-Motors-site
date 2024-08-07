# DealBuilder Feature Documentation

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Architecture](#architecture)
- [Components](#components)
- [Data Flow](#data-flow)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)

---

## Overview

The "DealBuilder" is a multi-step feature designed to streamline the vehicle purchasing process for the user. The feature is structured as a step-by-step wizard, covering several facets:

1. Display of the selected vehicle's image and basic details.
2. Collection of customer information, including optional co-signer details and required document uploads.
3. Selection of payment options: financing or cash.
4. Trade-in information gathering and value calculation.
5. Selection of warranties, insurance, and aftermarket options.
6. Recap and finalization.

---

## Requirements

- React >= 18.x
- Redux for state management
- Axios for API calls
- File upload capabilities
- Credit Bureau API integration for pulling credit data (Hardcoded for now)
- Kelley Blue Book (KBB) API for trade-in value calculation

---

## Architecture

The feature will utilize a wizard-like structure, comprised of a sequence of React components. Redux will manage state, and Axios will handle API calls.

### Components

- **VehicleDetails**: Displays the selected vehicle's image and basic information.
- **CustomerInfoCollector**: Collects necessary personal, financial, and co-signer information. Enables document uploads.
- **FinanceOrCashSelector**: Allows the user to choose between financing and cash options.
- **TradeInSection**: Collects trade-in details, fetches and displays KBB value.
- **WarrantyInsuranceAfterMarket**: Enables selection of warranties, insurance, and aftermarket options.
- **RecapAndFinalization**: Shows a summary of all selections and a "Submit" button to send the data.

---

### Data Flow

1. The user clicks the "Get Started" button.
2. `VehicleDetails` renders the selected vehicle's details.
3. `CustomerInfoCollector` gathers all required information.
4. `FinanceOrCashSelector` prompts the user to opt between financing or cash.
5. `TradeInSection` captures trade-in information and displays the KBB value.
6. `WarrantyInsuranceAfterMarket` offers additional product choices.
7. `RecapAndFinalization` summarizes the user's selections and enables final submission.

---

## Development Guidelines

- **Code Structure**: Maintain an organized folder and component structure.
- **State Management**: Utilize Redux for centralized and robust state management.
- **API Interactions**: Implement Axios for all API interactions.
- **Error Handling**: Exercise rigorous error-handling, especially during API calls and file uploads.
- **Documentation**: Keep code sufficiently documented for future maintainability.
- **Commit Convention**: Follow conventional commits for git messages.

---

## Testing

- Write unit tests using Jest and React Testing Library.
- Strive to maintain or improve the existing code coverage with each new code commit.
