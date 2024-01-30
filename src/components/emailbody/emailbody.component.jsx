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