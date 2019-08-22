/**
 * Clock class is used for creating a live JavaScript clock in
 * the page's DOM. It's up to the developer to pick an element
 * where they would like the text to be displayed. The Clock
 * object will update the .innerText of the element passed
 * to the constructor.
 * Created by Joshua Schlichting August 2019
 */

class Clock {

    /**
     * Accepts an element's id in string form.
     * @param elementName: string
     * @param timeZone
     */
    constructor(elementName, timeZone='local'){
        this.timeZone = timeZone.toLowerCase();
        this.element = document.getElementById(elementName);
        this.localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.tzOffSet = new Date().getTimezoneOffset();

        setInterval(this.setClockTime.bind(this), 1000);
    }

    /**
     * Converts current time to a string
     * @returns {string}
     */
    getTimeText(){
        let h, m, s;
        let today = new Date();
        switch (this.timeZone) {
            case 'local':
                h = today.getHours();
                m = today.getMinutes();
                s = today.getSeconds();
                break;
            case 'utc':
                h = today.getUTCHours();
                m = today.getUTCMinutes();
                s = today.getUTCSeconds();
                break;
        }

        return h.toString().padStart(2, '0') + ':'
            + h.toString().padStart(2, '0') + ':'
            + s.toString().padStart(2, '0');
    }

    setClockTime(){
        this.element.innerText = this.getTimeText();
    }


}