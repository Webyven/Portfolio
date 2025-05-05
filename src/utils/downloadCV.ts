export function downloadCV(language: string): void {
  const fileName = language === 'es' ? 'cv-es.docx' : 'cv-en.docx'
  const link = document.createElement('a')
  link.href = fileName
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
