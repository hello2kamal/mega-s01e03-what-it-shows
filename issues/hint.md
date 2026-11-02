# booking-v3 date hint conflicts with day-first tenant parsing — 33 reports

## Scope and count

Running the supplied tenant-based classifier over the 412 unique report IDs in #4471 assigns **33 reports** to `hint`, across Alder Physio, Copper Studio and Pale Harbour. This is a separate issue from the shared parser classification. Counts describe the 2026-10-04 export, not the live support queue.

## Problem and reproduction

For Alder Physio (`de-DE`, booking-v3), the form prints `MM/DD/YYYY`, but interprets the typed date using the tenant's day-first convention. A person following the hint can type `04/07/2026` for April 7 and get July 4. Expected: the form's visible hint and interpretation agree. Actual: the hint invites month-first input while tenant parsing is day-first.

R-41230 (Copper Studio, form), R-41241 (Alder Physio, form) and R-41251 (Pale Harbour, form) are source examples in this group. The same tenant's app/email reports belong to the shared parser group; tenant alone is insufficient to classify the report.

## Evidence

- `support-kb/src/lib/kb/causes.ts` defines booking-v3's hint and classifies a day-first tenant's form reports as `hint`.
- `locales.ts` and tenant JSON supply the tenant's locale and form version. Browser locale is not the authoritative tenant setting.
- Intake guessed `parser` for 15 of these reports and `hint` for 18. Grouping by intake tag would produce the wrong totals.
- First received 2026-04-17; last received 2026-09-22. All 33 were merged into #4471 despite needing their own issue.

## Verification needed for a fix

Make the displayed format and form interpretation consistent for each affected tenant. Check ambiguous dates on booking-v3 and compare booking-v2/app/email paths so a shared symptom does not conceal a distinct cause. The export documents classification logic; no production form fix has been performed.
