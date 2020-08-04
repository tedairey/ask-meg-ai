//helper functions for askMeg.ai
export function scrollTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

export function formatDate(submitted) {
    if (submitted) {
        let year = submitted.substring(2,4),
            month = submitted.substring(5,7),
            day = submitted.substring(8,10);
        if (day[0] === '0') {
            day = day.slice(1);
        }
        if (month[0] === '0') {
            month = month.substring(1);
        }
        return month + '-' + day + '-' + year;
    }
    else {
        return 'null';
    }
}