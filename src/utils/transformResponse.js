export function transformResponse(apiResponse) {
  const {
    answer,
    retrieved_chunks = [],
    citations_valid,
    validation_errors = [],
    safety = {},
  } = apiResponse;

  const refused = safety.safe_to_answer === false;

  const status = refused ? "No Answer" : "Answered";

  const evidence = retrieved_chunks.map((chunk) => ({
    document: chunk.source || "Unknown",
    section: chunk.section || "—",
    page: chunk.page ?? "—",
    chunkId: chunk.chunk_id != null ? `chunk_${chunk.chunk_id}` : "—",
    score: chunk.reranker_score ?? 0,
  }));

  let evidenceQuality;
  if (refused || evidence.length === 0) {
    evidenceQuality = "Low";
  } else if (citations_valid === false) {
    evidenceQuality = "Medium";
  } else {
    evidenceQuality = "High";
  }

  const errorParts = [];
  if (refused && safety.reason) errorParts.push(safety.reason);
  if (validation_errors.length > 0) errorParts.push(validation_errors.join("; "));
  const error = errorParts.length > 0 ? errorParts.join(" — ") : null;

  return {
    content: answer || "",
    answerCard: {
      status,
      evidenceQuality,
      evidence,
      suggestedAction: null,
      error,
    },
  };
}
