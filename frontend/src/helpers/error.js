export function format_message(string) {
    if (string) {
        const original_error = JSON.parse(string);

        let new_message = {}
        Object.keys(original_error).forEach(key => {
            new_message[key] = original_error[key][0]
        });
        return new_message
    }
}

export function get_detail_from_error(string) {
    if (string) {
        const original_error = JSON.parse(string);
        return original_error?.detail
    }
}
