import { getOrSetTechnologies } from "./database.js"

const technologies = getOrSetTechnologies("get")

export const Technologies = () => {
    let html = `<select id="technologies">
                    <option value="0">Select the dashboard package...</option>`

    const listItems = technologies.map(technology => {
        return `<option value="${technology.id}">${technology.type}</option>`
    })

    html += listItems.join(``)

    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            getOrSetTechnologies("set", parseInt(changeEvent.target.value))
        }
    }
)