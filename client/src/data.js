import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/C16zCtm4/12.jpg",
            "https://i.postimg.cc/7Yzf7K7g/13.jpg",
            "https://i.postimg.cc/Bvp8btFk/2.jpg",
            "https://i.postimg.cc/3Nd0P7d6/1.jpg",
            "https://i.postimg.cc/zGmHPs5t/8.jpg",
            "https://i.postimg.cc/XqmBWh5v/7.jpg",
            "https://i.postimg.cc/W1MqR512/9.jpg"
        ],
        title:"Adventure Waterpark Desaru Coast",
        desc:"Explore the over 20 wet and dry slides and one of the largest wave pools in Southeast Asia with unlimited access to all rides.",
        type:"bookTypeOne",
        pricing: {
            malaysian:{
                adult:85,
                child:67,
                senior:67,
            },
            nonMalaysian:{
                adult:135,
                child:115,
                senior:115,
            }
        },

    },
    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/XqmBWh5v/7.jpg",
        title:"Kraken's Revenge",
        desc:"Experience the ultimate adventure with a hybrid roller coaster and splashing flume ride that elevates thrill seekers 30 meters into the air. Brace yourself as the ride spins through a complete 360º horizontal loop, delivering an exhilarating sensation. The excitement continues with a daring 27-meter plunge, culminating in a splashdown amidst the shipwrecked Kraken sea monster in."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/xjhXcwkf/6.jpg",
        title:"Swinging Ship",
        desc:"The Swinging Ship is adored by everyone, offering mild excitement for youngsters and enjoyable thrills for all age groups. This replica pirate ship sways up to 180 degrees in both directions."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/GtWtVD08/4.png",
        title:"The Tempest",
        desc:"Feel the excitement as you navigate through two high-energy funnels and take on a sudden 24-foot drop, allowing for thrilling high-banking swings. Don't miss the 55-foot tube slide featuring a funnel in the middle for an added twist of "
    },   
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:" Feel the ultimate surge of adrenaline as you navigate exciting water slides, crafting unforgettable moments filled with excitement and pure exhilaration.",
        image: "https://i.postimg.cc/kG6DTcHP/11.jpg"
    },
    {
        id: uuidv4(),
        desc:"Drift along the meandering river, embraced by verdant scenery and peaceful beauty, providing a tranquil and revitalizing journey.",
        image: "https://i.postimg.cc/Bvp8btFk/2.jpg"
    },
    {
        id: uuidv4(),
        desc:"Enjoy a fantastic day at the beach, basking in the sun on sandy shores, constructing sandcastles, and indulging in a variety of tasty snacks and refreshing beverages.",
        image: "https://i.postimg.cc/pdRhPKmK/3.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "10 am to 6pm, Everyday", 
            "Closed on Tuesday EXCEPT during Public holidays and school holidays."
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 13 to 59 years old.",
            "Child age is  3 to 12 years old.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["You may use the tickets within 30 days from purchased date"]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside Adventure Waterpark Desaru Coast ?",
        ans:"No. Food and drinks is prohibited inside."
    },
    {
        id: uuidv4(),
        ques:"How long can I stay inside Adventure Waterpark Desaru Coast ?",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:"When does Adventure Waterpark Desaru Coast Coast close?",
        ans:"Adventure Waterpark Desaru Coast is close every Tuesday except Public Holiday and School Holiday."
    },
    {
        id: uuidv4(),
        ques:"Does my ticket includes Locker and Tubes?",
        ans:"No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]