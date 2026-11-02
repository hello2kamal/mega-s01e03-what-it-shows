# Shared parser treats day-first tenant dates as month-first — 379 classified reports

## Scope and count

The 2026-10-04 export has 427 rows representing 412 unique report IDs merged into #4471. Running the supplied `uniqueById`, `groupByCause` and tenant-based `causeOf` functions classifies **379 unique reports** as `parser`, across 11 tenants. This is the export's classification, not proof that every report has the same underlying defect or a current live count.

## Problem and reproduction

The shared parser reads month before day, although the affected tenant's configured locale is day-first. For Harbour Dental (`en-GB`, booking-v2), input intended as 7 April can become 4 July. R-41200 reports exactly that reversal; R-41201 corrects a reporter's opposite-direction description. Validate the tenant locale and input channel rather than inferring cause from subject text or browser locale.

Expected: the input contract and parser agree on the date's meaning; an intended 7 April remains 7 April. Actual: ambiguous day/month values can be reversed. The supplied classifier assigns day-first app/email reports and booking-v2 form reports here; no production parser implementation or fix is included in the export.

## Evidence and caveats

- Sources: `support-kb/src/lib/kb/causes.ts`, `locales.ts`, tenant JSON, `reports-4471.json`, and `analysis.json`.
- Intake tags disagree with the computed parser classification for 23 reports. Intake tags are guesses, not a reliable grouping key.
- Five of these 379 reports are explicitly listed as one-day-move notes: R-41202, R-41209, R-41236, R-41344, R-41620. Their symptoms are not established as month/day swaps. Preserve them within the classifier's count and investigate separately; do not silently subtract, double-count, or assert a timezone root cause.
- First received 2026-04-01; last received 2026-10-04. Received time and merge time describe different events.

## Verification needed for a fix

Exercise day-first tenant input on app, email and booking-v2 form paths with ambiguous and unambiguous dates. Ensure intended calendar dates survive parsing. Review the five anomalous reports against actual date/time handling before claiming full coverage. This ticket records a course investigation; no application fix has been performed.
