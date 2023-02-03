const database = {
    paintColors: [{
        id: 1,
        color: "Silver",
        price: 1000
    },{
        id: 2,
        color: "Midnight Blue",
        price: 1200
    },{
        id: 3,
        color: "Firebrick Red",
        price: 1200
    },{
        id: 4,
        color: "Spring Green",
        price: 1400
    }],
    interiors: [{
        id: 1,
        type: "Beige Fabric",
        price: 1000
    },{
        id: 2,
        type: "Charcoal Fabric",
        price: 1100
    },{
        id: 3,
        type: "White Leather",
        price: 1600
    },{
        id: 4,
        type: "Black Leather",
        price: 1600
    }],
    technologies: [{
        id: 1,
        type: "Basic Package",
        price: 1200
    },{
        id: 2,
        type: "Navigation Package",
        price: 1300
    },{
        id: 3,
        type: "Visibility Package",
        price: 1400
    },{
        id: 4,
        type: "Ultra Package",
        price: 1500
    }],
    wheels: [{
        id: 1,
        type: "17-inch Pair Radial",
        price: 800
    },{
        id: 2,
        type: "17-inch Pair Radial Black",
        price: 1000
    },{
        id: 3,
        type: "18-inch Pair Spoke Silver",
        price: 900
    },{
        id: 4,
        type: "18-inch Pair Spoke Black",
        price: 1100
    }],
    bodies: [
        { id: 1, type: "Car", priceMult: 1 },
        { id: 2, type: "SUV", priceMult: 1.5 },
        { id: 3, type: "Truck", priceMult: 2.25}
    ],
    customOrders: {},
    placedOrders: []
}

export const getOrSetPaintColors = (getOrSet, id) => {
    if (getOrSet === "get") {
        return database.paintColors.map(paintColor => ({...paintColor}))
    } else if (getOrSet === "set") {
        database.customOrders.paintId = id
    } else {
        return console.log(`please provide argument of "get" or "set"`)
    }
}

export const getOrSetInteriors = (getOrSet, id) => {
    if (getOrSet === "get") {
        return database.interiors.map(interior => ({...interior}))
    } else if (getOrSet === "set") {
        database.customOrders.interiorId = id
    } else {
        return console.log(`please provide argument of "get" or "set"`)
    }
}

export const getOrSetTechnologies = (getOrSet, id) => {
    if (getOrSet === "get") {
        return database.technologies.map(technology => ({...technology}))
    } else if (getOrSet === "set") {
        database.customOrders.techId = id
    } else {
        return console.log(`please provide argument of "get" or "set"`)
    }
}

export const getOrSetWheels = (getOrSet, id) => {
    if (getOrSet === "get") {
        return database.wheels.map(wheel => ({...wheel}))
    } else if (getOrSet === "set") {
        database.customOrders.wheelId = id
    } else {
        return console.log(`please provide argument of "get" or "set"`)
    }
}

export const getOrSetBodies = (getOrSet, id) => {
    if (getOrSet === "get") {
        return database.bodies.map(body => ({...body}))
    } else if (getOrSet === "set") {
        database.customOrders.bodyId = id
    } else {
        return console.log(`please provide argument of "get" or "set"`)
    }
}

export const getOrders = () => {
    return database.placedOrders.map(placedOrder => ({...placedOrder}))
}

export const addCustomOrder = () => {
    const newOrder = {...database.customOrders}
    //checks to see if placedOrders is empty
    if (database.placedOrders.length === 0) {
        newOrder.id = 1
        } else { //otherwise it gets the last entry's index position and sets new order's id to the last entry's index position + 1
        const lastIndex = database.placedOrders.length - 1
        newOrder.id = database.placedOrders[lastIndex].id + 1
        }
    newOrder.timestamp = Date.now()
    
    database.placedOrders.push(newOrder)
    database.customOrders = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}