/**
 * ServiceNow Client Script
 * Name: Prevent state change via list edit
 * Table: Incident
 * Type: onCellEdit
 * Field: State
 * Active: true
 */
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    alert(
        'State cannot be updated using list editing. Please open the Incident.'
    );

    callback(false);
}
