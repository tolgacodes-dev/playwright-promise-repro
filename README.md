# Negated promise assertions pass on the wrong settlement

Run `npm install` and `npm test` with Node.js 24. No browser installation is needed.

Expected: both tests fail. Observed with @playwright/test 1.65.1: both pass and the runner exits with status 0. The same result was observed with 1.64.1 and 1.66.0-alpha-2026-11-23.

The first test uses `.resolves` with a rejected promise. The second uses `.rejects` with a fulfilled promise. In both cases the promise requirement should fail before the negated value matcher is considered.
