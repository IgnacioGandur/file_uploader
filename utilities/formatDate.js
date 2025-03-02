import { format } from "date-fns";

function formatDate(date) {
    return format(date, "EEEE do, LLLL 'of' yyyy 'at' KK:mm b.");
}

export default formatDate;
