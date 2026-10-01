/**
 * ServiceNow Client Script
 * Name: Auto set urgency for high impact
 * Table: Incident
 * Type: onChange
 * Field: Impact
 * Active: true
 */
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == '1') {
        g_form.setValue('urgency', '1');
        g_form.addInfoMessage(
            'Urgency set to High for High impact incident.'
        );
    }
}
