Here's a sample `questions.js` file with 25 questions (20 departmental + 5 EF SET) for each department. I'll show 2 departments fully and others in template format due to space:

```javascript
const questions = {
    // Health Information Management
    "Health Information Management": [
        // Departmental Questions (20)
        {
            question: "What does ICD-10 stand for in health information management?",
            options: [
                "International Classification of Diseases, 10th Edition",
                "Internal Coding Documentation",
                "Insurance Claim Diagnosis System",
                "Integrated Care Delivery System"
            ],
            correct: 0
        },
        {
            question: "Which law regulates patient privacy in healthcare?",
            options: [
                "HIPAA",
                "OSHA",
                "FEMA",
                "CDC"
            ],
            correct: 0
        },
        // Add 18 more departmental questions...
        
        // EF SET Questions (5)
        {
            type: "EFSET",
            question: "Choose the correct sentence:",
            options: [
                "If I would have known, I would come",
                "If I had known, I would have come",
                "If I know, I will come",
                "If I knew, I would come"
            ],
            correct: 1
        }
    ],

    // Computer Science/Engineering
    "Computer Science/Engineering": [
        // Departmental Questions (20)
        {
            question: "What is the time complexity of quicksort in average case?",
            options: [
                "O(n log n)",
                "O(n²)",
                "O(log n)",
                "O(1)"
            ],
            correct: 0
        },
        {
            question: "Which protocol is used for secure web communication?",
            options: [
                "HTTPS",
                "FTP",
                "SMTP",
                "TCP"
            ],
            correct: 0
        },
        // Add 18 more CS questions...
        
        // EF SET Questions (5)
        {
            type: "EFSET",
            question: "Choose the proper conjunction: ______ it was raining, we went out.",
            options: [
                "Although",
                "Despite",
                "However",
                "Therefore"
            ],
            correct: 0
        }
    ],

    // Template for Other Departments
    "Management & Information Technology": [
        {
            question: "What does CRM stand for in management?",
            options: [
                "Customer Relationship Management",
                "Corporate Resource Management",
                "Critical Risk Management",
                "Centralized Reporting Module"
            ],
            correct: 0
        },
        // Add 24 more questions (19 departmental + 5 EF SET)
    ],
    
    "Biotechnology": [
        // 20 biotech + 5 EF SET questions
    ],
    
    // Add all other departments following same pattern
};

// EF SET Common Questions Pool
const EFSET_QUESTIONS = [
    {
        question: "Choose the correct phrasal verb: Please _____ the lights before leaving.",
        options: ["turn off", "take off", "put off", "set off"],
        correct: 0
    },
    {
        question: "Which sentence is in passive voice?",
        options: [
            "The team completed the project",
            "The project was completed by the team",
            "They are completing the project",
            "We will complete the project"
        ],
        correct: 1
    },
    // Add 3 more EF SET questions
];
```

**Structure Explanation:**

1. **Department-Specific Questions:**
   - First 20 questions focus on core departmental subjects
   - Include technical terms, practical scenarios, and theoretical concepts
   - Difficulty progression from basic to advanced

2. **EF SET Questions:**
   - Last 5 questions in each department's array
   - Focus on English grammar, vocabulary, and comprehension
   - Common pool used across all departments

**To Complete Implementation:**

1. **Add Questions for Each Department:**
```javascript
// Nursing Science Example
{
    question: "What is the normal range for adult blood pressure?",
    options: [
        "120/80 mmHg",
        "140/90 mmHg",
        "100/60 mmHg",
        "130/70 mmHg"
    ],
    correct: 0
},

// Banking and Finance
{
    question: "What does ROI stand for in financial terms?",
    options: [
        "Return on Investment",
        "Rate of Interest",
        "Risk of Inflation",
        "Regulatory Oversight Index"
    ],
    correct: 0
},
```

2. **Question Types:**
   - Multiple choice (single answer)
   - True/False
   - Matching columns
   - Fill-in-the-blank (with options)
   -
