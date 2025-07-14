export function kebabCaseToTitleCase(colorName) {
    const colorWithSpaces = colorName.replaceAll("-", " ");
    const colorWithCaps = colorWithSpaces.replace(/\b\w/g, (match) => match.toUpperCase());

    return colorWithCaps;
}