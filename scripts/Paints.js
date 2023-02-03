import { getOrSetPaintColors } from "./database.js"

const paintColors = getOrSetPaintColors("get")

export const PaintColors = () => {
    let html = `<select id="paints"><option value="0">Select the paint color...</option>`

    const listItems = paintColors.map((paintColor) => {
        return `<option value="${paintColor.id}">${paintColor.color}</option>`
    })

    html += listItems.join("")

    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            getOrSetPaintColors("set", parseInt(changeEvent.target.value))
        }
    }
)