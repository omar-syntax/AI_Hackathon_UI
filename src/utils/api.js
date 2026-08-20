const MOCK_RESPONSES = [
  {
    answer:
      "According to the NICE NG217 guideline, ethosuximide is the recommended first-line treatment for absence seizures in children and young people. Valproate may be considered as an alternative if ethosuximide is ineffective or not tolerated. Treatment should be initiated under specialist supervision, with regular monitoring of seizure control and potential side effects.",
    retrieved_chunks: [
      {
        chunk_id: 104,
        source: "NG217_Epilepsies.pdf",
        section: "1.4 Pharmacological treatment",
        page: 24,
        page_label: "24",
        reranker_rank: 1,
        reranker_score: 0.94,
        chunk_text:
          "For children and young people with absence seizures, ethosuximide is recommended as first-line pharmacological treatment. Valproate should be considered as an alternative if ethosuximide is ineffective or not tolerated.",
      },
      {
        chunk_id: 105,
        source: "NG217_Epilepsies.pdf",
        section: "1.4 Pharmacological treatment",
        page: 25,
        page_label: "25",
        reranker_rank: 2,
        reranker_score: 0.91,
        chunk_text:
          "When prescribing antiepileptic drugs for absence seizures, consider the child's age, comorbidities, and potential drug interactions. Lamotrigine may be less effective for absence seizures compared to ethosuximide.",
      },
      {
        chunk_id: 108,
        source: "NG217_Epilepsies.pdf",
        section: "1.5 Monitoring and review",
        page: 28,
        page_label: "28",
        reranker_rank: 3,
        reranker_score: 0.87,
        chunk_text:
          "Regular review of antiepileptic drug treatment should include assessment of seizure control, side effects, and adherence. Blood drug levels may be useful for some medications but are not routinely recommended for ethosuximide.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about pharmacological treatment",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.92 },
  },
  {
    answer:
      "The NICE NG217 guideline defines epilepsy as a disorder of the brain characterised by an enduring predisposition to generate epileptic seizures. Diagnosis should be made by a clinician with appropriate expertise, considering the clinical history, witnessed descriptions, and investigation results. A single unprovoked seizure does not confirm epilepsy unless there is a high recurrence risk.",
    retrieved_chunks: [
      {
        chunk_id: 12,
        source: "NG217_Epilepsies.pdf",
        section: "1.1 Definition and diagnosis",
        page: 8,
        page_label: "8",
        reranker_rank: 1,
        reranker_score: 0.96,
        chunk_text:
          "Epilepsy is defined as a disorder of the brain characterised by an enduring predisposition to generate epileptic seizures. Diagnosis requires clinical assessment by a specialist.",
      },
      {
        chunk_id: 13,
        source: "NG217_Epilepsies.pdf",
        section: "1.1 Definition and diagnosis",
        page: 9,
        page_label: "9",
        reranker_rank: 2,
        reranker_score: 0.93,
        chunk_text:
          "Diagnosis of epilepsy should be based on a clinical history of seizures, ideally with a witnessed description. Investigations such as EEG and MRI support diagnosis but are not required in all cases.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about diagnosis criteria",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.95 },
  },
  {
    answer:
      "For status epilepticus, the NICE NG217 guideline recommends a stepped approach. First-line treatment is benzodiazepines ( Buccolam or diazepam rectal solution). If seizures continue after 10 minutes, a second dose of benzodiazepine should be given. If seizures persist beyond 20 minutes, the patient should be transferred to an emergency department for IV lorazepam or specialist intervention.",
    retrieved_chunks: [
      {
        chunk_id: 220,
        source: "NG217_Epilepsies.pdf",
        section: "2.3 Emergency treatment of seizures",
        page: 45,
        page_label: "45",
        reranker_rank: 1,
        reranker_score: 0.97,
        chunk_text:
          "For convulsive status epilepticus in children and young people: give buccal midazolam or rectal diazepam. If seizures continue after 10 minutes, repeat the benzodiazepine dose once.",
      },
      {
        chunk_id: 221,
        source: "NG217_Epilepsies.pdf",
        section: "2.3 Emergency treatment of seizures",
        page: 46,
        page_label: "46",
        reranker_rank: 2,
        reranker_score: 0.94,
        chunk_text:
          "If convulsive status epilepticus continues despite two doses of benzodiazepine (20 minutes from onset), call emergency services and initiate IV lorazepam in hospital.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about emergency treatment",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.96 },
  },
  {
    answer:
      "Lamotrigine should be initiated at a low dose and titrated slowly to minimise the risk of serious skin reactions. The recommended starting dose is 12.5 mg once daily for the first 2 weeks, increased to 25 mg once daily for the next 2 weeks. Further increases should be made in increments of 25-50 mg at intervals of no less than 2 weeks, depending on response and tolerability.",
    retrieved_chunks: [
      {
        chunk_id: 140,
        source: "NG217_Epilepsies.pdf",
        section: "1.4 Pharmacological treatment",
        page: 30,
        page_label: "30",
        reranker_rank: 1,
        reranker_score: 0.92,
        chunk_text:
          "When initiating lamotrigine, start at a low dose and titrate slowly over several weeks to reduce the risk of skin reactions. The initial dose should be 12.5 mg daily for 2 weeks.",
      },
      {
        chunk_id: 141,
        source: "NG217_Epilepsies.pdf",
        section: "1.4 Pharmacological treatment",
        page: 31,
        page_label: "31",
        reranker_rank: 2,
        reranker_score: 0.89,
        chunk_text:
          "Lamotrigine dose adjustments should be made no more frequently than every 2 weeks. The target maintenance dose depends on the seizure type and concomitant medications.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about drug titration",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.90 },
  },
  {
    answer:
      "The NICE NG217 guideline states that people with well-controlled epilepsy (seizure-free for at least 12 months) may be able to drive, subject to regulations set by the DVLA. In the UK, Group 1 licence holders must be seizure-free for 12 months off medication or seizures only during sleep. Group 2 licence holders must be seizure-free for 10 years off medication, with no relevant neurological disability.",
    retrieved_chunks: [
      {
        chunk_id: 310,
        source: "NG217_Epilepsies.pdf",
        section: "3.2 Living with epilepsy",
        page: 78,
        page_label: "78",
        reranker_rank: 1,
        reranker_score: 0.95,
        chunk_text:
          "Driving regulations for people with epilepsy are set by the DVLA. Group 1 licence holders must report seizures and meet seizure-free periods before driving.",
      },
      {
        chunk_id: 311,
        source: "NG217_Epilepsies.pdf",
        section: "3.2 Living with epilepsy",
        page: 79,
        page_label: "79",
        reranker_rank: 2,
        reranker_score: 0.91,
        chunk_text:
          "For Group 2 (commercial) driving, the seizure-free requirement is more stringent: 10 years off antiepileptic medication with no relevant neurological comorbidity.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about driving regulations",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.93 },
  },
  {
    answer:
      "The guideline recommends that women of childbearing potential with epilepsy should receive pre-conception counselling. Valproate should be avoided in women of childbearing potential unless there is no alternative, due to the high risk of teratogenicity and developmental effects. If valproate is used, the lowest effective dose should be prescribed, ideally below 500 mg daily.",
    retrieved_chunks: [
      {
        chunk_id: 350,
        source: "NG217_Epilepsies.pdf",
        section: "4.1 Women and epilepsy",
        page: 95,
        page_label: "95",
        reranker_rank: 1,
        reranker_score: 0.97,
        chunk_text:
          "Valproate is associated with a high risk of teratogenicity and neurodevelopmental effects. It should not be used in women of childbearing potential unless alternatives are ineffective or not tolerated.",
      },
      {
        chunk_id: 351,
        source: "NG217_Epilepsies.pdf",
        section: "4.1 Women and epilepsy",
        page: 96,
        page_label: "96",
        reranker_rank: 2,
        reranker_score: 0.93,
        chunk_text:
          "Pre-conception counselling should be offered to all women with epilepsy, discussing seizure medication risks, folic acid supplementation, and the importance of seizure control during pregnancy.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about pregnancy and medication",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.96 },
  },
  {
    answer: null,
    retrieved_chunks: [],
    citations_valid: false,
    validation_errors: [],
    safety: {
      classification: "PATIENT_SPECIFIC",
      reason:
        "This is a personal medical question. The guideline cannot provide individualised advice. Please consult your neurologist or GP for personalised guidance.",
      safe_to_answer: false,
    },
    confidence: { level: "REFUSE", score: 0.0 },
  },
  {
    answer:
      "Sodium valproate is recommended as a first-line treatment for generalised tonic-clonic seizures, absence seizures, and myoclonic seizures. However, due to its teratogenic potential, it should be used with caution in women of childbearing age. Levetiracetam and lamotrigine are alternative broad-spectrum agents.",
    retrieved_chunks: [
      {
        chunk_id: 160,
        source: "NG217_Epilepsies.pdf",
        section: "1.4 Pharmacological treatment",
        page: 33,
        page_label: "33",
        reranker_rank: 1,
        reranker_score: 0.93,
        chunk_text:
          "Sodium valproate is an effective broad-spectrum antiepileptic drug suitable for generalised tonic-clonic seizures, absence seizures, and myoclonic seizures.",
      },
      {
        chunk_id: 161,
        source: "NG217_Epilepsies.pdf",
        section: "1.4 Pharmacological treatment",
        page: 34,
        page_label: "34",
        reranker_rank: 2,
        reranker_score: 0.90,
        chunk_text:
          "Levetiracetam and lamotrigine are alternative broad-spectrum antiepileptic drugs that may be considered, particularly in women of childbearing potential where valproate is contraindicated.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about treatment options",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.91 },
  },
  {
    answer:
      "According to the NICE NG217 guideline, an EEG should be considered in children and young people when the diagnosis of epilepsy is uncertain, or to classify the seizure type. An MRI scan of the brain should be offered to people with epilepsy if there is an indication such as an abnormal neurological examination, seizure onset after age 2, or focal seizures.",
    retrieved_chunks: [
      {
        chunk_id: 60,
        source: "NG217_Epilepsies.pdf",
        section: "1.2 Investigations",
        page: 14,
        page_label: "14",
        reranker_rank: 1,
        reranker_score: 0.94,
        chunk_text:
          "EEG should be considered when the diagnosis of epilepsy is uncertain or to help classify seizure type. MRI should be offered when there is clinical suspicion of structural cause.",
      },
      {
        chunk_id: 61,
        source: "NG217_Epilepsies.pdf",
        section: "1.2 Investigations",
        page: 15,
        page_label: "15",
        reranker_rank: 2,
        reranker_score: 0.88,
        chunk_text:
          "Brain imaging with MRI is recommended for people with epilepsy who have focal seizures, an abnormal neurological examination, or seizure onset after the age of 2 years.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about investigations",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.91 },
  },
  {
    answer:
      "The guideline recommends that children and young people with epilepsy should have an individualised epilepsy care plan. This plan should include seizure type, current medication and dose, seizure first-aid guidance, emergency management plan, and contact details for the specialist team. The care plan should be reviewed at least annually.",
    retrieved_chunks: [
      {
        chunk_id: 280,
        source: "NG217_Epilepsies.pdf",
        section: "2.1 Care planning",
        page: 55,
        page_label: "55",
        reranker_rank: 1,
        reranker_score: 0.96,
        chunk_text:
          "Every child and young person with epilepsy should have an individualised epilepsy care plan, developed in partnership with the family and shared with all relevant healthcare providers.",
      },
      {
        chunk_id: 281,
        source: "NG217_Epilepsies.pdf",
        section: "2.1 Care planning",
        page: 56,
        page_label: "56",
        reranker_rank: 2,
        reranker_score: 0.92,
        chunk_text:
          "The epilepsy care plan should include seizure first-aid guidance, emergency management protocols including when to call emergency services, and seizure diaries.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "NORMAL",
      reason: "Guideline question about care planning",
      safe_to_answer: true,
    },
    confidence: { level: "HIGH", score: 0.94 },
  },
];

const REFUSE_RESPONSE = MOCK_RESPONSES[6];

function pickResponse(question) {
  const q = question.toLowerCase();

  if (
    q.includes("should i stop") ||
    q.includes("should i change") ||
    q.includes("is it safe for me") ||
    q.includes("my child") ||
    q.includes("for me personally")
  ) {
    return REFUSE_RESPONSE;
  }

  const keywordMap = [
    { keywords: ["absence", "first-line", "ethosuximide"], index: 0 },
    { keywords: ["diagnos", "criteria", "define", "definition"], index: 1 },
    { keywords: [
      "status epilepticus",
      "emergency",
      "prolonged seizure",
      "benzodiazepine",
    ], index: 2 },
    { keywords: ["lamotrigine", "titrat", "dose", "dosing"], index: 3 },
    { keywords: ["driv", "drive", "dvla", "licence"], index: 4 },
    { keywords: ["pregnant", "pregnancy", "women", "teratogen", "valproate"], index: 5 },
    { keywords: ["valproate", "broad-spectrum", "tonic-clonic", "levetiracetam"], index: 7 },
    { keywords: ["eeg", "mri", "scan", "investigation", "imaging"], index: 8 },
    { keywords: ["care plan", "care planning", "management plan"], index: 9 },
  ];

  for (const entry of keywordMap) {
    if (entry.keywords.some((kw) => q.includes(kw))) {
      return MOCK_RESPONSES[entry.index];
    }
  }

  return {
    answer:
      "The NICE NG217 guideline does not contain sufficient information to answer this specific question. Please consult your healthcare professional for further guidance, or try rephrasing your question to focus on epilepsy diagnosis, treatment, or management.",
    retrieved_chunks: [
      {
        chunk_id: 400,
        source: "NG217_Epilepsies.pdf",
        section: "Appendix",
        page: 150,
        page_label: "150",
        reranker_rank: 1,
        reranker_score: 0.42,
        chunk_text:
          "This guideline covers the diagnosis and management of epilepsies in children, young people and adults.",
      },
    ],
    citations_valid: true,
    validation_errors: [],
    safety: {
      classification: "INSUFFICIENT_EVIDENCE",
      reason: "The guideline does not contain enough information to answer this question.",
      safe_to_answer: true,
    },
    confidence: { level: "LOW", score: 0.35 },
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function askQuestion(question) {
  await delay(1200 + Math.random() * 1800);
  return pickResponse(question);
}
