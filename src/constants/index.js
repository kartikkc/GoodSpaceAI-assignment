import {
    companies,
    employeeGroups,
    checkList,
    customizedReports,
    employeeExperience,
    easyIntegrations,
    configureableWorkflows,
    scanAnyBill,
    aiBasedConcierge,
    aiAssistedTripPlanning,
    hrmsSystems,
    financeSystems,
    singleSignIn,
    rohitMehra,
    alanTuring,
    markJacob
} from "../assets";

// Companies Logos
export const companyLogos = [companies, companies, companies, companies, companies];

// Testimonials section
export const testimonials = [
    {
        id: "1",
        name1: "rohit",
        name: "Rohit Mehra",
        designation: "CFO, XYZ",
        text: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
        imageUrl:rohitMehra
    },
    {
        id: "2",
        name1: "alan",
        name: "Alan Turing",
        designation: "CFO, XYZ",
        text: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
        imageUrl:alanTuring
    },
    {
        id: "3",
        name1: "mark",
        name: "Mark Jacob",
        designation: "CFO, XYZ",
        text: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
        imageUrl:markJacob
    },
]

// Intergrations section
export const integrations = [
    {
        id: "1",
        title: "HRMS Systems",
        text1: "We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.",
        text2: "We are already deeply integrated with People Strong and others are coming up.",
        iconUrl: hrmsSystems
    },
    {
        id: "2",
        title: "Finance Systems",
        text1: "Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.",
        text2: "Open APIs available to connect.",
        iconUrl: financeSystems
    },
    {
        id: "3",
        title: "Single Sign-on Systems",
        text1: "We can integrate to ensure that your users don't have to log in multiple times into different logins.",
        text2: "SSO is possible with any system that offers it.",
        iconUrl: singleSignIn
    },
]


// Features section
export const features = [
    {
        id : "1",
        name : "Setup Employee Groups",
        text : "Use any parameter to setup distinct employee groups to implement policies",
        iconUrl : employeeGroups,
        comingSoon: false
    },
    {
        id : "2",
        name : "The Definitive Rule Engine",
        text : "Configure ANY policy - and if you can't configure it, we promise to work on it for free",
        iconUrl : checkList,
        comingSoon: false
    },
    {
        id : "3",
        name : "Customized Reports",
        text : "Manage all expenses and travel requests easily. Empower your employees with personalized reports.",
        iconUrl : customizedReports,
        comingSoon: false
    },
    {
        id : "4",
        name : "Superior Employee Experience",
        text : "Manage all expenses and travel requests easily. Empower your employees with personalized reports.",
        iconUrl : employeeExperience,
        comingSoon: false
    },
    {
        id : "5",
        name : "Easy Integrations",
        text : "Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs.",
        iconUrl : easyIntegrations,
        comingSoon: false
    },
    {
        id : "6",
        name : "Configurable Workflows",
        text : "Configure approvals or rejections. Escalations and reports. At will. Setup new groups.",
        iconUrl : configureableWorkflows,
        comingSoon: false
    },
    {
        id : "7",
        name : "Scan any Bill",
        text : "The world's best OCR system backs up this product. All data goes in. 99% success.",
        iconUrl : scanAnyBill,
        comingSoon: false
    },
    {
        id : "8",
        name : "AI-Based Concierge",
        text : "Ask the concierge to change things during your travel - and it will trigger relevant actions 24*7",
        iconUrl : aiBasedConcierge,
        comingSoon: true
    },
    {
        id : "9",
        name : "AI-Assisted Trip Planning",
        text : "Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.",
        iconUrl : aiAssistedTripPlanning,
        comingSoon: true
    }
]