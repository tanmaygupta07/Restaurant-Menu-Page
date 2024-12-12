const menu = [
    {
        id: 1,
        title: "Onion Pakoda",
        category: "APPETIZERS",
        price: 49,
        img:
            "images/Onion-Pakoda.jpg",
        desc: `Deep Fried juliennes of onion mixed with besan flour & indian house spices.`,
    },
    {
        id: 2,
        title: "Mixed Veg Pakoda",
        category: "APPETIZERS",
        price: 59,
        img:
            "images/Mix-Veg-Pakoda.jpg",
        desc: `Deep Fried juliennes of vegetables mixed with besan flour & indian house spices.`,
    },
    {
        id: 3,
        title: "Bonda",
        category: "APPETIZERS",
        price: 69,
        img:
            "images/Bonda.jpeg",
        desc: `Deep fried dumpling made with lentil batter & peppercorns.`,
    },
    {
        id: 4,
        title: "Medhu Vadai",
        category: "APPETIZERS",
        price: 79,
        img:
            "images/Medhu-Vadai.jpeg",
        desc: `Crispy deep fried South Indian lentil doughnut served with varieties of chutney and sambar`,
    },
    {
        id: 5,
        title: "Sambar Vadai",
        category: "APPETIZERS",
        price: 89,
        img:
            "images/Sambar-Vadai.jpeg",
        desc: `South Indian lentil doughnut soaked in sambar and garnished with chopped onions & cilantro.`,
    },
    {
        id: 6,
        title: "French Fries",
        category: "APPETIZERS",
        price: 99,
        img:
            "images/French-Fries.jpeg",
        desc: `Yummy deep fried potato fingers tossed with salt and pepper to taste.`,
    },
    {
        id: 7,
        title: "Ghee Pongal",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 109,
        img:
            "images/Ghee-Pongal.webp",
        desc: `South Indian specialty made from rice & lentil cooked to perfection with peppercorns, nuts & house spices seasoned with ghee - served with varieties of chutney & sambar.`,
    },
    {
        id: 8,
        title: "Rava Kichadi",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 119,
        img:
            "images/Rava-Kichadi.jpg",
        desc: `A healthy breakfast option made with semolina and vegetables lightly tempered with spices cooked to perfection.`,
    },
    {
        id: 9,
        title: "Parotta Kurma",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 129,
        img:
            "images/Parotta-Kurma.avif",
        desc: `South Indian layered flat bread served with vegetable kurma & raitha.`,
    },
    {
        id: 10,
        title: "Chapati Kurma",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 119,
        img:
            "images/Chapati-Kurma.jpeg",
        desc: `South Asian unleavened flat wheat bread served with vegetable kurma & raitha.`,
    },
    {
        id: 11,
        title: "Poori Masala",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 60,
        img:
            "images/Poori-Masala.JPG",
        desc: `Fluffy deep fried Indian bread served with seasoned potato masala.`,
    },
    {
        id: 12,
        title: "Idli",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 40,
        img:
            "images/Idli.png",
        desc: `Most popular South-Indian steamed rice & lentil cakes served with varieties of chutney, sambar & milagaipodi.`,
    },
    {
        id: 13,
        title: "Rava Idli",
        category: "SOUTH-INDIAN-FAVOURITES",
        price: 50,
        img:
            "images/Rava-Idli.jpeg",
        desc: `Popular idli with a difference - made with semolina, nuts, and traditional spices served with varieties of chutney, sambar & milagaipodi.`,
    },
    {
        id: 14,
        title: "South Indian Thali",
        category: "THALI'S",
        price: 180,
        img:
            "images/South-Indian-Thali.webp",
        desc: `Rice of the day, Steamed Rice, Sambar, Rasam, Kootu, Poriyal, Kaara Kozhambu, Yoghurt, Appalam, Pickle & Sweet.`,
    },
    {
        id: 15,
        title: "Appam",
        category: "HOUSE-SPECIALS",
        price: 30,
        img:
            "images/Appam.avif",
        desc: `South Indian delight made with fermented rice batter & coconut milk - served with vegetable kurma & coconut milk.`,
    },
    {
        id: 16,
        title: "Chole Bhature",
        category: "HOUSE-SPECIALS",
        price: 80,
        img:
            "images/Chole-Bhature.jpg",
        desc: `Big fluffy deep fried Indian bread served with Punjabi style spicy chickpeas masala.`,
    },
    {
        id: 17,
        title: "Chilli Parotta",
        category: "HOUSE-SPECIALS",
        price: 70,
        img:
            "images/Chilli-Parotta.jpg",
        desc: `South Indian street delicacy made with diced layered flat bread sautéed with onions, bell peppers & chili sauce - served with vegetable kurma & raitha.`,
    },
    {
        id: 18,
        title: "Samosa",
        category: "CHAATS",
        price: 15,
        img:
            "images/Samosa.webp",
        desc: `Deep-fried snack stuffed with seasoned potatoes, peas, and traditional spices.`,
    },
    {
        id: 19,
        title: "Bhel Puri",
        category: "CHAATS",
        price: 20,
        img:
            "images/Bhel-Puri.png",
        desc: `Puffed rice mixed with sev, crisp puris, roasted peanuts, onions, and spiced with traditional chutneys..`,
    },
    {
        id: 20,
        title: "Paani Puri",
        category: "CHAATS",
        price: 20,
        img:
            "images/Paani-Puri.jpg",
        desc: `Mini puris filled with seasoned mashed potatoes, tamarind chutney, and spicy masala water.`,
    },
    {
        id: 21,
        title: "Pav Bhaji",
        category: "CHAATS",
        price: 40,
        img:
            "images/Pav-Bhaji.webp",
        desc: `Mixed vegetables cooked in a special spice blend and served with bread shallow fried in butter.`,
    },
    {
        id: 22,
        title: "Dahi Puri",
        category: "CHAATS",
        price: 20,
        img:
            "images/Dahi-Puri.jpg",
        desc: `Mini puris filled with seasoned mashed potatoes, tamarind chutney, and topped with yogurt.`,
    },
    {
        id: 23,
        title: "Rasamalai",
        category: "DESSERTS",
        price: 39,
        img:
            "images/Rasamalai.jpeg",
        desc: `Rich Bengali dessert made from spongy cottage cheese and sweetened milk.`,
    },
    {
        id: 24,
        title: "Gulab Jamun",
        category: "DESSERTS",
        price: 15,
        img:
            "images/Gulab-Jamun.jpeg",
        desc: `Deep-fried sweet dumplings stewed in sugar syrup.`,
    },
    {
        id: 25,
        title: "Kulfi",
        category: "DESSERTS",
        price: 15,
        img:
            "images/Kulfi.jpeg",
        desc: `Frozen Indian dessert made from thickened milk and nuts (choose from Malai, Pistha, or Mango).`,
    },
    {
        id: 26,
        title: "Ice Cream",
        category: "DESSERTS",
        price: 30,
        img:
            "images/Ice-Cream.jpg",
        desc: `Choose from Vanilla, Chocolate, or Strawberry.`,
    },
    {
        id: 27,
        title: "Masala Tea",
        category: "BEVERAGES",
        price: 10,
        img:
            "images/Masala-Tea.jpeg",
        desc: `Aromatic Indian tea brewed with black tea, milk, and a blend of spices like cardamom, cloves, and ginger.`,
    },
    {
        id: 28,
        title: "Mango Lassi",
        category: "BEVERAGES",
        price: 60,
        img:
            "images/Mango-Lassi.jpg",
        desc: `Refreshing yogurt-based drink blended with ripe mango pulp and a touch of sugar.`,
    },
    {
        id: 29,
        title: "Soda",
        category: "BEVERAGES",
        price: 40,
        img:
            "images/Soda.jpg",
        desc: `Choose from Coke, Fanta, Sprite, or Diet Coke.`,
    },
    {
        id: 30,
        title: "Butter Milk",
        category: "BEVERAGES",
        price: 40,
        img:
            "images/Butter-Milk.jpeg",
        desc: `Light and refreshing drink made with churned yogurt and sweetened with sugar.`,
    }
];

export default menu;