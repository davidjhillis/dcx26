// Thin wrapper around <script type="application/ld+json"> so pages don't
// repeat the dangerouslySetInnerHTML + JSON.stringify boilerplate.

type Props = { data: Record<string, unknown> | Record<string, unknown>[] };

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
