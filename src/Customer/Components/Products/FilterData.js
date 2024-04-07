export const filters = [
    {
        id: "color",
        name: "Color",
        options:[
            {value: "red", label: "Red"},
            {value: "blue", label: "Blue"},
            {value: "green", label: "Green"},
            {value: "yellow", label: "Yellow"},
            {value: "black", label: "Black"},
            {value: "white", label: "White"},
            {value: "grey", label: "Grey"},

        ]
    },
    {
        id:"size",
        name: "Size",
        options:[
            {value: "s", label: "S"},
            {value: "m", label: "M"},
            {value: "l", label: "L"},
            {value: "xl", label: "XL"},
            
        ]
    }
]

export const singleFiler=[
    {
        id:"price",
        name: "Price",
        options:[
            {value: "0-500", label: "0-500"},
            {value: "500-1000", label: "500-1000"},
            {value: "1000-2000", label: "1000-2000"},
            {value: "2000-5000", label: "2000-5000"},
            {value: "5000-10000", label: "5000-10000"},
            
        ]
    },
    {
        id:"discount",
        name: "Discount",
        options:[
           
            {value: "10-20", label: "10-20%"},
            {value: "20-30", label: "20-30%"},
            {value: "30-40", label: "30-40%"},
            {value: "40-50", label: "40-50%"},
            {value: "50-60", label: "50-60%"},
            {value: "60-70", label: "60-70%"},
            {value: "70-80", label: "70-80%"},
        ]
    }
]