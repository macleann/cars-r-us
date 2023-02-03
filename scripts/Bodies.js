import { getOrSetBodies } from "./database.js"

const bodies = getOrSetBodies("get")

export const Bodies = () => {
    return `
    <select id="bodies">
        <option value="0">Select the wheels type...</option>
        ${bodies.map(
            (body) => {
                return `<option value="${body.id}">${body.type}</option>`
            }
        ).join("")}
    </select>`
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "bodies") {
            getOrSetBodies("set", parseInt(event.target.value))
        }
    }
)