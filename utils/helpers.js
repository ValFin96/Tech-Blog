module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        // return toLocaleDateString(date);
        // return `${date.getMonth() + 1} /${date.getDate()}/${date.getFullYear()}`
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
};
