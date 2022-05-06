# Basic Market DAO

### What is this project?

The purpose of this contract was to create a basic DAO example that allows the community to update the market fee. Note, the market is not implemented yet just the governance contracts.

The MarketSettings contract holds a fee setting that can only be updated by the owner which is transferred to the governor contract after deployment. A proposal if accepted by the voting process in the dao can update this setting after the time lock period.

This project is just a proof of concept and not ready or meant to be used in a production environment.

### Roadmap

- Add a basic swapping application with test tokens
- Allow liquidity providers earn fee from MarketSettings contract
