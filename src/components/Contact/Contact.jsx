import "./Contact.css"

export function Contact({contact}) {
  return (
    <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-type">{contact.type}</div>
              <div className="contact-value">{contact.value}</div>
            </div>
          </div>
    </div>
  )
};