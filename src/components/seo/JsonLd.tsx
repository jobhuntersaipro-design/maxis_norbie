/**
 * Renders a JSON-LD <script>. Safe: we control the object shape and
 * JSON.stringify escapes the payload; there is no user input here.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
