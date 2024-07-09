export const allNavItems = {
    ADMIN: [
        {
            href: "/admin/roles",
            icon: <UsersIcon />,
            text: "Role Create",
        },
        {
            href: "/admin/floors",
            icon: <BoxIcon />,
            text: "Floor Create"
        },
    ],
    PROCURER: [
        {
            href: "/procurer/office-supply",
            icon: null,
            text: "Office Supply"
        },
        {
            href: "/procurer/it-supply",
            icon: null,
            text: "IT Supply"
        }
    ],
    FACILITIES_LEAD: [
        {
            href: "/facilities-lead",
            icon: null,
            text: ""
        },
    ],
    OFFICE_SUPPLY_STORE_KEEPER: [
        {
            href: "/store-keeper/office-supply/item",
            icon: null,
            text: "Office Supply",
        },
        {
            href: "/store-keeper/suppliers",
            icon: null,
            text: "Suppliers"
        },
        {
            href: "/store-keeper/history/restock",
            icon: null,
            text: "History"
        }
    ]
};
