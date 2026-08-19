const mockResponses = [
  {
    content:
      "Based on the uploaded cardiology guidelines, ACE inhibitors are recommended as first-line therapy for patients with heart failure with reduced ejection fraction (HFrEF). The 2023 ACC/AHA guidelines recommend initiating ACE inhibitor therapy at low doses and titrating to the maximum tolerated dose. Key contraindications include a history of angioedema, bilateral renal artery stenosis, and pregnancy. Common side effects include dry cough (occurring in approximately 10-15% of patients), hyperkalemia, and acute kidney injury. Monitoring should include serum creatinine and potassium levels within 1-2 weeks of initiation.",
    answerCard: {
      status: "Answered",
      evidenceQuality: "High",
      evidence: [
        {
          document: "ACC_AHA_HF_Guidelines_2023.pdf",
          section: "Pharmacotherapy — RAAS Inhibition",
          page: 42,
          chunkId: "chunk_042_007",
          score: 0.94,
        },
        {
          document: "ESC_HF_Guidelines_2023.pdf",
          section: "Treatment Recommendations",
          page: 31,
          chunkId: "chunk_031_012",
          score: 0.91,
        },
        {
          document: "Braunwald_Heart_Disease_12e.pdf",
          section: "Chapter 25: Heart Failure",
          page: 587,
          chunkId: "chunk_587_003",
          score: 0.87,
        },
      ],
      suggestedAction:
        "Review patient's current medication list for potential drug interactions with ACE inhibitors, particularly NSAIDs and potassium-sparing diuretics.",
      error: null,
    },
  },
  {
    content:
      "The oncology literature indicates that pembrolizumab (Keytruda) combined with platinum-based chemotherapy is the current standard of care for first-line treatment of metastatic non-small cell lung cancer (NSCLC) with PD-L1 expression ≥1%. The KEYNOTE-189 trial demonstrated a median overall survival of 22.0 months compared to 10.6 months with chemotherapy alone. Treatment should continue for up to 35 cycles or until disease progression or unacceptable toxicity. Immune-related adverse events including pneumonitis, colitis, and endocrinopathies require vigilant monitoring.",
    answerCard: {
      status: "Answered",
      evidenceQuality: "Medium",
      evidence: [
        {
          document: "NCCN_NSCLC_Guidelines_v3_2024.pdf",
          section: "Systemic Therapy — First Line",
          page: 18,
          chunkId: "chunk_018_005",
          score: 0.89,
        },
        {
          document: "KEYNOTE189_Lancet_2023.pdf",
          section: "Results — Overall Survival",
          page: 7,
          chunkId: "chunk_007_002",
          score: 0.85,
        },
      ],
      suggestedAction: null,
      error: null,
    },
  },
  {
    content:
      "I was unable to find sufficient evidence in the uploaded documents to answer your question about rare drug interactions with immunosuppressants. The available literature does not cover this specific topic in adequate detail.",
    answerCard: {
      status: "No Answer",
      evidenceQuality: "Low",
      evidence: [],
      suggestedAction: null,
      error:
        "Insufficient evidence found in the uploaded documents. Consider uploading additional relevant literature or refining your query.",
    },
  },
];

let responseIndex = 0;

export function getMockResponse() {
  const response = mockResponses[responseIndex % mockResponses.length];
  responseIndex++;
  return response;
}

export function resetMockIndex() {
  responseIndex = 0;
}
