import { getOrSetPaintColors, getOrSetInteriors, getOrSetTechnologies, getOrSetWheels, getOrSetBodies, getOrders } from "./database.js"

const findHelper = (arrayOfObjects, orderObjectId) => {
    return arrayOfObjects.find(
        (object) => {
            return object.id === orderObjectId
        }
    )
}

const buildCustomOrder = (order, timestamp) => {
    const paintColors = getOrSetPaintColors("get")
    const interiors = getOrSetInteriors("get")
    const technologies = getOrSetTechnologies("get")
    const wheels = getOrSetWheels("get")
    const bodies = getOrSetBodies("get")

    const foundPaint = findHelper(paintColors, order.paintId)
    const foundInterior = findHelper(interiors, order.interiorId)
    const foundTech = findHelper(technologies, order.techId)
    const foundWheel = findHelper(wheels, order.wheelId)
    const foundBody = findHelper(bodies, order.bodyId)

    const totalCost = (foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price) * foundBody.priceMult

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    const orderTime = new Date(timestamp)

    return `<li>Order #${order.id} costs ${costString} and was placed on 
    ${orderTime.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"})}
    at ${orderTime.toLocaleString("en-US", {hour: "numeric", minute: "numeric"})}</li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = /* "<p>orders go here</p>" */"<ul>"

    const listItems = orders.map(order => {return buildCustomOrder(order, order.timestamp)})

    html += listItems.join("")
    html += "</ul>"

    return html
}