import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "How DiscoverCX and its parent company Ingeniux Corporation collect, use, and protect information across discovercx.com and the DiscoverCX platform.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "January 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy policy.
            <br />
            <span className="text-ink-3">What we collect, why, and how to opt out.</span>
          </>
        }
        lede="DiscoverCX is operated by Ingeniux Corporation. This policy covers discovercx.com and the DiscoverCX platform — what we collect, how we use it, and how to reach us about your data."
      />

      <article className="bg-bg">
        <div className="prose-article mx-auto max-w-3xl px-8 py-16 text-[16px] leading-relaxed text-ink-2 lg:py-24">
          <p className="text-[13px] text-ink-4">Last updated: {LAST_UPDATED}</p>

          <p className="mt-6">
            Ingeniux Corporation (&quot;Ingeniux,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            operates several websites including <strong className="text-ink">discovercx.com</strong> and
            ingeniux.com. We are firmly committed to respecting your privacy regarding any information we
            may collect while operating our websites. The following policy outlines how we gather, use, and
            distribute information, referred to in this policy as &quot;our website.&quot;
          </p>

          <h2 className="headline mt-12 text-[26px] text-ink">About the information we collect</h2>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Non-personally-identifying information</h3>
          <p className="mt-3">
            Like most website operators, we collect non-personally-identifying information of the sort
            that web browsers and servers typically make available — browser type, language preference,
            referring site, and the date and time of each visitor request. Our purpose is to better
            understand how visitors use the site. We may release non-personally-identifying information
            in aggregate (e.g. a report on usage trends).
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Potentially personally-identifying information</h3>
          <p className="mt-3">
            We also collect potentially personally-identifying information like IP addresses. We do not
            use such information to identify visitors and do not disclose it, other than under the same
            circumstances that we use and disclose personally-identifying information, as described below.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Personally-identifying information</h3>
          <p className="mt-3">
            Some visitors interact with us in ways that require us to gather personally-identifying
            information. The amount and type depends on the nature of the interaction — for example, when
            you request a demo we ask for a company, your name, work email, and (optionally) phone. We
            collect such information only insofar as necessary or appropriate to fulfill the purpose of
            your interaction with us, and never disclose it other than as described in this policy. You
            can always decline to supply this information, with the caveat that doing so may prevent you
            from engaging in certain website activities.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Aggregated statistics</h3>
          <p className="mt-3">
            We may collect statistics about visitor behavior and display these publicly or provide them
            to others. We do not disclose personally-identifying information other than as described in
            this policy.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Customer testimonials</h3>
          <p className="mt-3">
            We may post customer testimonials that contain personal information. Testimonials are
            submitted by the customer either directly to us or to public review websites and are vetted
            by the customer prior to publication. Customers may request that this information be deleted
            or edited at any time.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Public forums</h3>
          <p className="mt-3">
            We may operate publicly accessible blogs and community forums. Any information posted in
            these areas may be read, collected, and used by others who have access to them. Participants
            may request to have their content deleted or edited.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Social media features and widgets</h3>
          <p className="mt-3">
            We include features such as social-share buttons. These may collect a visitor&apos;s IP
            address, the page being visited, and may set a cookie to enable the feature. Social media
            features and widgets are either hosted by a third party or hosted directly on our website.
            Interactions with these features are governed by the privacy policy of the company providing
            them.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">External links and third-party websites</h3>
          <p className="mt-3">
            We sometimes link to third-party sites. We are not responsible for the privacy practices or
            content of these third-party sites, nor for information you authorize for transfer to them.
            We encourage you to read the privacy policy of any website you visit.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Personal information collection</h3>
          <p className="mt-3">
            When you visit or sign in, cookies and similar technologies may be used by our online data
            partners or vendors to associate these activities with other personal information they or
            others have about you, including by association with your email or home address. We (or
            service providers on our behalf) may then send communications and marketing to those
            addresses. You may opt out of this advertising by visiting{" "}
            <a
              href="https://app.retention.com/optout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-2 underline hover:text-accent"
            >
              app.retention.com/optout
            </a>
            .
          </p>

          <h2 className="headline mt-12 text-[26px] text-ink">Cookie policy</h2>

          <p className="mt-4">
            A cookie is a string of information that a website stores on a visitor&apos;s computer and
            that the visitor&apos;s browser provides to the website each time the visitor returns.
          </p>

          <p className="mt-4 font-semibold text-ink">We may use the following types of cookies:</p>
          <ul className="mt-3 space-y-2 pl-6 list-disc marker:text-accent-2">
            <li><strong className="text-ink">Session cookies</strong> — expire once the browser is closed</li>
            <li><strong className="text-ink">Persistent cookies</strong> — stay on a visitor&apos;s computer until deleted</li>
            <li><strong className="text-ink">First-party cookies</strong> — set by us to enable site features and functionality</li>
            <li><strong className="text-ink">Third-party cookies</strong> — set to allow third parties (e.g. Google Analytics) access to certain information collected on our website</li>
          </ul>

          <p className="mt-4 font-semibold text-ink">We use cookies to:</p>
          <ul className="mt-3 space-y-2 pl-6 list-disc marker:text-accent-2">
            <li>Analyze website traffic</li>
            <li>Personalize visitor experiences</li>
            <li>Provide social media features</li>
            <li>Assist with marketing efforts</li>
            <li>Facilitate the sign-up and login process for our products and resources</li>
          </ul>

          <p className="mt-4">
            Visitors who do not wish to accept cookies can set their browsers to refuse them. Note that
            disabling cookies will likely affect the functionality and features of this and other
            websites you visit.
          </p>

          <h2 className="headline mt-12 text-[26px] text-ink">What we do with the information we collect</h2>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Disclosure of personally-identifying information</h3>
          <p className="mt-3">
            We disclose potentially personally-identifying and personally-identifying information only to
            those employees, contractors, and affiliated organizations that:
          </p>
          <ul className="mt-3 space-y-2 pl-6 list-disc marker:text-accent-2">
            <li>Need to know that information to process it on our behalf</li>
            <li>Need it to provide services available within our website</li>
            <li>Need it to offer services requested of us that we do not directly provide</li>
            <li>Have agreed not to disclose it to others</li>
          </ul>
          <p className="mt-4">
            Some of those employees, contractors, and affiliated organizations may provide processing
            services in other countries; by using our websites, you consent to the transfer of such
            information for the purposes noted in this policy. Other than as described above, we disclose
            personally-identifying information only when required to do so by law, or when we believe in
            good faith that disclosure is reasonably necessary to protect the property or rights of
            Ingeniux, third parties, or the public at large.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Websites hosted on behalf of customers</h3>
          <p className="mt-3">
            Part of our business involves hosting websites on behalf of customers. Some of these may
            collect personal information. In these cases, the nature and use of the personal information
            is determined by the Ingeniux customer, and we engage with the customer-related personal
            information only as a Processor based on contracted services.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Communications</h3>
          <p className="mt-3">
            Registered users who have supplied personally-identifying information (e.g. email address)
            may occasionally receive emails about new features, to solicit feedback, or to share product
            news. Individuals who interact with us online, provide their email, or attend our events may
            also occasionally receive communications about our products and services. Recipients may
            opt out by clicking the &quot;unsubscribe&quot; link in the email footer, or by formally
            requesting (via email or phone) that any and/or all communications cease.
          </p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Data retention</h3>
          <p className="mt-3">
            We retain personal data we control for as long as it remains relevant to its processed value
            to the company, or as long as it is needed to provide customer services.
          </p>

          <h2 className="headline mt-12 text-[26px] text-ink">How we protect the information we collect</h2>
          <p className="mt-4">
            We take all reasonable measures to protect against unauthorized access, use, alteration, or
            destruction of potentially personally-identifying and personally-identifying information.
            Measures include data encryption at rest and in transit, verification of backup integrity and
            security, and gathering of only the data required to meet business process requirements. We
            will not rent or sell potentially personally-identifying or personally-identifying
            information to anyone.
          </p>

          <h2 className="headline mt-12 text-[26px] text-ink">Access to personal information</h2>
          <p className="mt-4">
            We will provide a verified individual with information about whether we hold any of their
            personal information upon request. That individual may request to have this information
            sent to them, deleted, or edited. We will comply to the degree possible within restrictions
            of relevant law, regulation, and parameters required to maintain security or functionality
            for contracted customer services.
          </p>

          <h2 className="headline mt-12 text-[26px] text-ink">How to contact us</h2>
          <p className="mt-4">
            Questions regarding this privacy policy or our security practices may be sent to{" "}
            <a
              href="mailto:privacy@ingeniux.com"
              className="text-accent-2 underline hover:text-accent"
            >
              privacy@ingeniux.com
            </a>{" "}
            or by postal mail to:
          </p>
          <address className="mt-4 not-italic text-[14px] leading-relaxed text-ink">
            Ingeniux Corporation<br />
            Re: Privacy<br />
            PO Box 21466<br />
            Seattle, WA 98111-3466
          </address>

          <h2 className="headline mt-12 text-[26px] text-ink">Privacy policy changes</h2>
          <p className="mt-4">
            Although most changes are likely to be minor, we may change this Privacy Policy at our sole
            discretion. We encourage visitors to check this page periodically. Continued use of our
            websites after any change constitutes acceptance of that change.
          </p>
        </div>
      </article>
    </>
  );
}
