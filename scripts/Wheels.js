import { getOrSetWheels } from "./database.js"

const wheels = getOrSetWheels("get")

export const Wheels = () => {
    let html = `<select id="wheels"><option value="0">Select the wheels type...</option>`

    const listItems = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += listItems.join("")

    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            getOrSetWheels("set", parseInt(changeEvent.target.value))
        }
    }
)