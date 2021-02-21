import React from 'react'
import style from '../ContactParts/ContactInput.module.css'

function ContactInput() {
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.forms}>
                <h3>Contact US</h3>
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </form>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Tel Number" />
                </form>
                <form>
                    <textarea type="textarea" placeholder="Message...." />
                </form>
                <form>
                    <button type="button">Send messages</button>
                </form>
                </div>
              
            </div>
        </div>
    )
}

export default ContactInput