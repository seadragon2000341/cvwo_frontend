export function filterAction(filter) {
  if (filter == "name_asc") {
    return { type: "ALPHABET_ASC" };
  }
  if (filter == "name_desc") {
    return { type: "ALPHABET_DESC" };
  }
  if (filter == "date_asc") {
    return { type: "DATE_ASC" };
  }
  if (filter == "date_desc") {
    return { type: "DATE_DESC" };
  }
}
