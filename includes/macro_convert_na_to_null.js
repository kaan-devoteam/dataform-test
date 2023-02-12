function macro_convert_na_to_null(field) {
    return `
    CASE ${field}
        WHEN "NA" THEN NULL
        ELSE ${field}
        END AS ${field}
    `;
}
module.exports = { macro_convert_na_to_null };