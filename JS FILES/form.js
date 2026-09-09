
// ENQUIRY FORM
//
// Neocities serves "form-action 'self'" and "connect-src 'self'", so a free
// account cannot post a form to a third party at all - not by fetch and not
// by a plain form action. So instead of posting anywhere, the form formats
// what you typed into a text message addressed to Zara. That needs no
// service, and lands in the channel she already takes orders through.
//
// If the site moves to a Neocities Supporter account (or other hosting) the
// CSP goes away and the access_key field is ready for a real background post.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    const status = document.getElementById('formStatus');
    const copyBtn = document.getElementById('copyDetails');

    if (!form || !status) return;

    const PHONE = '+447888183145';

    function show(message, kind) {
        status.textContent = message;
        status.className = 'formStatus ' + (kind || '');
    }

    // pull the fields out and check we can actually reply to this person
    function collect() {
        const data = Object.fromEntries(new FormData(form));
        const name = (data.name || '').trim();
        const email = (data.email || '').trim();
        const phone = (data.phone || '').trim();
        const message = (data.message || '').trim();

        if (!name || !message) {
            show('Please fill in your name and your enquiry.', 'warn');
            return null;
        }

        if (!email && !phone) {
            show('Please leave either an email or a phone number so I can reply.', 'warn');
            return null;
        }

        let out = 'Floral Finesse enquiry\n\nName: ' + name;
        if (email) out += '\nEmail: ' + email;
        if (phone) out += '\nPhone: ' + phone;
        out += '\n\n' + message;

        return out;
    }


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const text = collect();
        if (!text) return;

        show('Opening your messages app...', '');

        // ?body= is the form Android wants and modern iOS accepts
        window.location.href = 'sms:' + PHONE + '?body=' + encodeURIComponent(text);

        // if nothing took over the page, the device could not handle it
        setTimeout(function() {
            show('If your messages app did not open, use the copy button below and ' +
                 'send the details to Zara on Instagram instead.', 'warn');
        }, 2500);
    });


    // FALLBACK - for anyone whose device will not open a messages app
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const text = collect();
            if (!text) return;

            if (!navigator.clipboard) {
                show('Copying is not supported here - please select what you typed and copy it manually.', 'warn');
                return;
            }

            navigator.clipboard.writeText(text).then(function() {
                show('Details copied. Paste them into a message to @floralfinessebyzara.', 'good');
            }).catch(function() {
                show('Could not copy - please select what you typed and copy it manually.', 'warn');
            });
        });
    }
});
