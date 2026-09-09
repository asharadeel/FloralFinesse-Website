
// ENQUIRY FORM - posts to web3forms and stays on the page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    const status = document.getElementById('formStatus');

    if (!form || !status) return;

    function show(message, kind) {
        status.textContent = message;
        status.className = 'formStatus ' + (kind || '');
    }

    // NO KEY YET - never leave a customer filling in a form that cannot send
    const key = form.elements.access_key.value;

    if (!key || key.indexOf('YOUR_') === 0) {
        form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
        show('The message form is not switched on yet - please order through Instagram or text instead.', 'warn');
        return;
    }


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(form));
        const name = (data.name || '').trim();
        const email = (data.email || '').trim();
        const phone = (data.phone || '').trim();
        const message = (data.message || '').trim();

        if (!name || !message) {
            show('Please fill in your name and your enquiry.', 'warn');
            return;
        }

        // both contact fields are optional on their own, but one is needed
        if (!email && !phone) {
            show('Please leave either an email or a phone number so I can reply.', 'warn');
            return;
        }

        const button = form.querySelector('button');
        button.disabled = true;
        show('Sending...', '');

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(out => {
            if (out.success) {
                form.reset();
                show('Thank you - your enquiry has been sent. I will get back to you as soon as I can.', 'good');
            } else {
                show(out.message || 'Something went wrong. Please try Instagram or text instead.', 'warn');
            }
        })
        .catch(() => {
            show('Could not send - check your connection, or reach me on Instagram or by text.', 'warn');
        })
        .finally(() => {
            button.disabled = false;
        });
    });
});
