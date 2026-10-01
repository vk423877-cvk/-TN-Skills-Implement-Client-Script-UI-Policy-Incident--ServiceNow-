# Testing Checklist

## TC-01 — Test Mandatory Enforcement

- [ ] Navigate to Incident → Create New.
- [ ] Set Impact = High.
- [ ] Leave Assigned To empty.
- [ ] Click Submit.
- [ ] Verify the Incident is not saved.
- [ ] Verify the Assigned To error message appears.
- [ ] Verify UI Policy behavior is active.

## TC-02 — Test Successful Save

- [ ] Open an Incident form.
- [ ] Set Impact = High.
- [ ] Fill Assigned To.
- [ ] Submit.
- [ ] Verify the record saves successfully.
- [ ] Verify Urgency auto-setting.
- [ ] Verify Urgency read-only behavior.
- [ ] Verify State restrictions are functioning.

## TC-03 — Reverse Condition Test

- [ ] Open an Incident with Impact = High.
- [ ] Change Impact to Medium.
- [ ] Verify policy-controlled behavior is reversed.
- [ ] Save the record.

## TC-04 — Test List Edit Blocking

- [ ] Navigate to Incident → All.
- [ ] Double-click State.
- [ ] Verify the alert appears.
- [ ] Verify State remains unchanged.

## TC-05 — Test Form-Based Update

- [ ] Open the Incident record.
- [ ] Change State from the form.
- [ ] Click Update.
- [ ] Verify the State change is saved successfully.
