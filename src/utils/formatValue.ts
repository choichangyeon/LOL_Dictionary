export const formatText = (originalText: string): string => {
  return originalText.replace(/<\/?[^>]+>/g, "").trim();
};
