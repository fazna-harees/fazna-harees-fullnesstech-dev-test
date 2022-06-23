export const menu = [
    {
        name: "All",
        slug: ""
    },
    {
        name: "Refinance",
        slug: "refinance"
    },
    {
        name: "Fixed Rate",
        slug: "fixedrate"
    },
    {
        name: "First Home Buyer",
        slug: "firsthome"
    },
    {
        name: "Investor",
        slug: "investor"
    },
    {
        name: "Next home buyer",
        slug: "nexthome"
    },

]

export const categoryToQuery = {
    "refinance":{
        key:"isRefinanceAvailable",
        value:true
    },
    "nexthome":{
        key:"firstHomeBuyers",
        value:false
    },
    "firsthome":{
        key:"firstHomeBuyers",
        value:true
    },
    "investor":{
        key:"investmentPurpose",
        value:true
    }
}