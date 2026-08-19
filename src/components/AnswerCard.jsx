import StatusBadges from "./StatusBadges";
import EvidenceTable from "./EvidenceTable";
import FooterCards from "./FooterCards";

export default function AnswerCard({ answerCard }) {
  if (!answerCard) return null;

  return (
    <div className="animate-fade-in">
      <StatusBadges
        status={answerCard.status}
        evidenceQuality={answerCard.evidenceQuality}
      />
      <EvidenceTable evidence={answerCard.evidence} />
      <FooterCards
        suggestedAction={answerCard.suggestedAction}
        error={answerCard.error}
      />
    </div>
  );
}
