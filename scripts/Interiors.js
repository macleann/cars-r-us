import { getOrSetInteriors } from "./database.js"

const interiors = getOrSetInteriors("get")

export const Interiors = () => {
    let html = `<select id="interiors">
                    <option value="0">Select the upholstery...</option>`

    const listItems = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.type}</option>`
    })

    html += listItems.join("")

    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            getOrSetInteriors("set", parseInt(changeEvent.target.value))
        }
    }
)