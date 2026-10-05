export type ContactMessage = {
  name: string
  email: string
  message: string
}

export function createContactHref({ name, email, message }: ContactMessage) {
  const subject = `Portfolio enquiry from ${name.trim()}`
  const body = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    '',
    message.trim(),
  ].join('\n')

  return `mailto:anshshrestha15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
