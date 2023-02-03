import { PaintColors } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Bodies } from "./Bodies.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

export const CarsRUs = () => {
    return `
    <h1>Cars-R-Us</h1>

    <article class="choices">
        <section class="choices--paints options">
            <h2>Paint Colors</h2>
            ${PaintColors()}
        </section>
        <section class="choices--technologies options">
            <h2>Dashboard</h2>
            ${Technologies()}
        </section>
        <section class="choices--interiors options">
            <h2>Interior</h2>
            ${Interiors()}
        </section>
        <section class="choices--wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
        <section class="choices--bodies options">
            <h2>Bodies</h2>
            ${Bodies()}
    </article>
    <article>
        <button id="orderButton">BUILD! THAT! CAR!</button>
    </article>
    <article class="customOrders">
        <h2>Car orders</h2>
        ${Orders()}
    </article>
    `
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)