import { ROOT_MODAL } from '../../constants/root';

import classes from './Notification.css';

class Notification {
  render() {
    const htmlWrapper = `
            <div class="${classes.notification__container}">
                <span>No content. Try another comics</span>
                <button
                    class="btn ${classes.notification__close}"
                    onclick="modal.innerHTML = ''"
                >X</button>
            </div>
        `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }
}

export default new Notification();
