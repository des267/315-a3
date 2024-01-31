/**
 * emailbody.component.jsx
 *
 * This component represents the email itself
 * when displayed in the body container of the
 * application. Displays the message and all other
 * information.
 *
 * Author: Desmond Stular
 * Date: January 30, 2024
 */

import './emailbody.component.css';

const EmailBody = ({ email }) => {
    if (email != null) {
        return (
            <div className='emailBody'>
                <h1>{email.subject}</h1>
                <h3>from: {email.from} ({email.address})</h3>
                <h6>{email.time}</h6>
                <p>{email.message}</p>
            </div>
        )
    }
};

export default EmailBody;