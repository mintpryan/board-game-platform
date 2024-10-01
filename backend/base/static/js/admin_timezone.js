document.addEventListener('DOMContentLoaded', function() {
    const timezoneField = document.createElement('input');
    timezoneField.type = 'hidden';
    timezoneField.name = 'timezone';
    timezoneField.value = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const form = document.querySelector('#event_form');
    if (form) {
        form.appendChild(timezoneField);
        console.log('Timezone field added:', timezoneField);
    } else {
        console.error('Form not found.');
    }
});