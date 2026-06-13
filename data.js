// Professional Training & Lectures Data Configuration
const staticTrainingData = [
    {
        // 1. Type Filter
        type: "Achievement", 
        
        // 2. Category Filter
        category: "AI and Digital Transformation in Aviation Industry", 
        
        // 3. Topic / Title
        title: "1. Applications of AI, Robotics and Disruptive Technologies in Aviation Industry", 
        
        // 4. Location / Provider
        provider: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology", 
        
        // 5. Date
        date: "Mar 6, 2024", 
        
        // 6. Simple Short Folder Name inside "training picture/"
        folderName: "ai-robotics-2024", 
        
        // List of image filenames inside that folder. 
        // AGAR IMAGES NAHI HAIN TOH IS ARRAY KO BILKUL EMPTY [] RAKHEIN. 
        // Khali [] rakhne se woh black boxes/rectangles kabhi nahi aayenge!
        images: ["image1.jpg", "image2.jpg"],

        // --- FIELDS CONTROL SWITCHES ---
        // true = Dikhayega, false = Chupa dega (Hide)
        showFields: {
            type: true,        // 1. Type Filter
            category: true,    // 2. Category Filter
            title: true,       // 3. Topic
            provider: true,    // 4. Location
            date: true         // 5. Date
        }
    },
    {
        type: "Certificate",
        category: "Aviation Policy & Governance",
        title: "2. Public Policy Frameworks in Modern Civil Aviation",
        provider: "National University Policy Forums",
        date: "Jul 18, 2023",
        folderName: "policy-2023",
        images: ["cert1.jpg"], // Agar image lagani hai

        // Jaise aapne kaha: Is certificate mein mujhe sirf 6 (images), 5 (Date), 4 (Location) aur 1 (Type) dikhana hai. Topic aur Category hide karni hai:
        showFields: {
            type: true,        // Show Type (1)
            category: false,   // Hide Category (2)
            title: false,      // Hide Topic (3)
            provider: true,    // Show Location (4)
            date: true         // Show Date (5)
        }
    },
    {
        type: "Seminar",
        category: "Airport Management & Infrastructure",
        title: "3. Strategic Airport Infrastructure and Operational Resilience",
        provider: "Civil Aviation Training Institute",
        date: "Nov 12, 2023",
        folderName: "resilience-2023",
        images: [], // Koi image nahi hai, toh empty box nahi banega!
        showFields: {
            type: true,
            category: true,
            title: true,
            provider: true,
            date: true
        }
    }
];
