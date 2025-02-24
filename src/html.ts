/*======================================================================
 * FILE:    html.ts
 * AUTHOR:  Stephen W. Liddle
 * DATE:    Winter 2025
 *
 * DESCRIPTION: HTML helper code.
 */

/*------------------------------------------------------------------
 *                      PUBLIC CONSTANTS
 */
export const TAG_DIV = "div";
export const TAG_HEADER5 = "h5";
export const TAG_HYPERLINK = "a";
export const TAG_I = "i";
export const TAG_LIST_ITEM = "li";
export const TAG_UNORDERED_LIST = "ul";

/*------------------------------------------------------------------
 *                      PUBLIC METHODS
 */
export const decodeEntities = function (text: string): string {
    // Replace all &mdash; entities with the actual mdash character.
    // If we have content in the future with other HTML entities, we
    // would need to update this method.  If this gets a bit bigger,
    // I would build a dictionary with the key/value pairs desired
    // and then iterate over it, e.g. {"&mdash;": "—", "&amp;": "&"}

    return text.replace("&mdash;", "—");
};

export const decorateNode = function (node: HTMLElement, clazz?: string, id?: string): void {
    // Add class and/or id attributes as requested

    if (clazz) {
        for (const word of clazz.split(" ")) {
            node.classList.add(word);
        }
    }

    if (id) {
        node.id = id;
    }
};

export const domNode = function (
    tag: string,
    clazz?: string,
    id?: string,
    textContent?: string
): HTMLElement {
    // Build a DOM node for the given tag type.
    // Note that because "class" is a reserved word, it's conventional
    // to use the word "clazz" as an identifier in C-like languages.

    const node = document.createElement(tag);

    decorateNode(node, clazz, id);

    if (textContent) {
        node.appendChild(document.createTextNode(textContent));
    }

    return node;
};

export const hyperlinkNode = function (
    href: string,
    title?: string,
    clazz?: string,
    id?: string
): HTMLAnchorElement {
    // Build a hyperlink node with the given attributes

    const hyperlink = document.createElement(TAG_HYPERLINK);

    if (href) {
        hyperlink.href = href;
    }

    if (title) {
        hyperlink.title = title;
    }

    decorateNode(hyperlink, clazz, id);

    return hyperlink;
};

export const replaceNodeContent = function (node: Node, newChild: Node): void {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }

    node.appendChild(newChild);
};
